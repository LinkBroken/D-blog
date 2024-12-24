import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { faBookBookmark as icon } from "@fortawesome/free-solid-svg-icons";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D-blog",
  description: "Blog, Articles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col-reverse shrink-0   min-h-screen w-full md:flex-row ">
          <Navbar />

          {children}
        </div>
      </body>
    </html>
  );
}
