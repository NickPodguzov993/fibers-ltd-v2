import { PropsWithChildren } from "react";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Fibers LTD",
  description: "Make advertisements great again",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
