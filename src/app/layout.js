"use client";

import CustomNavbar from "@/components/CustomNavbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomNavbar />
        <div className="my-3">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
