import { PropsWithChildren } from "react";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import { Layout } from "@/components/layout";
import "./globals.css";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
