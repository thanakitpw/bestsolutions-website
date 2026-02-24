import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const notoSansThai = Noto_Sans_Thai({
  weight: ['400', '500', '600', '700'],
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bestsolutionscorp.com"), // Placeholder URL
  title: {
    default: "Best Solutions - Digital Marketing Agency",
    template: "%s | Best Solutions Corp",
  },
  description: "เพื่อนคู่คิดทางการตลาดออนไลน์ ที่ช่วยให้ธุรกิจคุณเติบโตอย่างยั่งยืน รับทำเว็บไซต์ SEO ยิงแอด Facebook/Google และกราฟิกดีไซน์",
  keywords: ["Digital Marketing", "SEO", "รับทำเว็บไซต์", "ยิงแอด", "การตลาดออนไลน์", "SME"],
  authors: [{ name: "Best Solutions Team" }],
  creator: "Best Solutions Corp",
  openGraph: {
    title: "Best Solutions - Digital Marketing Agency",
    description: "เพื่อนคู่คิดทางการตลาดออนไลน์ ที่ช่วยให้ธุรกิจคุณเติบโตอย่างยั่งยืน",
    url: "https://www.bestsolutionscorp.com",
    siteName: "Best Solutions Corp",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/logo.png", // Fallback to logo
        width: 1200,
        height: 630,
        alt: "Best Solutions Corp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Solutions - Digital Marketing Agency",
    description: "เพื่อนคู่คิดทางการตลาดออนไลน์ ที่ช่วยให้ธุรกิจคุณเติบโตอย่างยั่งยืน",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={cn(
          notoSansThai.className,
          "antialiased min-h-screen bg-slate-50"
        )}
      >
        <GoogleAnalytics />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17974230607"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17974230607');
          `
        }} />
        {children}
      </body>
    </html>
  );
}
