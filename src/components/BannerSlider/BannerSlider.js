"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import styles from "./BannerSlider.module.css";

export default function BannerSlider() {
  // Paths to your images in /public
  const bannerPaths = ["/banner11.jpg", "/banner22.jpg", "/banner33.jpg", "/banner44.jpg"];
  const patternPath = "/forground-banner.png";

  const realSlides = useMemo(() => bannerPaths, []);
  const slides = useMemo(() => {
    if (!realSlides.length) return [];
    return [realSlides[realSlides.length - 1], ...realSlides, realSlides[0]];
  }, [realSlides]);

  const [idx, setIdx] = useState(1);
  const [anim, setAnim] = useState(true);
  const timeoutRef = useRef(null);

  const maxIndex = slides.length - 2;
  const minIndex = 1;

  const nextSlide = () => {
    setIdx((i) => i + 1);
    setAnim(true);
  };
  const prevSlide = () => {
    setIdx((i) => i - 1);
    setAnim(true);
  };

  const onTransitionEnd = () => {
    if (idx > maxIndex) {
      setAnim(false);
      setIdx(minIndex);
    }
    if (idx < minIndex) {
      setAnim(false);
      setIdx(maxIndex);
    }
  };

  useEffect(() => {
    if (!anim) requestAnimationFrame(() => setAnim(true));
  }, [anim]);

  useEffect(() => {
    if (!slides.length) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [idx, slides.length]);

  return (
    <div className={styles.bannerWrapper}>
      {/* Decorative foreground pattern */}
      <div
        className={styles.patternContainer}
        aria-hidden="true"
        style={{ backgroundImage: `url(${patternPath})` }}
      />

      <div
        className={styles.sliderWindow}
        role="region"
        aria-roledescription="carousel"
        aria-label="بنرهای تبلیغاتی فروشگاه"
      >
        <div className={styles.trackContainer}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${idx * 100}%)`,
              transition: anim ? "transform 0.5s ease" : "none",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {slides.map((src, i) => {
              const isFirstRealSlide = i === 1;
              return (
                <div key={i} className={styles.slide}>
                  <Image
                    src={src}
                    alt={`بنر شماره ${i}`}
                    className={styles.slideImage}
                    loading={isFirstRealSlide ? "eager" : "lazy"}
                    fetchPriority={isFirstRealSlide ? "high" : "auto"}
                    decoding="async"
                    width={1280}
                    height={284}
                    sizes="100vw"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
