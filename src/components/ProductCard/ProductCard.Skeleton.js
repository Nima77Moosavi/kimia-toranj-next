import React from "react";
import styles from "./ProductCardSkeleton.module.css";

export default function ProductCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image} />
      <div className={styles.textLine} />
      <div className={styles.textLineShort} />
      <div className={styles.price} />
    </div>
  );
}
