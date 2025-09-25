import { Hero, Impact, Purpose, Values } from "@/components/about";
import { Banner } from "@/components/layout";
import { Divider } from "@/components/ui/divider";

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
