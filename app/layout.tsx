import type { Metadata } from "next";
import localFont from "next/font/local";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header"
import Footer from "@/app/components/footer";

const bbhBogle = localFont({
  src: "../public/Fonts/BBH_Sans_Bartle,BBH_Sans_Bogle/BBH_Sans_Bogle/BBHSansBogle-Regular.ttf",
  variable: "--font-bbh-bogle",
  display: "swap",
});

const bbhBartle = localFont({
  src: "../public/Fonts/BBH_Sans_Bartle,BBH_Sans_Bogle/BBH_Sans_Bartle/BBHSansBartle-Regular.ttf",
  variable: "--font-bbh-bartle",
  display: "swap",
});

const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis-google",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Underground Barbell",
  description: "Official Website of Underground Barbell Gym in Iowa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {


  return (
    <html lang="en" className={`${bbhBogle.variable} ${bbhBartle.variable} ${dosis.variable}`}>
      <body
        className=""
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );

}
