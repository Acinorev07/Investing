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
  title: "Investigación",
  description: "Proyecto para la transversal de investigacion del SENA",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`grid grid-rows-[80px_1fr_20px] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
