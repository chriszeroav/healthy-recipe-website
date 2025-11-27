import { Hero, Impact, Purpose, Values } from "@/components/about";
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
      <Divider />
      <Purpose />
      <Divider />
      <Values />
      <Divider />
      <Impact />
      <Banner />
    </main>
  );
}
