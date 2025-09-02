import type { Metadata } from "next";



import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PreviewBar from '@/components/PreviewBar/PreviewBar';
import FloatingWA from '@/components/FloatingWA/FloatingWA';
import FloatingPhone from '@/components/FloatingPhone/FloatingPhone';
import './globals.scss';
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Horizon",
  description: "Dive deep into finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <PreviewBar />
        <Header />
        {children}
      <FloatingPhone />
              <Footer />
      </body>
    </html>
  );
}
