import Link from "next/link";
import styles from "./SimpleCaseStudy.module.css";

type SimpleCaseStudyProps = {
  name: string;
  videoId?: string;
  videos?: Array<{ label: string; src: string }>;
};

export default function SimpleCaseStudy({ name, videoId, videos }: SimpleCaseStudyProps) {
  return (
    <main className={styles.page}>
      <header className={styles.header}><Link href="/">home</Link><span>/</span><strong>{name}</strong></header>
      <section className={styles.hero}>
        <p className={styles.crumb}>home / {name}</p>
        <h1>{name}</h1>
        {videoId ? <div className={styles.videoFrame}><iframe src={`https://www.youtube.com/embed/${videoId}`} title={name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div> : <div className={styles.videoList}>{videos?.map((video) => <article key={video.src}><video controls playsInline preload="metadata"><source src={video.src} type="video/mp4" /></video><span>{video.label}</span></article>)}</div>}
      </section>
    </main>
  );
}
