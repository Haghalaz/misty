import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const timeBurner = localFont({
  src: [
    {
      path: "../fonts/timeburner.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/timeburnerbold.ttf",
      weight: "700",
      style: "bold",
    },
  ],

  variable: "--font-timeBurner",
});

const sokBrubah = localFont({
  src: [
    {
      path: "../fonts/sok-brubah.ttf",
      weight: "400",
      style: "normal",
    },
  ],

  variable: "--font-sokBrubah",
});

export const metadata: Metadata = {
  title: "Misty estúdio criativo",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} ${sokBrubah.variable} ${timeBurner.variable} scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
