"use client";

import { useRef } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./SpecialProducts.module.css";

export default function SpecialProductsSlider({ products }) {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    const wrapper = sliderRef.current;
    if (!wrapper) return;
    const slider = wrapper.querySelector(`.${styles.slider}`);
    const first = slider?.children[0];
    if (!first) return;

    const itemW = first.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(slider).gap) || 0;

    wrapper.scrollBy({
      left: (itemW + gap) * dir,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.sliderWrapper} ref={sliderRef}>
      <button
        className={styles.arrowLeft}
        onClick={() => slide(1)}
        aria-label="قبلی"
      >
        <GrFormNext />
      </button>
      <button
        className={styles.arrowRight}
        onClick={() => slide(-1)}
        aria-label="بعدی"
      >
        <GrFormPrevious />
      </button>
      <div className={styles.slider}>
        {products.map((product) => (
          <div key={product.id} className={styles.slideItem}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
