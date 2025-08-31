// src/components/Collections/CollectionCard.Skeleton.jsx
import styles from "./Collections.module.css";

export default function CollectionCardSkeleton() {
  return (
    <div className={styles.collectionCard}>
      <div className={styles.skeleton} />
    </div>
  );
}
