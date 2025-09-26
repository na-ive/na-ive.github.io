import type { Metadata } from "next";
import { Lora, ABeeZee } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const loraSans = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const abzSans = ABeeZee({
  variable: "--font-abz",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Naufal Ammar",
  description: "Junior Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${loraSans.variable} ${abzSans.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
