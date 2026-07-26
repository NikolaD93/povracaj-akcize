import type { Metadata } from "next";
import { Container, Grid, SectionHead, PostCard, Faq } from "@/components/ui";
import { getAllPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog – vodič kroz povraćaj akcize",
  description:
    "Konkretni primeri, promene zakona i odgovori na pitanja o povraćaju akcize na gorivo — pisano za prevoznike, špeditere i građevinske firme.",
  alternates: { canonical: "/blog/" },
};

const FAQ_ITEMS = [
  {
    q: "Koliko iznosi povraćaj po litru?",
    a: "Aktuelni povraćaj je 37,02 din po litru. Iznos akcize se usklađuje početkom godine ili prilikom poremećaja na tržištu nafte, pa se stopa povraćaja može menjati.",
  },
  {
    q: "Mogu li da tražim povraćaj za ranije godine?",
    a: "Da. Zahtev se može podneti za nabavke goriva u poslednjih 5 godina, pod uslovom da su računi plaćeni i da postoji potrebna dokumentacija.",
  },
  {
    q: "Kada podnosim zahtev?",
    a: "Elektronski, najranije 20 dana po isteku kvartala u kojem je gorivo kupljeno i utrošeno u transportne svrhe.",
  },
  {
    q: "Kada dobijam novac?",
    a: "Poreska uprava treba da donese rešenje u roku od 30 dana, a isplata se vrši u roku od 2 radna dana od dostavljanja rešenja.",
  },
  {
    q: "Da li posedovanje kamiona automatski znači da imam pravo?",
    a: "Ne. Pravo zavisi od registrovane delatnosti, namene goriva, vrste vozila i dokumentacije. Zato svaki slučaj proveravamo pojedinačno.",
  },
];

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Container className="py-14">
      <SectionHead
        eyebrow="Blog"
        as="h1"
        title="Vodič kroz povraćaj akcize"
        lead="Konkretni primeri, promene zakona i odgovori na pitanja — pisano za prevoznike, špeditere i građevinske firme."
      />

      <Grid cols={3}>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            href={`/blog/${post.slug}/`}
            emoji={post.emoji}
            category={post.category}
            title={post.title}
            excerpt={post.excerpt}
          />
        ))}
      </Grid>

      <div className="mb-6 mt-14">
        <h2>Česta pitanja</h2>
      </div>
      <Faq items={FAQ_ITEMS} />
    </Container>
  );
}
