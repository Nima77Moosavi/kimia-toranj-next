import { FaWhatsapp } from "react-icons/fa";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./InstallmentPayment.module.css";

// Determine number of months based on price range
const getInstallmentMonths = (price) => {
  const priceMillion = price / 1_000_000;
  if (priceMillion >= 5 && priceMillion < 10) return 1;
  if (priceMillion >= 10 && priceMillion < 20) return 2;
  if (priceMillion >= 20 && priceMillion < 30) return 3;
  if (priceMillion >= 30 && priceMillion < 40) return 4;
  if (priceMillion >= 40 && priceMillion < 50) return 5;
  if (priceMillion >= 50 && priceMillion <= 60) return 6;
  return null;
};

const InstallmentTable = () => (
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>محدوده قیمت (تومان)</th>
          <th>تعداد اقساط</th>
          <th>پیش‌پرداخت</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>۵,۰۰۰,۰۰۰ تا ۱۰,۰۰۰,۰۰۰</td><td>۱ ماه</td><td>۳۰٪</td></tr>
        <tr><td>۱۰,۰۰۰,۰۰۰ تا ۲۰,۰۰۰,۰۰۰</td><td>۲ ماه</td><td>۳۰٪</td></tr>
        <tr><td>۲۰,۰۰۰,۰۰۰ تا ۳۰,۰۰۰,۰۰۰</td><td>۳ ماه</td><td>۳۰٪</td></tr>
        <tr><td>۳۰,۰۰۰,۰۰۰ تا ۴۰,۰۰۰,۰۰۰</td><td>۴ ماه</td><td>۳۰٪</td></tr>
        <tr><td>۴۰,۰۰۰,۰۰۰ تا ۵۰,۰۰۰,۰۰۰</td><td>۵ ماه</td><td>۳۰٪</td></tr>
        <tr><td>۵۰,۰۰۰,۰۰۰ و مبالغ بیشتر</td><td>۶ ماه</td><td>۳۰٪</td></tr>
      </tbody>
    </table>
  </div>
);

export default function InstallmentPayment({ searchParams }) {
  const price = Number(searchParams.price) || 0;
  const months = getInstallmentMonths(price);

  // Less than min price
  const belowMinimum = price < 5_000_000;

  // Round a number up to the next 100,000
  const roundTo100k = (val) => Math.ceil(val / 100_000) * 100_000;

  let monthly = null;
  let remaining = null;
  let upfront = null;

  if (!belowMinimum && months) {
    // 1) Calculate monthly based on price and months (30% assumed for initial)
    const rawUpfront = price * 0.3;
    const initialRemaining = price - rawUpfront;

    let monthlyRaw = initialRemaining / months;

    // 2) Round monthly UP to the next 100,000
    monthly = roundTo100k(monthlyRaw);

    // 3) Calculate remaining based on rounded monthly
    remaining = monthly * months;

    // 4) Calculate upfront so that total matches exactly
    upfront = price - remaining;
  }

  return (
    <>
      <Header />
      <div className={styles.installmentContainer}>
        <h2>پرداخت اقساطی محصولات صنایع‌دستی کیمیا ترنج</h2>

        {belowMinimum ? (
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              پرداخت اقساطی برای این مبلغ در دسترس نیست. مجموع خرید شما باید
              بیشتر از ۵ میلیون تومان باشد
            </h3>
            <p className={styles.cardSubtitle}>
              لطفاً شرایط کلی پرداخت اقساطی را در جدول زیر مشاهده کنید:
            </p>
          </div>
        ) : (
          <>
            <div className={styles.emphasisRow}>
              <div className={styles.emphasisBox}>بدون سود</div>
              <div className={styles.emphasisBox}>بدون ضامن</div>
            </div>

            <div className={styles.totalPriceBox}>
              قیمت کل: <strong>{price.toLocaleString()} تومان</strong>
            </div>

            <div className={styles.summaryBox}>
              <div className={styles.summaryRow}>
                <span>پیش‌پرداخت نهایی:</span>
                <strong className={styles.upfront}>
                  {upfront?.toLocaleString()} تومان
                </strong>
              </div>

              {months ? (
                <>
                  <div className={styles.summaryRow}>
                    <span>مجموع مبلغ اقساط:</span>
                    <strong>{remaining?.toLocaleString()} تومان</strong>
                  </div>

                  <div className={styles.summaryRow}>
                    <span>تعداد اقساط:</span>
                    <strong>{months} ماه</strong>
                  </div>

                  <div className={styles.summaryRow}>
                    <span>مبلغ هر قسط:</span>
                    <strong>{monthly?.toLocaleString()} تومان</strong>
                  </div>
                </>
              ) : (
                <div className={styles.summaryRow}>
                  <span>شرایط اقساطی:</span>
                  <strong>این مبلغ برای پرداخت اقساطی تعریف نشده است.</strong>
                </div>
              )}
            </div>

            <div className={styles.infoSection}>
              <h3>شرایط پرداخت اقساطی</h3>
              <ul>
                <li>۳۰٪ مبلغ کل به عنوان پایه محاسبه در نظر گرفته می‌شود.</li>
                <li>
                  مبلغ هر قسط پس از گردکردن به ۱۰۰٬۰۰۰ تومان نهایی شده است.
                </li>
                <li>
                  پیش‌پرداخت نهایی بر اساس جمع اقساط و قیمت کل دقیق محاسبه می‌شود.
                </li>
                <li>
                  برای ثبت درخواست پرداخت اقساطی، وارد گفت‌وگوی واتساپ شوید.
                </li>
              </ul>
            </div>

            <div className={styles.supportBox}>
              <a
                href="https://wa.me/989130095238"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.supportBtn}
              >
                <FaWhatsapp className={styles.whatsappIcon} /> گفتگوی واتساپ
              </a>
            </div>
          </>
        )}

        <InstallmentTable />
      </div>
      <Footer />
    </>
  );
}
