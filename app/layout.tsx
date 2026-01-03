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
    default: "Little Seed Library | Faith-Based Children's Books",
    template: "%s | Little Seed Library",
  },
  description: "Planting seeds of virtue through faith-based children's books. Stories rooted in timeless truth, nurturing kindness, respect, patience, and love in little hearts.",
  keywords: ["children's books", "faith-based books", "Christian children's books", "Tales of Heavenly Manners", "biblical values", "kids books", "picture books"],
  authors: [{ name: "Little Seed Library" }],
  creator: "Little Seed Library",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Little Seed Library",
    title: "Little Seed Library | Faith-Based Children's Books",
    description: "Planting seeds of virtue through faith-based children's books. Stories rooted in timeless truth, nurturing kindness, respect, patience, and love in little hearts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Little Seed Library - Faith-Based Children's Books",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Seed Library | Faith-Based Children's Books",
    description: "Planting seeds of virtue through faith-based children's books.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
