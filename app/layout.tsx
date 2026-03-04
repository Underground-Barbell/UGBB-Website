import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header"
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Underground Barbell",
  description: "Official Website of Underground Barbell Gym in Iowa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {


  return (
    <html lang="en">
      <body
        className="max-w-fit"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );

}
