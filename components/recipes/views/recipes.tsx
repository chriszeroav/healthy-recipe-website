import React, { FC } from "react";
import { Recipes as RecipesTable } from "@/reports/recipes";
import { useGetRecipes } from "@/hooks/recipes";

interface RecipesProps {
  SelectMaxPrepTime: FC;
  SelectMaxCookTime: FC;
  SearchRecipe: FC;
}

export const Recipes: FC<RecipesProps> = ({
  SelectMaxPrepTime,
  SelectMaxCookTime,
  SearchRecipe,
}) => {
  const [recipes] = useGetRecipes();

  return (
    <section className="px-4 md:px-8 max-w-view mx-auto w-full">
      <div className="max-w-custom mx-auto w-full flex flex-col gap-6 ">
        <div className="flex md:items-center justify-between gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-4 md:items-center md:flex-row">
            <SelectMaxPrepTime />
            <SelectMaxCookTime />
          </div>
          <SearchRecipe />
        </div>
        <RecipesTable data={recipes} />
      </div>
    </section>
  );
};
