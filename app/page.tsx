import { Features, Hero, QuickRecipes } from "@/components/home";
import { Banner } from "@/components/layout";
import { Divider } from "@/components/ui/divider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our mission to make healthy cooking simple and accessible with whole-food recipes designed for real life.",
  openGraph: {
    title: "About Us | Healthy Recipe Website",
    description:
      "Learn about our mission to make healthy cooking simple and accessible with whole-food recipes designed for real life.",
    url: "/about",
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <Divider />
      <QuickRecipes />
      <Banner />
    </main>
  );
}
