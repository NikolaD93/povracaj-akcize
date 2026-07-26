"use server";

import { Resend } from "resend";
import { z } from "zod";
import { SITE } from "@/lib/site";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Unesite ime i prezime."),
  company: z.string().trim().min(2, "Unesite naziv firme."),
  phone: z.string().trim().min(6, "Unesite ispravan broj telefona."),
  email: z.string().trim().email("Unesite ispravan email."),
  activity: z.string().trim().min(1),
  vehicles: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export const initialContactState: ContactState = { status: "idle" };

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: skriveno polje koje boti popune, a ljudi nikad ne vide.
  const honeypot = formData.get("website")?.toString() ?? "";
  if (honeypot) {
    return { status: "success" };
  }

  const parsed = ContactSchema.safeParse({
    name: formData.get("name")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    activity: formData.get("activity")?.toString() ?? "",
    vehicles: formData.get("vehicles")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Proverite uneta polja — nedostaju ili nisu ispravni obavezni podaci.",
    };
  }

  const { name, company, phone, email, activity, vehicles, message } = parsed.data;

  const textBody = [
    `Ime i prezime: ${name}`,
    `Firma: ${company}`,
    `Telefon: ${phone}`,
    `Email: ${email}`,
    `Delatnost: ${activity}`,
    `Broj vozila: ${vehicles || "—"}`,
    `Poruka: ${message || "—"}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Dev fallback — bez podešenog RESEND_API_KEY samo logujemo upit.
    console.warn("[kontakt] RESEND_API_KEY nije podešen, upit nije poslat emailom:\n" + textBody);
    return { status: "success" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Povraćaj Akcize <onboarding@resend.dev>",
      to: SITE.email,
      replyTo: email,
      subject: `Novi upit sa sajta — ${company}`,
      text: textBody,
    });

    if (error) {
      console.error("[kontakt] Resend error:", error);
      return {
        status: "error",
        message: "Došlo je do greške pri slanju. Pokušajte ponovo ili nas pozovite direktno.",
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[kontakt] Neočekivana greška:", err);
    return {
      status: "error",
      message: "Došlo je do greške pri slanju. Pokušajte ponovo ili nas pozovite direktno.",
    };
  }
}
