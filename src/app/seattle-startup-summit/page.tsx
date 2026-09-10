import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Seattle Startup Summit 2025 — Event Identity",
  description: "A flexible identity for Seattle’s inaugural AI developer-tools summit.",
  path: "/seattle-startup-summit/",
  image: "/media/covers/seattle.png",
  imageAlt: "Seattle Startup Summit 2025 event identity",
});

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className={styles.sectionLabel}>
      <span>{number}</span>
      <h2>{children}</h2>
      <i />
    </div>
  );
}

export default function SeattleStartupSummit() {
  return (
    <main id="top" className={styles.page}>
      <header className={styles.header}>
        <Link href="/">home</Link>
        <span>/</span>
        <strong>Seattle Startup Summit</strong>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Event Identity</p>
        <h1>Seattle Startup Summit 2025</h1>
        <p className={styles.heroLead}>A flexible identity for Seattle’s inaugural AI developer-tools summit.</p>

        <div className={styles.videoStage}>
          <video controls playsInline preload="metadata" aria-label="Seattle Startup Summit promotional video">
            <source src="/media/additional/seattle-startup-summit.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.mediaMeta}><span>Promotional video</span><span>AI Dev Tools</span></div>
        </div>
      </section>

      <section className={styles.overview} aria-label="Project overview">
        <dl>
          <div><dt>Role</dt><dd>Brand Design · Motion Design · Art Direction</dd></div>
          <div><dt>Deliverables</dt><dd>Promotional Video · Speaker Cards · T-Shirts · Social Assets</dd></div>
          <div><dt>Timeline</dt><dd>Two weeks</dd></div>
        </dl>
      </section>

      <section className={styles.section}>
        <SectionLabel number="01">Event Scale</SectionLabel>
        <div className={styles.feature}>
          <figure className={styles.featurePhoto}>
            <Image
              src="/media/seattle-startup-summit/event-photo-02.jpg"
              alt="Seattle Startup Summit team wearing the event identity at The Westin Seattle"
              fill
              sizes="(max-width: 800px) 100vw, 68vw"
            />
          </figure>
          <div className={styles.featureCopy}>
            <h3>Nearly 900 attendees, 80 companies, and 50+ product demos.</h3>
            <p>Presented by OSS4AI at The Westin Seattle, the inaugural summit connected developers, founders, investors, and technology leaders around AI Dev Tools.</p>
            <p className={styles.participants}>AWS · Microsoft · Databricks · GitHub · Pinecone · J.P. Morgan · Madrona · Acquired</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="02">The System</SectionLabel>
        <div className={styles.systemFeature}>
          <div className={styles.featureCopy}>
            <h3>Move fast without losing consistency.</h3>
            <p>Speaker and program information continued to arrive throughout production. I built reusable rules for type, color, composition, imagery, and hierarchy, then translated them into modular cards that stayed readable across changing content.</p>
          </div>
          <div className={styles.cardGrid}>
            <figure>
              <Image
                src="/media/seattle-startup-summit/startup-judge-card.webp"
                alt="Seattle Startup Summit card for startup judge Akanksha Shrivastava"
                width={1800}
                height={1800}
                sizes="(max-width: 800px) 100vw, 30vw"
              />
            </figure>
            <figure>
              <Image
                src="/media/seattle-startup-summit/workshop-judge-card.webp"
                alt="Seattle Startup Summit card for workshop judge Archit Sood"
                width={1800}
                height={1800}
                sizes="(max-width: 800px) 100vw, 30vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="03">Merchandise</SectionLabel>
        <div className={styles.merchFeature}>
          <div className={styles.featureCopy}>
            <h3>The identity, carried into the venue.</h3>
            <p>The volunteer T-shirt extended the system from digital promotion into a physical event application.</p>
          </div>
          <figure className={styles.shirtArtwork}>
            <Image
              src="/media/seattle-startup-summit/volunteer-tshirts.webp"
              alt="Front and back designs for purple Seattle Startup Summit volunteer T-shirts"
              width={2000}
              height={2000}
              sizes="(max-width: 800px) 100vw, 68vw"
            />
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="04">Live Event</SectionLabel>
        <div className={styles.feature}>
          <figure className={`${styles.featurePhoto} ${styles.peoplePhoto}`}>
            <Image
              src="/media/seattle-startup-summit/event-photo-01.jpg"
              alt="Seattle Startup Summit volunteers wearing the purple event T-shirts"
              fill
              sizes="(max-width: 800px) 100vw, 68vw"
            />
          </figure>
          <div className={styles.featureCopy}>
            <h3>Built to stay useful as the program changed.</h3>
            <p>The final system let the team add new speakers and information without redesigning every asset from scratch.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><span>Event Identity</span><strong>Seattle Startup Summit 2025</strong></div>
        <Link href="/">Selected work</Link>
        <a href="#top">Back to top <span className="iconGlyph">↑</span></a>
      </footer>
    </main>
  );
}
