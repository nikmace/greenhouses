import React from "react";

import { Lato } from "@next/font/google";

import "../../styles/globals.scss";

// If loading a variable font, you don't need to specify the font weight
const lato = Lato({
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
        <title>Mike van Peeren</title>
      </head>
      <body className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12">
          <div className="col-start-2">
            {/* Here you can place your Navigation */}
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
