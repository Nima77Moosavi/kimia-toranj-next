// app/contact/page.js
"use client";

import Image from "next/image";
import styles from "./Contact.module.css";

const shops = [
  {
    id: 1,
    name: "Kimia Toranj – Isfahan",
    address: "123 Bazaar St, Isfahan, Iran",
    phone: "+98 31 1234 5678",
    image: "/banner11.jpg",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.32410880094335!2d51.67625509696903!3d32.6584109542606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc35f0f987df43%3A0xdafe3ecd7c2e3782!2sMesgarha%20Bazaar!5e0!3m2!1sen!2s!4v1762775630259!5m2!1sen!2s",
  },

  {
    id: 2,
    name: "Kimia Toranj – Tehran",
    address: "456 Grand Ave, Tehran, Iran",
    phone: "+98 21 9876 5432",
    image: "/banner11.jpg",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.6627114656352!2d51.67635877326705!3d32.658175695251636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc352b7a1a640f%3A0x7fdac922440177a0!2z2LTYudio2Ycg2K_ZiCDaqduM2YXbjNinINiq2LHZhtis!5e0!3m2!1sen!2s!4v1762776252761!5m2!1sen!2s",
  },
];

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        Learn more about our shops, see their locations on the map, and get in
        touch with us.
      </p>

      <div className={styles.shopGrid}>
        {shops.map((shop) => (
          <div key={shop.id} className={styles.shopCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={shop.image}
                alt={shop.name}
                width={600}
                height={400}
                className={styles.shopImage}
              />
            </div>
            <div className={styles.infoWrapper}>
              <h2 className={styles.shopName}>{shop.name}</h2>
              <p className={styles.shopAddress}>{shop.address}</p>
              <p className={styles.shopPhone}>Phone: {shop.phone}</p>
              <div className={styles.mapWrapper}>
                <iframe
                  src={shop.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3
<iframe
  title="map-iframe"
  src="https://neshan.org/maps/iframe/places/_bZqqtOxnQCV#c32.656-51.677-20z-0p/32.65566029192463/51.67695085651195"
  width="600"
  height="450"
  allowFullScreen
  loading="lazy"
></iframe>;
