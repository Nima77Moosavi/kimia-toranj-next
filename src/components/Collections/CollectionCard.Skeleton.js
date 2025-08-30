// src/components/Collections/CollectionCard.Skeleton.jsx
import styles from "./Collections.module.css"; // reuse the same card sizing

export default function CollectionCardSkeleton() {
  return (
    <div className={styles.collectionCard}>
      {/* full‐card placeholder */}
      <div
        className={styles.skeleton} // use a CSS class instead of inline "skeleton"
      />
    </div>
  );
}
