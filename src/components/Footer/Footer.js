import styles from "./Footer.module.css";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import EnamadSeal from "@/components/EnamadSeal/EnamadSeal";
import { toPersianDigits } from "@/utils/faDigits";
import EmallsSeal from "../EmallsSeal/EmallsSeal";
import Link from "next/link";

const posts = [
  {
    id: 1,
    slug: "Enlivening-your-home-with-iranian-arts-and-crafts",
    title: "زنده کردن فضای خانه با هنر و صنایع دستی ایرانی",
  },
  {
    id: 2,
    slug: "Isfahan-Handicrafts-A-lasting-legacy-from-the-heart-of-Iranian-history",
    title: "صنایع دستی اصفهان؛ میراثی ماندگار از دل تاریخ ایران",
  },
  {
    id: 3,
    slug: "The-art-of-calligraphy-and-inlay-work-masterpieces-of-Isfahan-handicrafts",
    title: "هنر قلم‌زنی و خاتم‌کاری؛ شاهکارهای صنایع دستی اصفهان",
  },
  {
    id: 4,
    slug: "a-guide-to-buying-a-brass-fruit-bowl-a-stylish-choice-for-home-decoration",
    title: "راهنمای خرید میوه‌خوری برنجی؛ انتخابی شیک برای دکوراسیون خانه",
  },
];

const categories = [
  { title: "قاب", link: "category/frame" },
  { title: "خاتم کاری", link: "category/khatamkari" },
  { title: "قلمزنی", link: "category/qalamzani" },
  { title: "سماور برنجی", link: "category/brass-samovar" },
  { title: "پک هدیه سازمانی", link: "category/organizational-gift-pack" },
  { title: "محصولات برنجی", link: "category/brass-products" },
  { title: "رومیزی", link: "/shop?collection=رومیزی" },
  { title: "زرینه", link: "category/golden-brass" },
  { title: "شبه نقره", link: "category/silver-plated" },
  { title: "آینه شمعدان", link: "category/mirror-candleholder" },
];

export default function Footer() {
  return (
    <div className={styles.container}>
      {/* Addresses */}
      <div className={styles.adresses}>
        <h2 className={styles.title}>آدرس حضوری</h2>
        <p>شعبه یک: اصفهان, میدان نقش جهان, بازار مسگرها</p>
        <p>شعبه دو: اصفهان, میدان نقش جهان, بازار آفرینش</p>
        <p>شعبه سه: اصفهان, میدان نقش جهان, بازار آفرینش غربی</p>
        <p>دفتر مرکزی: اصفهان, خیابان حکیم, مجتمع حکیم طبقه اول واحد ۲۹۴</p>
        <p>کارگاه تولیدی: روبرو شهرک صنعتی جی، کوچه فروردین، فروردین ۶</p>
      </div>

      {/* Product Categories */}

      <div className={styles.categories}>
        <h2 className={styles.title}>
          <Link href="#">دسته بندی محصولات</Link>
        </h2>
        <ul>
          {categories.map((category) => (
            <li key={category.link}>
              <Link href={category.link} className={styles.post}>
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Articles */}

      <div className={styles.articles}>
        <h2 className={styles.title}>
          <Link href="/blog">مقالات کیمیا ترنج</Link>
        </h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/post/${post.slug}`} className={styles.post}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Numbers */}
      <div className={styles.contactUs}>
        <h2 className={styles.title}>تماس با ما</h2>
        <p>شعبه یک: {toPersianDigits("03132241443")}</p>
        <p>شعبه دو: {toPersianDigits("03132218729")}</p>
        <p>شعبه سه: {toPersianDigits("03132244430")}</p>
        <p>دفتر مرکزی: {toPersianDigits("03132120363")}</p>
      </div>

      {/* Social Links */}
      <div className={styles.socials}>
        <h2 className={styles.title}>راه های ارتباطی</h2>
        <a
          href="https://t.me/+989130095238"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaTelegramPlane size={22} />
        </a>

        <a
          href="https://wa.me/989130095238"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaWhatsapp size={22} />
        </a>

        <a href="tel:989920784900" className={styles.icon}>
          <FaPhoneAlt size={22} />
        </a>

        <a
          href="https://instagram.com/kimia.toranj"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaInstagram size={22} />
        </a>
      </div>

      {/* Enamad Seal */}
      <div className={styles.iconWrapper}>
        <div className={styles.enamadWrapper}>
          <EnamadSeal />
        
          <EmallsSeal />
        </div>
      </div>
    </div>
  );
}
