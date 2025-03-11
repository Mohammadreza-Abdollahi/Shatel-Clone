"use client";
import Navbar from "@/components/organization/header/Navbar";
import TopFooter from "@/components/organization/footer/TopFooter";
import BottomFooter from "@/components/organization/footer/BottomFooter";
import TopHeader from "../../components/share/TopHeader";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>کاربران سازمانی | شاتل ؛ شاهراه اینترنت و تلفن</title>
        <meta name="description" content="شرکت ارائه خدمات اینترنتی شاتل" />
        <link
          rel="shortcut icon"
          href="/img/shatel-favicon.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <header className="sans">
          <TopHeader />
          <Navbar />
        </header>
        {children}
        <footer className="py-5 bg-footerBgColor">
          <TopFooter />
          <hr />
          <BottomFooter />
        </footer>
      </body>
    </html>
  );
}
