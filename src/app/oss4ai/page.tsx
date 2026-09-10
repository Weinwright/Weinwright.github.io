import AgentTopology from "../components/AgentTopology";
import HeroVideo from "../components/HeroVideo";
import Link from "next/link";
import { createPageMetadata } from "../seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "OSS4AI — Long-Form to Short-Form Motion System",
  description: "A reusable AI-assisted pipeline for turning long-form expert lectures into standalone promotional reels, first applied to Yujian Tang’s two-hour AI Agents lecture.",
  path: "/oss4ai/",
  imageAlt: "OSS4AI long-form to short-form motion system",
  imageWidth: 1200,
  imageHeight: 630,
});

const scoreCriteria = [
  { label: "Topic demand", weight: 25, tone: "cyan" },
  { label: "Usefulness + clarity", weight: 20, tone: "violet" },
  { label: "Audience relevance", weight: 15, tone: "green" },
  { label: "Standalone meaning", weight: 10, tone: "gold" },
  { label: "Hook + retention", weight: 10, tone: "coral" },
  { label: "Visual potential", weight: 10, tone: "blue" },
  { label: "Maven alignment", weight: 10, tone: "silver" },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className={styles.sectionLabel}>
      <span>{number}</span><h2>{children}</h2><i />
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to case study</a>
      <header className={styles.siteHeader}>
        <a href="#top" className={styles.identity} aria-label="Back to the top">
          <span>EP</span>
          <div><strong>Ekaterina Pushkina</strong><small>Motion Designer</small></div>
        </a>
        <nav aria-label="Case study navigation">
          <a href="#topology">Workflow</a><a href="#editorial">Decision model</a><a href="#outputs">Selected work</a>
        </nav>
      </header>

      <section id="main-content" className={styles.hero} tabIndex={-1}>
        <div className={styles.heroCopy}>
          <p className={styles.projectEyebrow}><Link href="/">home</Link><span>OSS4AI</span></p>
          <h1>Long-Form to Short-Form<br />Motion System</h1>
          <p className={styles.heroSummary}><strong>A reusable content-production workflow</strong> that turns long-form educational material into focused short-form campaigns. Its first use transformed a two-hour lecture on AI agents into 15 standalone videos—each designed to teach one useful idea, build instructor credibility, and lead relevant viewers to the Maven course.</p>
          <div className={styles.tags}><span>Short-form content strategy</span><span>AI-assisted editorial</span><span>Premiere Pro</span><span>After Effects</span><span>Remotion</span><span>Human-in-the-loop</span></div>
          <div className={styles.heroActions}>
            <a href="#challenge">Read the case study <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className={styles.heroMediaGroup}>
          <HeroVideo className={styles.heroMedia} />
          <a className={styles.heroReelsLink} href="#outputs">View more videos <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className={styles.overview} aria-label="Project overview">
        <dl>
          <div><dt>Subject</dt><dd>Yujian Tang’s AI Agents lecture</dd></div>
          <div><dt>Goal</dt><dd>Create useful standalone clips that build trust and direct interested viewers to the relevant Maven course</dd></div>
          <div><dt>My role</dt><dd>Editorial strategy, motion-system design, AI production direction, final polish and approval</dd></div>
        </dl>
      </section>

      <section id="challenge" className={styles.section}>
        <SectionLabel number="01">The challenges</SectionLabel>
        <div className={styles.challengesGrid}>
          <details className={styles.challengeCard}>
            <summary className={styles.challengeSummary}>
              <div className={styles.statement}><span>Challenge 01</span><h3>An interesting moment may not work as a complete short-form clip.</h3></div>
              <span className={styles.challengeToggle}><span className={styles.expandLabel}>View full challenge</span><span className={styles.collapseLabel}>Hide details</span><i aria-hidden="true">+</i></span>
            </summary>
            <div className={styles.problemCopy}>
              <p>Yujian&apos;s lecture is full of definitions, caveats, and asides that depend on earlier context, and keyword search can find a relevant topic but can&apos;t tell whether that section stands on its own.</p>
              <p>The evaluation therefore measured <strong>audience demand</strong> and <strong>editorial completeness</strong> separately. A clip qualified only if it introduced the topic, explained it, established why it mattered, and ended on a complete thought. A popular topic was rejected if the excerpt lacked context, changed the meaning of a claim, or ended before the main point.</p>
            </div>
          </details>
          <details className={styles.challengeCard}>
            <summary className={styles.challengeSummary}>
              <div className={styles.statement}><span>Challenge 02</span><h3>Static slides could not support a scalable short-form campaign.</h3></div>
              <span className={styles.challengeToggle}><span className={styles.expandLabel}>View full challenge</span><span className={styles.collapseLabel}>Hide details</span><i aria-hidden="true">+</i></span>
            </summary>
            <div className={styles.problemCopy}>
              <p>Yujian&apos;s lecture leaned on static presentation slides, so extracted clips lacked the visual movement short-form platforms need, and building custom graphics for each video by hand would have slowed production.</p>
              <p>This created a second requirement: a reusable motion system that could turn each clip&apos;s meaning into relevant supporting graphics while following consistent visual, layout, and animation rules.</p>
            </div>
          </details>
        </div>
      </section>

      <section id="topology" className={styles.section}>
        <SectionLabel number="02">The approach</SectionLabel>
        <div className={styles.sectionIntro}>
          <h3>The workflow automates repeatable tasks while keeping final decisions with the designer.</h3>
          <p>Local scripts handle transcription and media processing. AI supports research and clip analysis, proposes supporting graphics under designer-defined rules, and implements approved visuals in Remotion. After automated QA, the designer completes the Adobe polish and sound mix, then reviews and approves every delivery master.</p>
        </div>
        <AgentTopology />
      </section>

      <section id="editorial" className={styles.section}>
        <SectionLabel number="03">The decision model</SectionLabel>
        <div className={styles.evaluationGrid}>
          <article className={styles.scoreCard}>
            <div className={styles.cardHeader}><span>Stage 01</span><h3>Candidate score</h3></div>
            <div className={styles.scoreList}>
              {scoreCriteria.map((criterion) => (
                <div key={criterion.label} className={styles.scoreRow}>
                  <div><span>{criterion.label}</span><strong>{criterion.weight}%</strong></div>
                  <i className={styles[criterion.tone]} style={{ width: `${criterion.weight * 4}%` }} />
                </div>
              ))}
            </div>
          </article>
          <article className={styles.gateCard}>
            <div className={styles.cardHeader}><span>Stage 02</span><h3>Completeness gate</h3></div>
            <div className={styles.gateFlow}>
              <div><span>01</span><strong>Starts without missing context?</strong></div><div><span>02</span><strong>Communicates one clear idea?</strong></div>
              <div><span>03</span><strong>Delivers the promised takeaway?</strong></div><div><span>04</span><strong>Ends on a complete thought?</strong></div>
            </div>
            <span className={styles.gateOutcomeLabel}>Assessment categories</span>
            <div className={styles.gateOutcomes}><span>Ready to edit</span><span>Workable with a text setup</span><span>Workable with a factual text setup</span><span>Reject: cannot be made self-contained</span></div>
          </article>
        </div>
      </section>

      <section id="outputs" className={styles.section}>
        <SectionLabel number="04">The results</SectionLabel>
        <div className={styles.outputIntro}>
          <h3>Selected work</h3>
          <p>Supporting graphics turn technical ideas into clear visual explanations.</p>
        </div>
        <div className={styles.beforeAfter}>
          <article><div className={styles.videoLabel}><span>Before</span></div><video controls preload="none" playsInline poster="/media/posters/rag-raw.jpg" aria-label="Raw lecture cut about agentic RAG"><source src="/media/rag-raw-cut.mp4" type="video/mp4" /><track kind="captions" src="/media/captions/rag-raw.vtt" srcLang="en" label="English" /></video></article>
          <article className={styles.finalVideo}><div className={styles.videoLabel}><span>After</span></div><video controls preload="none" playsInline poster="/media/posters/rag-agentic.jpg" aria-label="Final reel explaining what makes RAG agentic"><source src="/media/what-makes-rag-agentic-final.mp4" type="video/mp4" /><track kind="captions" src="/media/captions/rag-agentic.vtt" srcLang="en" label="English" /></video></article>
        </div>
        <div className={styles.gallery}>
          <article><video controls preload="none" playsInline poster="/media/posters/llm-code.jpg" aria-label="Reel explaining whether an LLM executes code"><source src="/media/does-llm-execute-the-code-final.mp4" type="video/mp4" /><track kind="captions" src="/media/captions/llm-code.vtt" srcLang="en" label="English" /></video><div><span>Architecture explainer</span><strong>Does the LLM execute the code?</strong></div></article>
          <article><video controls preload="none" playsInline poster="/media/posters/compounding-errors.jpg" aria-label="Reel explaining how small AI errors become big failures"><source src="/media/compounding-errors-final.mp4" type="video/mp4" /><track kind="captions" src="/media/captions/compounding-errors.vtt" srcLang="en" label="English" /></video><div><span>Production reliability</span><strong>How small AI errors become big failures?</strong></div></article>
        </div>
        <div className={styles.resultSummary}><div><span>Project outcome</span><h3>The project produced 15 reels and a workflow that can be reused for similar lectures.</h3></div><p>The same editing rules, layouts, and Remotion components worked across several AI topics while preserving the speaker’s intended meaning.</p><a href="#topology">Review the workflow ↑</a></div>
      </section>

      <footer className={styles.footer}>
        <div><span>Case study · 2026</span><strong>OSS4AI: Long-Form to Short-Form Motion System</strong></div>
        <p>Designed and produced by Ekaterina Pushkina.</p><a href="#top">Back to top <span className="iconGlyph">↑</span></a>
      </footer>
    </main>
  );
}
