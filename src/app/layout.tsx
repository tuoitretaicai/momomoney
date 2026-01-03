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
  title: "ViettelMoney - Quay Hay, 100% Trúng Quà Ngay",
  description: "Hoàn thành sự kiện ngay - nhận quà liền tay !",
  keywords: ["ViettelMoney", "Quay thưởng", "Trúng quà", "Viettel"],
  authors: [{ name: "ViettelMoney" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "ViettelMoney - Quay Hay, 100% Trúng Quà Ngay",
    description: "Hoàn thành sự kiện ngay - nhận quà liền tay !",
    type: "website",
    locale: "vi_VN",
    siteName: "ViettelMoney",    images: [
      {
        url: "/images/herosectionnw.jpg",
        width: 1200,
        height: 630,
        alt: "ViettelMoney - Quay Hay 100% Trúng Quà",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ViettelMoney - Quay Hay, 100% Trúng Quà Ngay",
    description: "Một chạm chơi ngay - Trúng quà như ý",
    images: ["/images/herosectionnw.jpg"],  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
