import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "SummitInvest — Logo Animation",
  description: "A concise brand animation created for an investment-assistance app.",
  path: "/logo-animation-summit-invest/",
  image: "/media/covers/summit-invest.png",
  imageAlt: "SummitInvest logo animation",
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

export default function SummitInvest() {
  return (
    <main id="top" className={styles.page}>
      <header className={styles.header}>
        <Link href="/">home</Link>
        <span>/</span>
        <strong>SummitInvest</strong>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Logo Animation</p>
          <h1>SummitInvest</h1>
          <p className={styles.heroLead}>A concise brand animation created for an investment-assistance app, translating its identity into a sense of clarity, progress, and confidence.</p>
        </div>

        <figure className={styles.heroFilm}>
          <video controls playsInline preload="metadata" poster="/media/covers/summit-invest.png" aria-label="SummitInvest logo animation">
            <source src="/media/additional/logo-animation-summit-invest.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <figcaption><span>Final animation</span><span>8 seconds · 16:9</span></figcaption>
        </figure>
      </section>

      <section className={styles.overview} aria-label="Project overview">
        <dl>
          <div><dt>Role</dt><dd>Motion Design · Animation · Sound Design</dd></div>
          <div><dt>Project</dt><dd>Logo animation for an investment-assistance app</dd></div>
          <div><dt>Format</dt><dd>8-second brand animation</dd></div>
        </dl>
      </section>

      <section className={styles.section}>
        <SectionLabel number="01">Challenge</SectionLabel>
        <div className={styles.textSection}>
          <h3>A static identity needed a motion behavior.</h3>
          <p>The static identity needed a motion behavior that could communicate SummitInvest’s role as a clear, modern investment assistant while remaining recognizable at different sizes and across multiple digital touchpoints.</p>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="02">Approach</SectionLabel>
        <div className={styles.textSection}>
          <h3>Controlled pacing. Purposeful movement.</h3>
          <p>I animated the existing logo with controlled pacing and purposeful movement, reinforcing the brand’s focus on guided decision-making while keeping the result polished and adaptable.</p>
        </div>
        <div className={styles.frameSequence} aria-label="SummitInvest animation sequence">
          <figure><Image src="/media/summit-invest/summit-01.png" alt="SummitInvest logo assembling" fill sizes="(max-width: 800px) 100vw, 260px" /></figure>
          <figure><Image src="/media/summit-invest/summit-02.png" alt="Circular investment symbol during the animation" fill sizes="(max-width: 800px) 100vw, 260px" /></figure>
          <figure><Image src="/media/summit-invest/summit-03.png" alt="Completed SummitInvest logo" fill sizes="(max-width: 800px) 100vw, 260px" /></figure>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="03">Outcome</SectionLabel>
        <div className={styles.outcome}>
          <h3>A flexible logo animation.</h3>
          <p>A flexible logo animation designed for product intros, social content, presentations, and branded transitions.</p>
          <div><span>Product intros</span><span>Social content</span><span>Presentations</span><span>Brand transitions</span></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><span>Logo Animation</span><strong>SummitInvest</strong></div>
        <Link href="/">Selected work</Link>
        <a href="#top">Back to top <span className="iconGlyph">↑</span></a>
      </footer>
    </main>
  );
}
