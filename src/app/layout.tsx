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
  title: "Portfolio Developer",
  description: "Software Developer portfolio specialized in React, Next.js, TypeScript and Tailwind CSS. Discover my projects and skills.",
  keywords: ["developer", "frontend", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Fabrice HOUESSOU" }],
  creator: "Fabrice HOUESSOU",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "fabricehouessou.dev",
    title: "Portfolio Developer",
    description: "Software Developer portfolio specialized in React, Next.js, TypeScript and Tailwind CSS",
    siteName: "Software Developer Portfolio"
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
