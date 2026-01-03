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
  title: "MoMo - Quay ngay, Trúng quà hay",
  description: "Hoàn thành sự kiện - nhận quà liền tay !",
  keywords: ["MoMo", "Quay thưởng", "Trúng quà", "Ví điện tử"],
  authors: [{ name: "MoMo" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg",
  },
  openGraph: {
    title: "MoMo - Quay Hay, 100% Trúng Quà Ngay",
    description: "Hoàn thành sự kiện ngay - nhận quà liền tay !",
    type: "website",
    locale: "vi_VN",
    siteName: "MoMo",    images: [
      {
        url: "https://imgproxy.mezon.ai/K0YUZRIosDOcz5lY6qrgC6UIXmQgWzLjZv7VJ1RAA8c/rs:fill:464:259:1/mb:2097152/plain/https://cdn.mezon.ai/1840669672182124544/2007520781268946944.png@webp",
        width: 1200,
        height: 630,
        alt: "MoMo - Quay Hay 100% Trúng Quà",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoMo - Quay Hay, 100% Trúng Quà Ngay",
    description: "Một chạm chơi ngay - Trúng quà như ý",
    images: ["https://imgproxy.mezon.ai/K0YUZRIosDOcz5lY6qrgC6UIXmQgWzLjZv7VJ1RAA8c/rs:fill:464:259:1/mb:2097152/plain/https://cdn.mezon.ai/1840669672182124544/2007520781268946944.png@webp"],  },
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
