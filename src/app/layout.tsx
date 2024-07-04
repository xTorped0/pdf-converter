import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Toaster } from 'sonner';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pdf Convertor",
  description: "Fastest PDF generator by DevsTeam",
};
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          className="text-yellow-500"
          duration={1500}
        />
      </body>
    </html>
  );
}
