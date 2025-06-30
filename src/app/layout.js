import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

export const metadata = {
  title: "Top Biz LLP",
  description:
    "Reach out to Top Biz LLP for expert General Order Supplies, Import-Export solutions, and Government & Defense contracting services. Get in touch today for tailored, high-quality business support in Rawalpindi, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" />
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
