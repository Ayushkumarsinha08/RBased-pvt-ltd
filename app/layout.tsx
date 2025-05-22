import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RBased Pvt. Ltd.",
  description: "Research-Based Solutions to Real-Life Problems through Remote Sensing and GIS",
  icons: {
    icon: [
      {
        url: "/logo.jpg",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable } antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
