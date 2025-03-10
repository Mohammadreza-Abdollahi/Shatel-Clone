"use client";
import TopHeader from "@/components/share/TopHeader";
import "../globals.css";
import Navbar from "@/components/personal/header/Navbar";
import TopFooter from "@/components/personal/footer/TopFooter";
import BottomFooter from "@/components/personal/footer/BottomFooter";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>کاربران خانگی | شاتل ؛ شاهراه اینترنت و تلفن</title>
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
