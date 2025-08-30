import HighlightCard from "./HighlightCard";
import styles from "./Highlights.module.css";

export default async function Highlights() {
  const res = await fetch(
    "https://kimiatoranj-api.liara.run/api/highlights/highlights/",
    { next: { revalidate: 300 } } // revalidate every 5 minutes
  );
  if (!res.ok) {
    return <div className={styles.error}>خطا در بارگذاری</div>;
  }
  const highlights = await res.json();

  return (
    <div className={styles.highlightsWrapper}>
      <div className={styles.highlightsContainer}>
        <div className={styles.highlights}>
          {highlights.map((hl) => (
            <HighlightCard key={hl.id} highlight={hl} />
          ))}
        </div>
      </div>
    </div>
  );
}
