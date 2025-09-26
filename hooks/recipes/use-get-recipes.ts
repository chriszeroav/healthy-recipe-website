import { RECIPES } from "@/data/recipes";

export const useGetRecipes = (
  maxPrepTime?: string,
  maxCookTime?: string,
  search?: string
) => {
  const filteredRecipes = RECIPES.filter((recipe) => {
    const matchesPrepTime = maxPrepTime
      ? recipe.prepMinutes <= Number(maxPrepTime)
      : true;
    const matchesCookTime = maxCookTime
      ? recipe.cookMinutes <= Number(maxCookTime)
      : true;
    const matchesSearch = search
      ? recipe.title.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesPrepTime && matchesCookTime && matchesSearch;
  });

  return [filteredRecipes];
};
