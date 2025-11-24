import Link from "next/link";
import Image from "next/image";

import styles from "./Blog.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const metadata = {
  title: "مقالات صنایع دستی ایرانی | بلاگ کیمیا ترنج",
  description:
    "مطالب و مقالات تخصصی درباره هنر و صنایع دستی ایران؛ از قلم‌زنی و خاتم‌کاری اصفهان تا راهنمای خرید ظروف برنجی و دکوراسیون اصیل ایرانی در بلاگ کیمیا ترنج.",
};

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
  {
    id: 5,
    slug: "Golden-products-the-magic-of-calligraphy-and-inlay-art-in-modern-Iranian-life",
    title: "محصولات زرینه خاتم اصفهان | خرید از فروشگاه کیمیا ترنج ",
    excerpt:
      "محصولات زرینه خاتم قلم‌زنی اصفهان، با تلفیق دو هنر اصیل ایرانی، جلوه‌ای بی‌نظیر و لوکس به محیط زندگی می‌بخشند و حس ایرانی بودن و احترام به هنر سنتی را منتقل می‌کنند.",
    image: "/images/post5/golden-product-1.webp",
  },
  {
    id: 6,
    slug: "Brass-Products-The-Shine-of-Authenticity-in-Iranian-Home",
    title: "محصولات برنجی دست‌ساز اصفهان | خرید از کیمیا ترنج",
    excerpt:
      "در هر گوشه‌ای از خانه‌های اصیل ایرانی، نشانی از هنر و فرهنگ کهن به چشم می‌خورد؛ از فرش دست‌باف تا ظروف مسی و برنجی.",
    image: "/images/post6/brass-product-2.webp",
  },
  {
    id: 7,
    slug: "handmade-mirror-and-candleholder",
    title: "آینه و شمعدان دست‌ساز؛ نماد روشنایی، عشق و اصالت در فرهنگ ایرانی",
    excerpt:
      "در هر خانه‌ای که بوی عشق، صمیمیت و زیبایی جریان دارد، ردپای آینه و شمعدان دیده می‌شود؛ این دو عنصر نه‌تنها بخشی از دکور خانه‌های ایرانی‌اند، بلکه ریشه در باورها، آیین‌ها و نمادهای عمیق فرهنگی ما دارند؛ آینه مظهر روشنی، صداقت و خودشناسی است و شمعدان شعله‌ای از عشق و زندگی، و ترکیب این دو در قالب هنر دست استادکاران اصفهانی اثری خلق می‌کند که از زمان و مکان فراتر می‌رود، همانند آثار ماندگار کیمیا ترنج که هر تکه آن داستانی از نور و عشق را بازتاب می‌دهد.",
    image:
      "/images/handmade-mirror-and-candleholder/mirror-candle-holder-5.webp",
  },
  {
    id: 8,
    slug: "Calligraphy-and-enamel-paintings-walls-that-speak",
    title: "تابلوهای قلم‌زنی و میناکاری؛ دیوارهایی که حرف می‌زنند",
    excerpt:
      "آیا به دنبال تزئین خانه با هنر اصیل ایرانی هستید؟ آیا می‌خواهید دیوارهای خانه شما نه تنها زیبا، بلکه پر از داستان، فرهنگ و هویت ایرانی باشند؟ تابلوهای قلم‌زنی و میناکاری اصفهان همان چیزی است که به دنبال آن هستید. این آثار تنها یک دکور ساده نیستند؛ بلکه نمایش هنر، مهارت استادکاران و تاریخ غنی ایران هستند که دیوارهای خانه شما را به یک گالری زنده تبدیل می‌کنند. سایت کیمیا ترنج مجموعه‌ای از بهترین تابلوهای قلم‌زنی و میناکاری را فراهم کرده است تا هر دیوار بتواند حرف بزند و زیبایی بی‌نظیر هنر ایرانی را به نمایش بگذارد.",
    image:
      "/images/Calligraphy-and-enamel-paintings-walls-that-speak/image1.webp",
  },
  {
    id: 9,
    slug: "guide-to-buying-silver-look-serveware-for-bridal-set-and-home-decor",
    title: "راهنمای خرید ظروف شبه‌نقره برای جهیزیه و دکور منزل",
    excerpt:
      "خانه، آینه‌ی سلیقه و عشق صاحبخانه است. هر وسیله‌ای که در آن قرار می‌گیرد، بخشی از هویت و ذوق ما را به نمایش می‌گذارد. از میان همه‌ی وسایل خانه، ظروف درخشان و چشم‌نواز شبه‌نقره همیشه جایگاه ویژه‌ای داشته‌اند. درخشش‌شان یادآور شکوه خانه‌های ایرانی و اصالت هنر دست است، در حالی که ظاهرشان به اندازه‌ی نقره اصل مجلل و درخشان است، با قیمتی بسیار مناسب‌تر. اگر در آستانه‌ی ازدواج هستید و به دنبال انتخاب بهترین ظروف برای جهیزیه‌ی عروس هستید، یا قصد دارید دکور منزلتان را با وسایل لوکس و بادوام کامل کنید، این راهنما از کیمیا ترنج دقیقاً برای شما نوشته شده است. در ادامه، با ما همراه باشید تا با انواع ظروف شبه‌نقره، ویژگی‌ها، نکات خرید و ست‌کردن آن‌ها در دکور منزل آشنا شوید.",
    image:
      "/images/guide-to-buying-silver-look-serveware-for-bridal-set-and-home-decor/1.webp",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <div className={styles.blogPage}>
        <h1 className={styles.title}>مقالات</h1>

        <div className={styles.list}>
          {[...posts].reverse().map((post) => (
            <Link
              href={`/post/${post.slug}`}
              key={post.id}
              className={styles.card}
            >
              <div className={styles.cardImageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.cardImage}
                  unoptimized
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
