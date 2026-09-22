import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "SummitInvest — Logo Design & Animation",
  description: "A brand identity and motion system connecting SummitInvest’s Washington roots with investment, growth, and forward progress.",
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
          <p className={styles.eyebrow}>Logo Design &amp; Animation</p>
          <h1>SummitInvest</h1>
          <p className={styles.heroLead}>A visual identity for a Washington-based investment-assistance startup, connecting the company’s regional roots with investment, growth, and forward progress.</p>
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
          <div><dt>Subject</dt><dd>SummitInvest, a Washington-based investment-assistance startup</dd></div>
          <div><dt>Goal</dt><dd>Create a visual identity connecting the company’s regional roots with investment, growth, and forward progress</dd></div>
          <div><dt>My role</dt><dd>Logo Design · Visual Development · Motion Design · Animation · Sound Design</dd></div>
        </dl>
      </section>

      <section className={styles.section}>
        <SectionLabel number="01">Overview</SectionLabel>
        <div className={styles.textSection}>
          <p>I designed the logo and developed its motion behavior, creating a cohesive identity that connects SummitInvest’s Washington roots with the ideas of investment, growth, and forward progress.</p>
        </div>
        <figure className={styles.challengeVisual}>
          <Image
            src="/media/summit-invest/summit-logo.png"
            alt="SummitInvest logo with an ascending investment graph"
            width={1920}
            height={1080}
            sizes="(max-width: 800px) 68vw, 440px"
          />
        </figure>
      </section>

      <section className={styles.section}>
        <SectionLabel number="02">Concept Development</SectionLabel>
        <div className={styles.textSection}>
          <div className={styles.bodyCopy}>
            <p>The client wanted the identity to reference Washington State, making mountains an important starting point. I combined the mountain silhouette with an upward-moving arrow inspired by investment and financial charts.</p>
            <p>The rising line forms part of the mountain itself and resolves into an arrow, bringing the geographic and financial references together in one symbol. A minimal geometric structure keeps the mark recognizable and versatile.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="03">Role</SectionLabel>
        <div className={styles.outcome}>
          <h3>Identity and motion, developed as one system.</h3>
          <p>I led the visual identity from concept through final animation, including the sound design for the completed motion piece.</p>
          <div><span>Logo Design</span><span>Visual Development</span><span>Motion Design</span><span>Animation</span><span>Sound Design</span></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><span>Logo Design &amp; Animation</span><strong>SummitInvest</strong></div>
        <Link href="/">Selected work</Link>
        <a href="#top">Back to top <span className="iconGlyph">↑</span></a>
      </footer>
    </main>
  );
}
