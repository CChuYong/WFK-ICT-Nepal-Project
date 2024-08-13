
import Link from "next/link"
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import FooterBar from "@/components/FooterBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahendra Secondary School",
  description: "A school website for Mahendra Secondary School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar/>
        {children}
        <FooterBar/>
      </body>

    </html>
  );
}
