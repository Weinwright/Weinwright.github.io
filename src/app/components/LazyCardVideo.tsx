"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyCardVideo({ className, readyClassName, src }: {
  className: string;
  readyClassName: string;
  src: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (reducedMotion || connection.connection?.saveData) return;

    const element = containerRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={containerRef} aria-hidden="true">
      {shouldLoad ? (
        <video
          className={`${className}${isReady ? ` ${readyClassName}` : ""}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setIsReady(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </span>
  );
}
