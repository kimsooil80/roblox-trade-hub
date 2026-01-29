import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { LocaleProvider } from '@/lib/locale-context';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Roblox Trade Hub",
    default: "Blox Fruits Value Calculator - Realtime Trading Values", // 기본 제목
  },
  description: "The best Blox Fruits trading value calculator updated daily. Check fair trades for Kitsune, Dragon, and more.",
  keywords: ["Blox Fruits", "Value List", "Trade Calculator", "Roblox", "Tier List"],
  icons: {
    icon: "/favicon.ico", // 나중에 아이콘도 바꾸면 좋습니다
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7281138674348867" crossOrigin="anonymous"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`} suppressHydrationWarning>
        <LocaleProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
