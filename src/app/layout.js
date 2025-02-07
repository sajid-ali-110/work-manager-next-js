"use client";

import CustomNavbar from "@/components/CustomNavbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/userProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div className="my-3">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
