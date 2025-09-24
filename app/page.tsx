import { Features, Hero, QuickRecipes } from "@/components/home";
import { Divider } from "@/components/ui/divider";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <Divider />
      <QuickRecipes />
    </main>
  );
}
