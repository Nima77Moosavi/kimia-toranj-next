"use client";

import { FaStar } from "react-icons/fa";
import styles from "./ProductRating.module.css";
// Optional: if you have a shared util, import it instead of defining inline
// import { toPersianDigits } from "@/utils/faDigits";

export default function ProductRating({ rating = 4 }) {
  // Convert numbers to Persian digits (inline version)
  const toPersianNumber = (num) =>
    new Intl.NumberFormat("fa-IR").format(num);

  // Default rating data for the progress bars
  const ratingData = [
    { stars: 1, value: 0 },
    { stars: 2, value: 20 },
    { stars: 3, value: 0 },
    { stars: 4, value: 80 },
    { stars: 5, value: 70 },
  ];

  return (
    <div className={styles.rateContainer}>
      <div className={styles.rightPart}>
        {ratingData.map((item) => (
          <p key={item.stars}>
            {toPersianNumber(item.stars)}
            <FaStar className={styles.icon} />
            <progress
              value={item.value}
              max={100}
              className={styles.progress}
            />
          </p>
        ))}
      </div>
      <div className={styles.leftPart}>
        <p>{toPersianNumber(rating)}</p>
      </div>
    </div>
  );
}
