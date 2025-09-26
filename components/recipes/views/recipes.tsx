"use client";

import React, { FC } from "react";
import { Recipes as RecipesTable } from "@/reports/recipes";
import { useGetRecipes } from "@/hooks/recipes";
import { useSearchParams } from "next/navigation";

interface RecipesProps {}

export const Recipes: FC<RecipesProps> = ({}) => {
  const searchParams = useSearchParams();
  const maxPrepTime = searchParams.get("maxPrepTime") || "";
  const maxCookTime = searchParams.get("maxCookTime") || "";
  const search = searchParams.get("search") || "";

  const [recipes] = useGetRecipes(maxPrepTime, maxCookTime, search);

  if (recipes.length === 0) {
    return (
      <div className="text-preset-4 text-center min-h-24 flex items-center justify-center">
        No recipes found.
      </div>
    );
  }

  return <RecipesTable data={recipes} />;
};
