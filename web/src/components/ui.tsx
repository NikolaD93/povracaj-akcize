import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1150px] px-[22px] ${className}`}>
      {children}
    </div>
  );
}

type ButtonVariant = "primary" | "ghost" | "outline" | "navy";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_6px_18px_rgba(22,163,74,0.35)] hover:bg-accent-dark hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-white border-2 border-white/55 hover:bg-white/10",
  outline:
    "bg-white text-navy border-2 border-line hover:border-accent",
  navy: "bg-navy text-white hover:bg-navy-2",
};

const baseButton =
  "inline-block border-0 cursor-pointer font-sans font-bold rounded-[10px] px-7 py-[15px] text-center transition-all duration-150 no-underline";

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type,
}: {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  type?: "submit" | "button";
}) {
  const classes = `${baseButton} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block rounded-[30px] bg-accent/12 px-3.5 py-1.5 text-[0.8rem] font-bold uppercase tracking-[0.06em] text-accent-dark">
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  as = "h2",
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  center?: boolean;
  className?: string;
}) {
  const Heading = as;
  return (
    <div
      className={`mb-9 max-w-[760px] ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading
        className={`${as === "h1" ? "text-[clamp(2rem,4.5vw,3.3rem)]" : "text-[clamp(1.6rem,3.2vw,2.3rem)] mb-2"} font-extrabold text-navy`}
      >
        {title}
      </Heading>
      {lead ? (
        <p
          className={`mt-5 text-[1.15rem] leading-relaxed text-muted ${center ? "mx-auto" : ""} max-w-[720px]`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

const gridColsClass: Record<2 | 3 | 4, string> = {
  2: "stack:grid-cols-2",
  3: "stack:grid-cols-3",
  4: "stack:grid-cols-4",
};

export function Grid({
  cols,
  children,
  className = "",
}: {
  cols: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-[22px] ${gridColsClass[cols]} ${className}`}>
      {children}
    </div>
  );
}

export function Card({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[14px] border p-[26px] shadow-card ${
        dark
          ? "border-transparent bg-navy text-white"
          : "border-line bg-white"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-3.5 grid h-12 w-12 place-items-center rounded-[11px] bg-accent/12 text-[1.4rem] text-accent-dark ${
        center ? "mx-auto" : ""
      }`}
    >
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="mr-1 mt-1 inline-block rounded-[30px] border border-line bg-bg px-[15px] py-[7px] text-[0.9rem] font-semibold text-muted">
      {children}
    </span>
  );
}

export function WarnBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-warn-border bg-warn-bg p-[22px]">
      <b className="text-warn-title">{title}</b>{" "}
      <span className="text-warn-text">{children}</span>
    </div>
  );
}

export function CtaBand({
  title,
  text,
  buttonLabel,
  buttonHref,
  className = "",
}: {
  title: ReactNode;
  text: ReactNode;
  buttonLabel: string;
  buttonHref: string;
  className?: string;
}) {
  return (
    <div
      className={`mt-5 rounded-[20px] bg-[linear-gradient(120deg,#16a34a,#0d8f45)] px-11 py-11 text-center text-white ${className}`}
    >
      <h2 className="text-white">{title}</h2>
      <p className="mx-auto mt-2 mb-6 max-w-[620px] text-[#e7fff0]">{text}</p>
      <Link
        href={buttonHref}
        className="inline-block rounded-[10px] bg-white px-7 py-[15px] text-center font-bold text-accent-dark no-underline transition hover:-translate-y-0.5"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}

export function Steps({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <Card>
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`flex gap-5 py-[22px] ${
            i < items.length - 1 ? "border-b border-line" : ""
          }`}
        >
          <div className="grid h-[46px] w-[46px] flex-shrink-0 place-items-center rounded-full bg-navy text-[1.2rem] font-extrabold text-white">
            {i + 1}
          </div>
          <div>
            <h3>{item.title}</h3>
            <p className="text-muted">{item.text}</p>
          </div>
        </div>
      ))}
    </Card>
  );
}

export function PostCard({
  href,
  imageUrl,
  imageAlt,
  category,
  title,
  excerpt,
}: {
  href: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`Pročitaj: ${title}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[14px] border border-line bg-white text-ink shadow-card no-underline transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(14,42,71,0.16)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={800}
        height={450}
        className="h-[170px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
      />
      <div className="flex flex-1 flex-col p-[22px]">
        <span className="text-[0.78rem] font-bold uppercase tracking-[0.05em] text-accent-dark">
          {category}
        </span>
        <h3 className="my-2">{title}</h3>
        <p className="text-[0.95rem] text-muted">{excerpt}</p>
        <span className="mt-auto pt-3 font-bold text-accent-dark">
          Pročitaj →
        </span>
      </div>
    </Link>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div>
      {items.map((item) => (
        <details
          key={item.q}
          className="faq-details mb-3 rounded-xl border border-line bg-white px-5 py-1"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-bold text-navy">
            {item.q}
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <p className="pb-[18px] text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
