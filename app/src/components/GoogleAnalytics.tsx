import Script from "next/script";

const GA_ID = "G-611ZJPLYR4";
const ADS_ID = "AW-17974230607";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID}
        strategy="beforeInteractive"
      />
      <Script
        id="gtag-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer=window.dataLayer||[];" +
            "function gtag(){dataLayer.push(arguments);}" +
            "gtag('js',new Date());" +
            "gtag('config','" + GA_ID + "');" +
            "gtag('config','" + ADS_ID + "');",
        }}
      />
    </>
  );
}
