"use client";

import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ images, productTitle }) {
  const [currentImage, setCurrentImage] = useState(0);

  if (!images || images.length === 0) {
    return <div>تصویری موجود نیست</div>;
  }

  const goToPrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Helper to get alt text with fallback
  const getAlt = (img, fallback) =>
    img.alt_text && img.alt_text.trim() !== "" ? img.alt_text : fallback;

  return (
    <div className={styles.sliderContainer}>
      {/* Main image */}
      <img
        src={images[currentImage].image}
        alt={getAlt(images[currentImage], productTitle)}
        className={styles.sliderImage}
      />

      {/* Prev / Next buttons */}
      <button
        type="button"
        className={styles.prevButton}
        onClick={goToPrev}
        aria-label="تصویر قبلی"
      >
        <GrFormPrevious />
      </button>
      <button
        type="button"
        className={styles.nextButton}
        onClick={goToNext}
        aria-label="تصویر بعدی"
      >
        <GrFormNext />
      </button>

      {/* Thumbnails */}
      <div className={styles.thumbnailContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.image}
            alt={getAlt(img, productTitle)}
            className={`${styles.thumbnail} ${
              index === currentImage ? styles.activeThumbnail : ""
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
