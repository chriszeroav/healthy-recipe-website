import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const titleTemplate = "%s | Healthy Recipe Website";
const defaultTitle =
  "Healthy Recipe Website - Quick & Nutritious Whole-Food Recipes";

export const metadata: Metadata = {
  title: {
    template: titleTemplate,
    default: defaultTitle,
  },
  description:
    "Discover quick and nutritious whole-food recipes designed for real life. All recipes use everyday ingredients and take 30 minutes or less to prepare.",
  keywords: [
    "healthy recipes",
    "quick recipes",
    "whole food recipes",
    "nutritious meals",
    "30 minute meals",
    "healthy cooking",
    "simple recipes",
    "unprocessed ingredients",
  ],
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
          <Footer />
        </div>
      </body>
    </html>
  );
}
