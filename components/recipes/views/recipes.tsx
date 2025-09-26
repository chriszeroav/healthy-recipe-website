import React, { FC } from "react";
import { Recipes as RecipesTable } from "@/reports/recipes";
import { useGetRecipes } from "@/hooks/recipes";

interface RecipesProps {}

export const Recipes: FC<RecipesProps> = ({}) => {
  const [recipes] = useGetRecipes();

  return <RecipesTable data={recipes} />;
};
