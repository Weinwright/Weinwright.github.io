import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Sony Music Entertainment — First of Two + All These Rumors",
  description: "Rumelis: First of Two and All These Rumors—two short-form music projects for square and vertical social formats.",
  path: "/sony-music-entertainment/",
  image: "/media/covers/sony.png",
  imageAlt: "Sony Music Entertainment short-form motion projects",
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

export default function SonyMusicEntertainment() {
  return (
    <main id="top" className={styles.page}>
      <header className={styles.header}>
        <Link href="/">home</Link>
        <span>/</span>
        <strong>Sony Music Entertainment</strong>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>First of Two + All These Rumors</p>
          <h1>Sony Music<br />Entertainment</h1>
          <p className={styles.heroLead}><strong>Rumelis: First of Two</strong>, a square campaign film, and <strong>All These Rumors</strong>, a vertical song announcement created for social media.</p>
        </div>

        <figure className={styles.heroFilm}>
          <video controls playsInline preload="metadata" poster="/media/covers/sony.png" aria-label="Rumelis: First of Two square campaign film">
            <source src="/media/additional/sony-rum-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <figcaption><span>Rumelis: First of Two</span><span>15 seconds · Square</span></figcaption>
        </figure>
      </section>

      <section className={styles.overview} aria-label="Project overview">
        <dl>
          <div><dt>Role</dt><dd>Motion Design</dd></div>
          <div><dt>Projects</dt><dd>Rumelis: First of Two · All These Rumors</dd></div>
          <div><dt>Formats</dt><dd>Square campaign film · Vertical social announcement</dd></div>
        </dl>
      </section>

      <section className={styles.section}>
        <SectionLabel number="01">Rumelis: First of Two</SectionLabel>
        <div className={styles.intro}>
          <h3>First of Two: from silhouette to layered portrait.</h3>
          <p>For <em>First of Two</em>, a restrained red-and-black palette, mirrored profiles, analog texture, and double-exposure imagery create one visual world around Rumelis.</p>
        </div>

        <div className={styles.frameSequence}>
          <figure className={styles.frameWide}>
            <Image src="/media/sony/sony-rum1-02.png" alt="Mirrored Rumelis silhouettes in First of Two" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </figure>
          <figure>
            <Image src="/media/sony/sony-rum1-58.png" alt="First of Two portrait with storm and landscape imagery" fill sizes="(max-width: 800px) 100vw, 25vw" />
          </figure>
          <figure>
            <Image src="/media/sony/sony-rum1-94.png" alt="Final First of Two composition combining silhouettes and portraits" fill sizes="(max-width: 800px) 100vw, 25vw" />
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="02">All These Rumors</SectionLabel>
        <div className={styles.socialFeature}>
          <div className={styles.socialCopy}>
            <p className={styles.eyebrow}>Social Media Song Announcement</p>
            <h3>All These Rumors, announced in motion.</h3>
            <p>The vertical piece announces <em>All These Rumors</em> for social media, combining imagery of Rumelis and Andrea Zelletta.</p>
            <div className={styles.formatTags}><span>9:16</span><span>12 seconds</span><span>Pre-save</span></div>
          </div>
          <figure className={styles.socialFilm}>
            <video controls playsInline preload="metadata" poster="/media/sony/sony-social-poster.png" aria-label="All These Rumors vertical song announcement for social media">
              <source src="/media/additional/sony-rum-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </figure>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><span>First of Two + All These Rumors</span><strong>Sony Music Entertainment</strong></div>
        <Link href="/">Selected work</Link>
        <a href="#top">Back to top <span className="iconGlyph">↑</span></a>
      </footer>
    </main>
  );
}
