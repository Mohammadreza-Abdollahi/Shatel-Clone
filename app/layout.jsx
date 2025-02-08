"use client"
import { useState } from "react";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
        <header className="sans overflow-hidden">
          <div className="h-12 text-xs bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="container mx-auto flex justify-around items-center">
              <div className="mx-auto flex items-center">
                  <span onClick={()=>setUserState("personal")} className={`${userState == "personal" ? "bg-gradient-to-t sans-bold" : ""} text-white mx-0.5 py-4 px-2 cursor-pointer hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2`}>کاربران خانگی</span>
                  <span onClick={()=>setUserState("organizational")} className={`${userState == "organizational" ? "bg-gradient-to-t sans-bold" : ""} text-white mx-0.5 py-4 px-2 cursor-pointer hover:bg-gradient-to-t from-blueGradient1 to-blueGradient2`}>کاربران سازمانی</span>
              </div>
              <div className="mx-auto flex items-center">
                  <ul className="flex justify-center items-center gap-6 text-white">
                    <li>درباره شاتل</li>
                    <li>ارتباط با ما</li>
                    <li>بلاگ شاتل</li>
                    <li>فرصت های شغلی</li>
                    <li><FontAwesomeIcon icon={faPhone} className="align-middle"/> شماره سراسری 91000000 (021)</li>
                    <li>English</li>
                  </ul>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
