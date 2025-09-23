import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthy Recipe Website",
  description: "A website dedicated to healthy recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${nunito_sans.variable} antialiased`}
      >
        <div className="bg-custom-neutral-100 min-h-dvh flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
