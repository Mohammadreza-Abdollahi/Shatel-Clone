"use client"
import "./globals.css";
import { useState } from "react";
import TopHeader from "@/components/header/TopHeader";
import Navbar from "@/components/header/Navbar";
import TopFooter from "@/components/footer/TopFooter";
import BottomFooter from "@/components/footer/BottomFooter";

export default function RootLayout({ children }) {
  const [userState , setUserState] = useState("personal")
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>شاتل ؛ شاهراه اینترنت و تلفن</title>
        <meta name="description" content="شرکت ارائه خدمات اینترنتی شاتل" />
        <link rel="shortcut icon" href="/img/shatel-favicon.png" type="image/x-icon" />
      </head>
      <body>
        <header className="sans">
          <TopHeader userState={userState} setUserState={setUserState}/>
          <Navbar/>
        </header>
        {children}
        <footer className="py-5 bg-footerBgColor">
          <TopFooter/>
          <hr/>
          <BottomFooter/>
        </footer>
      </body>
    </html>
  );
}
