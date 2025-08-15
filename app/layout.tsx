import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from 'lenis/react'
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { NavTransition } from "@/components/animations/NavTransition";
import OpenTransition from '@/components/animations/OpenTransition'
import { Spotlight } from '../components/ui/spotlight-new';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy-Gym",
  description: "La tua guida al Bodybuilding | Schede personalizzate",
  keywords: ["Bodybuilding", "Fitness", "Allenamento", "Schede Personalizzate", "Corso Bodybuilding"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactLenis root />
        <NavTransition>
          <Header />
        </NavTransition>
        <Spotlight />
          <OpenTransition>
            {children}
          </OpenTransition>
          <Footer />
      </body>
    </html>
  );
}
