import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar/Navbar";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mobilia",
  description: "A web application for byuing and selling furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
