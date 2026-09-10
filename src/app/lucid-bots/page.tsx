import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Lucid Bots — Product Launch Motion System",
  description: "A shared product-storytelling and motion system for Lavo AI and Sherpa Drone.",
  path: "/lucid-bots/",
  image: "/media/covers/lucid-bots.png",
  imageAlt: "Lucid Bots product launch motion system",
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

export default function LucidBots() {
  return (
    <main id="top" className={styles.page}>
      <header className={styles.header}>
        <Link href="/">home</Link>
        <span>/</span>
        <strong>Lucid Bots</strong>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Product Launch Motion System</p>
        <h1>Complex robotics,<br />clear product stories.</h1>
        <p className={styles.heroLead}>Launch presentations and a reusable motion system for Lucid Bots’ Lavo AI and Sherpa Drone.</p>

        <div className={styles.heroProducts}>
          <figure>
            <div><Image src="/media/lucid-bots/lavo.webp" alt="Lavo robotic surface cleaner in operation" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <figcaption><span>01</span>Lavo AI</figcaption>
          </figure>
          <figure>
            <div><Image src="/media/covers/lucid-bots.png" alt="Sherpa cleaning drone with an animated product callout" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <figcaption><span>02</span>Sherpa Drone</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.overview} aria-label="Project overview">
        <dl>
          <div><dt>Role</dt><dd>Motion Designer · Visual Storyteller</dd></div>
          <div><dt>Contribution</dt><dd>Concept · Visual Direction · Storyboarding · Motion Design · Presentation Design</dd></div>
          <div><dt>Products</dt><dd>Lavo AI · Sherpa Drone</dd></div>
        </dl>
      </section>

      <section className={styles.section}>
        <SectionLabel number="01">Two Applications</SectionLabel>
        <div className={styles.intro}>
          <h3>Two products. One motion language.</h3>
          <p>Lavo focused on autonomous operation and surface cleaning. Sherpa moved from the limits of traditional exterior work to the drone in action and the customer outcome.</p>
        </div>

        <div className={styles.videoGrid}>
          <figure>
            <video controls playsInline preload="none" poster="/media/lucid-bots/lavo.webp" aria-label="Lavo AI product launch presentation">
              <source src="/media/additional/lucid-lavo-ai.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption><div><span>Lavo AI</span><strong>Product launch</strong></div><p>Sequence and hierarchy refined through user feedback.</p></figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="none" poster="/media/covers/lucid-bots.png" aria-label="Sherpa Drone product story">
              <source src="/media/additional/lucid-sherpa-drone.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption><div><span>Sherpa Drone</span><strong>Product story</strong></div><p>Storyboarded from operational challenge to customer outcome.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="02">Reusable System</SectionLabel>
        <div className={styles.systemFeature}>
          <div className={styles.systemCopy}>
            <h3>Built once, adapted across launches.</h3>
            <p>Product titles, feature callouts, data cards, transitions, and lower thirds became reusable MOGRTs—cutting production time by 30% while keeping every asset on brand.</p>
            <div className={styles.components} aria-label="Reusable motion components">
              <span>Titles</span><span>Callouts</span><span>Data cards</span><span>Lower thirds</span><span>Transitions</span>
            </div>
          </div>
          <figure className={styles.customerStory}>
            <video controls playsInline preload="none" aria-label="Golden Moon Casino customer interview case study">
              <source src="/media/additional/lucid-golden-moon-web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption><span>Customer story application</span><strong>Golden Moon Casino</strong></figcaption>
          </figure>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><span>Product Launch Motion System</span><strong>Lucid Bots</strong></div>
        <Link href="/">Selected work</Link>
        <a href="#top">Back to top <span className="iconGlyph">↑</span></a>
      </footer>
    </main>
  );
}
