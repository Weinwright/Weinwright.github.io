"use client";

import { useEffect, useRef } from "react";
import styles from "./MoooveWordmark.module.css";

const letters = ["l", "e", "t", "’", "s", "m", "o", "o", "o", "v", "e"];

export default function MoooveWordmark() {
  const rootRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);

  function resetLetters() {
    letterRefs.current.forEach((letter) => {
      if (letter) letter.style.transform = "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)";
    });
  }

  function moveLetters(event: PointerEvent) {
    const root = rootRef.current;
    if (!root) return;
    const pointerX = event.clientX;
    const pointerY = event.clientY;

    letterRefs.current.forEach((letter) => {
      if (!letter) return;
      const rect = letter.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = centerX - pointerX;
      const dy = centerY - pointerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.exp(-(distance * distance) / (2 * 215 * 215));
      const safeDistance = Math.max(distance, 1);
      const x = (dx / safeDistance) * influence * 36;
      const y = (dy / safeDistance) * influence * 36;
      const rotateX = (dy / safeDistance) * influence * -30;
      const rotateY = (dx / safeDistance) * influence * 34;
      const rotateZ = (dx / safeDistance) * influence * 8;
      letter.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${1 + influence * 0.08})`;
    });

    const hoveredLetter = event.target instanceof HTMLElement ? event.target.closest("span") : null;
    if (hoveredLetter && root.contains(hoveredLetter)) {
      hoveredLetter.style.transform = "translate3d(0, -.16em, 8px) rotateX(-10deg) rotateY(18deg) rotateZ(-4deg) scale(1.08)";
    }
  }

  useEffect(() => {
    window.addEventListener("pointermove", moveLetters);
    window.addEventListener("blur", resetLetters);
    return () => {
      window.removeEventListener("pointermove", moveLetters);
      window.removeEventListener("blur", resetLetters);
    };
  });

  return (
    <div ref={rootRef} className={styles.wordmark} aria-label="let’s mooove">
      {letters.map((letter, index) => (
        <span key={`${letter}-${index}`} ref={(element) => { letterRefs.current[index] = element; }} data-letter-index={index} aria-hidden="true" className={index > 4 ? styles.secondWord : undefined}>{letter}</span>
      ))}
    </div>
  );
}
