import Link from "next/link";
import ArchiveGallery from "./components/ArchiveGallery";
import MoooveWordmark from "./components/MoooveWordmark";
import { DEFAULT_SOCIAL_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, createPageMetadata } from "./seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: `${SITE_NAME} — Motion Designer & GenAI Creative Technologist`,
  description: SITE_DESCRIPTION,
  path: "/",
  image: DEFAULT_SOCIAL_IMAGE,
  imageAlt: `${SITE_NAME} portfolio`,
  imageWidth: 1200,
  imageHeight: 630,
  absoluteTitle: true,
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} Portfolio`,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: "Motion Designer and GenAI Creative Technologist",
      description: SITE_DESCRIPTION,
      address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
      sameAs: ["https://www.linkedin.com/in/ekaterina-pushkina-768b86244/"],
      knowsAbout: ["Motion design", "Generative AI", "Creative technology", "Brand systems", "Technology storytelling"],
    },
  ],
};

export default function Home() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <header className={styles.header}>
        <Link href="#top" className={styles.name}>Ekaterina Pushkina</Link>
        <nav aria-label="Portfolio navigation">
          <a href="#selected-work">Selected work</a>
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Motion designer specializing in technology storytelling, brand systems, and scalable content production.</h1>
        </div>
        <div className={styles.heroInteractive}><MoooveWordmark /></div>
      </section>

      <ArchiveGallery />

      <section id="about" className={`${styles.section} ${styles.about}`}>
        <div className={styles.sectionLabel}>About me</div>
        <p>I’m Ekaterina, a Seattle-based GenAI creative technologist and motion designer with six years of experience. I turn complex ideas into clear visual stories and build reusable systems that help ambitious creative work scale.</p>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contact}`}>
        <div className={styles.sectionLabel}>Contact</div>
        <a href="mailto:pushkina.katrine@gmail.com">pushkina.katrine@gmail.com</a>
        <a href="https://www.linkedin.com/in/ekaterina-pushkina-768b86244/" target="_blank" rel="noreferrer">LinkedIn</a>
      </section>

      <footer className={styles.footer}><span>Ekaterina Pushkina</span><a href="#top">Back to top <span className="iconGlyph">↑</span></a></footer>
    </main>
  );
}
