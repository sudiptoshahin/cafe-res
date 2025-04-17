import { Geist, Geist_Mono, Montserrat, Playfair } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "coderzcafe",
  description: "A Restaurant Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Suspense>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
