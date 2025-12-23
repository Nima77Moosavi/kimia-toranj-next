import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/Toast/ToastContext";
import Script from "next/script";

// Replace Geist with Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Replace Geist_Mono with Roboto_Mono (or any other mono font you like)
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "کیمیاترنج",
  description: "کیمیاترنج",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8K5JY2E5M7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8K5JY2E5M7');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
