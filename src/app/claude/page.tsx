import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Claude — Independent Motion Concept",
  description: "An independent motion concept showing how Claude Artifacts transforms a conversation into a working, shareable digital experience.",
  path: "/claude/",
  image: "/media/covers/claude.png",
  imageAlt: "Claude Artifacts independent motion concept",
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

export default function Claude() {
  return (
    <main id="top" className={styles.page}>
      <header className={styles.header}>
        <Link href="/">home</Link>
        <span>/</span>
        <strong>Claude</strong>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Independent Motion Concept</p>
          <h1>Claude</h1>
          <p className={styles.heroLead}>An independent motion concept showing how Claude Artifacts transforms a simple conversation into a working, shareable digital experience.</p>
        </div>

        <figure className={styles.heroFilm}>
          <video controls playsInline preload="metadata" poster="/media/covers/claude.png" aria-label="Claude Artifacts motion concept">
            <source src="/media/additional/claude-final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <figcaption><span>Claude Artifacts</span><span>29 seconds · 16:9</span></figcaption>
        </figure>
      </section>

      <section className={styles.overview} aria-label="Project overview">
        <dl>
          <div><dt>Role</dt><dd>Concept · Storyboard · Motion Design · UI Animation · Editing · Sound Design</dd></div>
          <div><dt>Production</dt><dd>After Effects · Cinema 4D extension</dd></div>
          <div><dt>Project</dt><dd>Independent motion concept</dd></div>
        </dl>
      </section>

      <section className={styles.section}>
        <SectionLabel number="01">Challenge</SectionLabel>
        <div className={styles.challengeGrid}>
          <div className={styles.textBlock}>
            <h3>One capability, many possible outputs.</h3>
            <p>Artifacts can produce apps, tools, visualizations, and other interactive content, but that flexibility can be difficult to communicate in a short product advertisement. <a href="https://www.anthropic.com/news/build-artifacts" target="_blank" rel="noreferrer">Anthropic <span className="iconGlyph">↗</span></a></p>
          </div>
          <figure>
            <Image src="/media/claude/claude-prompt.png" alt="Claude Artifacts categories including apps, websites, documents, templates, and games" fill sizes="(max-width: 800px) 100vw, 460px" />
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="02">Approach</SectionLabel>
        <div className={styles.textSection}>
          <h3>Idea. Prompt. Generation. Interactive result.</h3>
          <div>
            <p>I built the story around one clear transformation: idea, prompt, generation, and interactive result. UI animation, kinetic typography, and focused product moments made the workflow feel immediate while remaining consistent with Claude’s visual language.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel number="03">Outcome</SectionLabel>
        <div className={styles.outcome}>
          <p className={styles.eyebrow}>Claude Artifacts</p>
          <h3>Describe an idea and turn it into something usable.</h3>
          <p>A concise motion ad that translates an abstract AI capability into a clear product benefit: describe an idea and turn it into something usable.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><span>Independent Motion Concept</span><strong>Claude</strong></div>
        <Link href="/">Selected work</Link>
        <a href="#top">Back to top <span className="iconGlyph">↑</span></a>
      </footer>
    </main>
  );
}
