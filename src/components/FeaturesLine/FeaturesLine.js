import Image from "next/image";
import styles from "./FeaturesLine.module.css";

export default function FeaturesLine() {
  const items = [
    { src: "/icons/investment.png", alt: "قسط", text: "خرید اقساطی", id: 1 },
    { src: "/icons/delivery-truck.png", alt: "ارسال", text: "ارسال رایگان به سراسر کشور", id: 2 },
    { src: "/icons/undo.png", alt: "مرجوعی", text: "ضمانت مرجوعی", id: 3 },
    { src: "/icons/security.png", alt: "امنیت", text: "ضمانت کیفیت و اصالت", id: 4 },
  ];

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresLine}>
        {items.map(({ src, alt, text, id }) => (
          <div key={id} className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Image
                src={src}
                alt={alt}
                className={styles.pngIcon}
                width={40} // adjust to your design
                height={40}
              />
            </div>
            <span className={styles.featureText}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
