import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "HeyGen Creator Campaign",
  description: "An influencer-led social campaign introducing HeyGen through technology creator Megan Lieu.",
  path: "/heygen/",
  image: "/media/heygen/poster.png",
  imageAlt: "HeyGen creator campaign featuring Megan Lieu",
  imageWidth: 540,
  imageHeight: 960,
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

export default function HeyGenPage() {
  return (
    <main id="top" className={styles.page}>
      <header className={styles.header}>
        <Link href="/">home</Link>
        <span>/</span>
        <strong>HeyGen Creator Campaign</strong>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Influencer Marketing Campaign</p>
          <h1>HeyGen<br />Creator Campaign</h1>
          <p className={styles.heroLead}>A social-first campaign introducing HeyGen through the workflow of technology creator Megan Lieu.</p>
        </div>

        <div className={styles.videoStage}>
          <video controls playsInline preload="metadata" poster="/media/heygen/poster.png" aria-label="HeyGen campaign featuring Megan Lieu">
            <source src="/media/heygen/campaign.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.mediaMeta}><span>Campaign film</span><span>Vertical social</span></div>
        </div>
      </section>

      <section className={styles.overview} aria-label="Project overview">
        <dl>
          <div><dt>Campaign</dt><dd>Influencer-led product marketing</dd></div>
          <div><dt>Format</dt><dd>Social-first vertical video</dd></div>
          <div><dt>Featured creator</dt><dd>Megan Lieu</dd></div>
        </dl>
      </section>

      <section className={styles.section}>
        <SectionLabel number="01">Campaign Idea</SectionLabel>
        <div className={styles.intro}>
          <h3>Make the product benefit visible through a creator people already trust.</h3>
          <p>The campaign positioned HeyGen through technology creators rather than an abstract feature list. Megan’s own footage becomes the proof: a clear before-and-after that shows how one recording can become reusable AI-led content.</p>
        </div>

        <div className={styles.storyGrid}>
          <figure>
            <div><Image src="/media/heygen/creator.png" alt="Technology creator Megan Lieu speaking in her studio" fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
            <figcaption><span>01</span><strong>Creator hook</strong><small>A recognizable voice opens the story</small></figcaption>
          </figure>
          <figure>
            <div><Image src="/media/heygen/transformation.png" alt="Original creator footage shown above a HeyGen avatar version" fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
            <figcaption><span>02</span><strong>AI transformation</strong><small>The result becomes the demonstration</small></figcaption>
          </figure>
          <figure>
            <div><Image src="/media/heygen/product-workflow.png" alt="HeyGen interface showing the script workflow" fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
            <figcaption><span>03</span><strong>Product proof</strong><small>The workflow connects the promise to the tool</small></figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="02">Creator-to-Product Flow</SectionLabel>
        <div className={styles.flowFeature}>
          <div className={styles.flowCopy}>
            <h3>Personal enough to feel native. Clear enough to explain the product.</h3>
            <p>The vertical edit moves between Megan’s direct-to-camera delivery, the generated avatar, and the interface—keeping the creator present while giving the product a concrete role in the story.</p>
          </div>
          <div className={styles.flowFrames}>
            <figure><Image src="/media/heygen/avatar-output.png" alt="Megan Lieu reviewing an AI avatar output in HeyGen" fill sizes="(max-width: 800px) 50vw, 24vw" /></figure>
            <figure><Image src="/media/heygen/creator-close.png" alt="Megan Lieu completing the creator-led product story" fill sizes="(max-width: 800px) 50vw, 24vw" /></figure>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><span>Influencer Marketing Campaign</span><strong>HeyGen Creator Campaign</strong></div>
        <Link href="/">Selected work</Link>
        <a href="#top">Back to top <span className="iconGlyph">↑</span></a>
      </footer>
    </main>
  );
}
