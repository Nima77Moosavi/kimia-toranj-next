import Image from "next/image";
import styles from "./Contact.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FooterMenu from "@/components/FooterMenu/FooterMenu";

const shops = [
  {
    id: 1,
    name: "کیمیا ترنج – اصفهان",
    address: "بازار مسگرها، حوالی میدان نقش جهان، اصفهان",
    phone: "۰۳۱-۱۲۳۴۵۶۷۸",
    image: "/images/store_1.webp",
    description:
      "این شعبه در قلب بازار تاریخی مسگرها قرار دارد؛ جایی که هنرمندان برجسته اصفهان مشغول خلق آثار میناکاری، خاتم‌کاری، قلم‌زنی و صنایع‌دستی اصیل ایرانی هستند. بازدیدکنندگان می‌توانند از نزدیک با فضای سنتی بازار آشنا شده و آثار اورجینال با کیفیت بالا تهیه کنند.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.32410880094335!2d51.67625509696903!3d32.6584109542606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc35f0f987df43%3A0xdafe3ecd7c2e3782!2sMesgarha%20Bazaar!5e0!3m2!1sen!2s!4v1762775630259!5m2!1sen!2s",
  },
  {
    id: 2,
    name: "کیمیا ترنج – اصفهان",
    address: "بازار مسگرها، حوالی میدان نقش جهان، اصفهان",
    phone: "۰۳۱-۱۲۳۴۵۶۷۸",
    image: "/images/store_2.webp",
    description:
      "این شعبه در قلب بازار تاریخی مسگرها قرار دارد؛ جایی که هنرمندان برجسته اصفهان مشغول خلق آثار میناکاری، خاتم‌کاری، قلم‌زنی و صنایع‌دستی اصیل ایرانی هستند. بازدیدکنندگان می‌توانند از نزدیک با فضای سنتی بازار آشنا شده و آثار اورجینال با کیفیت بالا تهیه کنند.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.6627114656352!2d51.67635877326705!3d32.658175695251636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc352b7a1a640f%3A0x7fdac922440177a0!2z2LTYudio2Ycg2K_ZiCDaqduM2YXbjNinINiq2LHZhtis!5e0!3m2!1sen!2s!4v1762776252761!5m2!1sen!2s",
  },
];

export const metadata = {
  title: "تماس با ما | کیمیا ترنج",
  description:
    "آدرس، شماره تماس و موقعیت فروشگاه‌های کیمیا ترنج در اصفهان و تهران. مشاهده نقشه، اطلاعات تماس و توضیحات مربوط به صنایع‌دستی اصیل اصفهان.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "تماس با ما | کیمیا ترنج",
    description:
      "اطلاعات فروشگاه‌های کیمیا ترنج؛ شامل آدرس، شماره تماس، نقشه و توضیحات کامل شعبه اصفهان و تهران.",
    url: "/contact",
    siteName: "کیمیا ترنج",
    type: "website",
    images: [
      {
        url: "/images/store_1.webp",
        width: 800,
        height: 600,
        alt: "فروشگاه کیمیا ترنج",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>تماس با ما</h1>

        <p className={styles.description}>
          اصفهان پایتخت هنر و صنایع‌دستی ایران است؛ شهری که قرن‌هاست هنرمندانش
          با عشق و مهارت آثاری چون <strong>مینا‌کاری</strong>،{" "}
          <strong>خاتم‌کاری</strong>، <strong>قلم‌زنی</strong> و{" "}
          <strong>فیروزه‌کوبی</strong> را خلق می‌کنند. آثار تولید شده در این
          شهر، ترکیبی از هنر، تاریخ و اصالت ایرانی هستند. شما می‌توانید
          نمونه‌های اصیل و با کیفیت این هنرها را در فروشگاه‌های ما از نزدیک
          مشاهده و تهیه کنید.
        </p>

        <div className={styles.shopGrid}>
          {shops.map((shop) => (
            <div key={shop.id} className={styles.shopCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={shop.image}
                  alt={shop.name}
                  width={400}
                  height={250}
                  className={styles.shopImage}
                />
              </div>

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

              <div className={styles.infoWrapper}>
                <h2 className={styles.shopName}>{shop.name}</h2>
                <p className={styles.shopDescription}>{shop.description}</p>
                <p className={styles.shopAddress}>
                  <strong>آدرس:</strong> {shop.address}
                </p>
                <p className={styles.shopPhone}>
                  <strong>تلفن:</strong> {shop.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <FooterMenu />
    </>
  );
}
