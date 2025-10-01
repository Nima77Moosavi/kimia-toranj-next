import Link from "next/link";
import styles from "./Blog.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const posts = [
  {
    id: 1,
    slug: "Enlivening-your-home-with-iranian-arts-and-crafts",
    title: "زنده کردن فضای خانه با هنر و صنایع دستی ایرانی",
    excerpt:
      "صنایع دستی ایرانی فقط یک شیء تزئینی نیستند؛ هر کدام یک سفیر فرهنگی‌اند که روح هنر و مهارت نسل‌های گذشته را به فضای زندگی امروزی منتقل می‌کنند. فروشگاه «کیمیا ترنج» با ارائه آثار اصیل اصفهان و شهرهای دیگر، فرصتی فراهم می‌کند تا خانه‌ها با اصالتی چشمگیر و کیفیت ماندگار تزئین شوند.",
    image: "/images/post2/khatam-esfahan.webp",
  },
  {
    id: 2,
    slug: "Isfahan-Handicrafts-A-lasting-legacy-from-the-heart-of-Iranian-history",
    title: "صنایع دستی اصفهان؛ میراثی ماندگار از دل تاریخ ایران",
    excerpt:
      "اصفهان، نگین درخشان فلات ایران، نه تنها به معماری بی‌نظیر و آثار تاریخی‌اش شهرت دارد، بلکه به عنوان مهد صنایع دستی ایران نیز شناخته می‌شود...",
    image: "/images/post2/qalamzani-esfahan.webp",
  },
  {
    id: 3,
    slug: "The-art-of-calligraphy-and-inlay-work-masterpieces-of-Isfahan-handicrafts",
    title: "هنر قلم‌زنی و خاتم‌کاری؛ شاهکارهای صنایع دستی اصفهان",
    excerpt:
      "اصفهان، نگین درخشان ایران، نه تنها به معماری و آثار تاریخی بی‌نظیرش معروف است، بلکه خاستگاه برخی از ارزشمندترین صنایع دستی ایران نیز محسوب می‌شود...",
    image: "/images/post3/qalamzani-khatam-products-3.webp",
  },
  {
    id: 4,
    slug: "a-guide-to-buying-a-brass-fruit-bowl-a-stylish-choice-for-home-decoration",
    title: "راهنمای خرید میوه‌خوری برنجی؛ انتخابی شیک برای دکوراسیون خانه",
    excerpt:
      "از دیرباز تا امروز، ظروف پذیرایی در خانه‌های ایرانی نقش مهمی در فرهنگ و مهمان‌نوازی داشته‌اند. وقتی صحبت از سفره و میز پذیرایی می‌شود، هیچ‌چیز به‌اندازه انتخاب ظروف شیک و اصیل نمی‌تواند تأثیرگذار باشد. در میان همه انتخاب‌ها، میوه‌خوری برنجی جایگاه ویژه‌ای دارد. این ظرف نه‌تنها برای پذیرایی از مهمانان کاربردی است، بلکه به‌عنوان یک وسیله‌ی دکوراتیو هم جلوه‌ای خاص به خانه می‌دهد.",
    image: "/images/post4/brass-fruit-bowl-3.webp",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <div className={styles.blogPage}>
        <h1 className={styles.title}>مقالات</h1>

        <div className={styles.list}>
          {posts.map((post) => (
            <Link
              href={`/post/${post.slug}`}
              key={post.id}
              className={styles.card}
            >
              <div className={styles.cardImageWrapper}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
