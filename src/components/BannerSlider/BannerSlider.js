"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import styles from "./BannerSlider.module.css";

export default function BannerSlider() {
  // 👇 Each slide has both desktop and mobile paths
  const bannerPaths = [
    { desktop: "/banner-desktop-1.webp", mobile: "/banner-mobile-1.webp" },
    { desktop: "/banner-desktop-2.webp", mobile: "/banner-mobile-2.webp" },
    // add more if needed
  ];

  // Build slides with clones at start/end for infinite loop
  const realSlides = useMemo(() => bannerPaths, []);
  const slides = useMemo(() => {
    if (!realSlides.length) return [];
    return [
      realSlides[realSlides.length - 1],
      ...realSlides,
      realSlides[0],
    ];
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
            {slides.map((slide, i) => {
              const isFirstRealSlide = i === 1;
              return (
                <div key={i} className={styles.slide}>
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet={slide.mobile}
                    />
                    <source
                      media="(min-width: 769px)"
                      srcSet={slide.desktop}
                    />
                    <Image
                      src={slide.desktop} // fallback
                      alt={`بنر شماره ${i}`}
                      className={styles.slideImage}
                      loading={isFirstRealSlide ? "eager" : "lazy"}
                      fetchPriority={isFirstRealSlide ? "high" : "auto"}
                      decoding="async"
                      width={1280}
                      height={284}
                      sizes="100vw"
                    />
                  </picture>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
