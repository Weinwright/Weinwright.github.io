"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./HeroVideo.module.css";

type HeroVideoProps = {
  className: string;
};

export default function HeroVideo({ className }: HeroVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreviewMotion = () => {
      if (reducedMotion.matches) previewRef.current?.pause();
      else if (!isOpen) previewRef.current?.play().catch(() => undefined);
    };
    syncPreviewMotion();
    reducedMotion.addEventListener("change", syncPreviewMotion);
    return () => reducedMotion.removeEventListener("change", syncPreviewMotion);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const triggerButton = triggerRef.current;
    const previewVideo = previewRef.current;
    previewVideo?.pause();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    playerRef.current?.play().catch(() => undefined);

    const handleModalKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        modalRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), video[controls], a[href], [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleModalKeys);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleModalKeys);
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        previewVideo?.play().catch(() => undefined);
      }
      triggerButton?.focus();
    };
  }, [isOpen]);

  return (
    <div className={className}>
      <button ref={triggerRef} className={styles.previewButton} type="button" onClick={() => setIsOpen(true)} aria-label="Play How AI agents work together with sound">
        <video ref={previewRef} autoPlay muted loop playsInline preload="metadata" poster="/media/posters/agents-together.jpg" aria-hidden="true">
          <source src="/media/agents-together-preview.mp4" type="video/mp4" />
        </video>
        <span className={styles.playPrompt}><i aria-hidden="true">▶</i> Play with sound</span>
      </button>
      {isOpen ? createPortal(
        <div ref={modalRef} className={styles.modalBackdrop} role="dialog" aria-modal="true" aria-labelledby="hero-video-title" onClick={() => setIsOpen(false)}>
          <div className={styles.modalPlayer} onClick={(event) => event.stopPropagation()}>
            <h2 id="hero-video-title" className={styles.visuallyHidden}>How AI agents work together</h2>
            <button ref={closeRef} className={styles.closeButton} type="button" onClick={() => setIsOpen(false)} aria-label="Close video">×</button>
            <video ref={playerRef} autoPlay controls playsInline preload="metadata" poster="/media/posters/agents-together.jpg">
              <source src="/media/agents-together-final.mp4" type="video/mp4" />
              <track kind="captions" src="/media/captions/agents-together.vtt" srcLang="en" label="English" />
            </video>
          </div>
        </div>,
        document.body,
      ) : null}
    </div>
  );
}
