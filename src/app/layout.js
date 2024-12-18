"use client";

import CustomNavbar from "@/components/CustomNavbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <CustomNavbar />
        <div className="my-3">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
