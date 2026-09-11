"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LazyCardVideo from "./LazyCardVideo";
import styles from "../page.module.css";

type ArchiveItem = {
  href: string;
  label: string;
  poster?: string;
  video?: string;
  privatePreview?: "rover" | "systems";
};

const privateSiteUrl = (process.env.NEXT_PUBLIC_PRIVATE_SITE_URL ?? "https://private.epushkina.com").replace(/\/$/, "");

const archiveItems: ArchiveItem[] = [
  { href: "/oss4ai", poster: "/media/posters/agents-together.jpg", video: "/media/additional/oss4ai-gmt.mp4", label: "OSS4AI" },
  { href: `${privateSiteUrl}/yandex-rover/`, video: "/media/private-previews/yandex-rover-preview.mp4", privatePreview: "rover", label: "Private case study" },
  { href: `${privateSiteUrl}/how/`, video: "/media/private-previews/how-preview.mp4", privatePreview: "systems", label: "Private case study" },
  { href: "/seattle-startup-summit", poster: "/media/covers/seattle.png", video: "/media/additional/seattle-startup-summit.mp4", label: "Seattle Startup Summit" },
  { href: "/claude", poster: "/media/covers/claude.png", video: "/media/additional/claude-final.mp4", label: "Claude" },
  { href: "/lucid-bots", poster: "/media/covers/lucid-bots.png", video: "/media/additional/lucid-golden-moon-web.mp4", label: "Lucid Bots" },
  { href: "/heygen", poster: "/media/heygen/poster.png", video: "/media/heygen/campaign.mp4", label: "HeyGen Creator Campaign" },
  { href: "/how-do-we-see", poster: "/media/covers/how-do-we-see.jpg", video: "/media/additional/how-do-we-see.mp4", label: "How Do We See" },
  { href: "/double-slit-experiment", poster: "/media/covers/double-slit.jpg", video: "/media/additional/double-slit.mp4", label: "Double-Slit Experiment" },
  { href: "/logo-animation-summit-invest", poster: "/media/covers/summit-invest.png", video: "/media/additional/logo-animation-summit-invest.mp4", label: "SummitInvest" },
  { href: "/animated-character", poster: "/media/covers/animated-character.jpg", video: "/media/additional/animated-character.mp4", label: "Animated Character" },
  { href: "/sony-music-entertainment", poster: "/media/covers/sony.png", video: "/media/additional/sony-rum-1.mp4", label: "Sony Music Entertainment" },
];

function GridIcon({ dense = false }: { dense?: boolean }) {
  const cells = dense ? 3 : 2;
  const size = dense ? 3.5 : 6;
  const gap = dense ? 1.75 : 2;

  return (
    <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true">
      {Array.from({ length: cells * cells }, (_, index) => {
        const column = index % cells;
        const row = Math.floor(index / cells);
        return <rect key={index} x={column * (size + gap)} y={row * (size + gap)} width={size} height={size} rx={dense ? .5 : 1} fill="currentColor" />;
      })}
    </svg>
  );
}

export default function ArchiveGallery() {
  const [columns, setColumns] = useState(2);
  const gridStyle = { "--archive-columns": columns } as CSSProperties;

  return (
    <section id="selected-work" className={`${styles.section} ${styles.selectedWork}`}>
      <div className={styles.archiveToolbar}>
        <div className={styles.sectionLabel}>Works</div>
        <div className={styles.archiveControls}>
          <GridIcon />
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={columns}
            onChange={(event) => setColumns(Number(event.target.value))}
            aria-label="Archive column count"
          />
          <GridIcon dense />
        </div>
      </div>
      <div className={styles.workGrid} style={gridStyle}>
        {archiveItems.map((item) => {
          const media = (
            <div className={styles.workImage}>
              {item.privatePreview ? (
                <div className={`${styles.privatePreview} ${item.privatePreview === "rover" ? styles.privatePreviewRover : styles.privatePreviewSystems}`} aria-hidden="true">
                  <span />
                </div>
              ) : item.poster ? (
                <Image src={item.poster} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
              ) : null}
              {item.video ? (
                <LazyCardVideo
                  className={styles.cardVideo}
                  readyClassName={styles.cardVideoReady}
                  src={item.video}
                />
              ) : null}
              {item.privatePreview ? (
                <span className={styles.privateLock} aria-hidden="true">
                  <svg viewBox="0 0 20 24">
                    <path d="M5 10V7a5 5 0 0 1 10 0v3M3 10h14v11H3z" />
                  </svg>
                </span>
              ) : null}
            </div>
          );

          return item.privatePreview ? (
            <a key={item.href} href={item.href} className={styles.workCard} aria-label="Open password-protected case study">
              {media}
            </a>
          ) : (
            <Link key={item.href} href={item.href} className={styles.workCard} aria-label={`Open ${item.label} case study`}>
              {media}
            </Link>
          );
        })}
      </div>
      <a className={styles.privateWorkLink} href="mailto:pushkina.katrine@gmail.com?subject=Private%20case%20study%20request">
        Private case studies available upon request
      </a>
    </section>
  );
}
