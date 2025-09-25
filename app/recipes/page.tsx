import {
  Hero,
  Recipes,
  SearchRecipe,
  SelectMaxCookTime,
  SelectMaxPrepTime,
} from "@/components/recipes";

export default function Page() {
  return (
    <main>
      <Hero />
      <Recipes
        SelectMaxPrepTime={SelectMaxPrepTime}
        SelectMaxCookTime={SelectMaxCookTime}
        SearchRecipe={SearchRecipe}
      />
    </main>
  );
}
