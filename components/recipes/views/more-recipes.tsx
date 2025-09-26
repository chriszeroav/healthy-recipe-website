import React, { FC } from "react";
import { Recipes as RecipesTable } from "@/reports/recipes";
import { useGetRecipes } from "@/hooks/recipes";

interface MoreRecipesProps {
  recipeSlug: string;
}

export const MoreRecipes: FC<MoreRecipesProps> = ({ recipeSlug }) => {
  const [recipes] = useGetRecipes();

  const filtered = recipes.filter((recipe) => recipe.slug !== recipeSlug);

  const shuffled = filtered.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  return <RecipesTable data={selected} />;
};
