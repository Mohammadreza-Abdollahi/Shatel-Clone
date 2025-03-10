"use client";
import "./globals.css";
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
        {children}
      </body>
    </html>
  );
}
