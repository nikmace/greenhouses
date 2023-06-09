import React from "react";
import { Roboto } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "../../styles/globals.scss";

// If loading a variable font, you don't need to specify the font weight
const lato = Roboto({
  weight: ["100", "300", "400", "700", "900"],
  preload: true,
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        <title>Agromir</title>
      </head>
      <body className="bg-[#fefefe]">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
