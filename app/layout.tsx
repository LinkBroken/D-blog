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
        <Navbar />

        {children}
        <Footer
          description="Your daily dose of insightful articles"
          key={Math.random()}
          icon={icon}
          title="D-blog"
        />
      </body>
    </html>
  );
}
