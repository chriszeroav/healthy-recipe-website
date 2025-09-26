import {
  BreadcrumbRecipe,
  MoreRecipes,
  RecipeDetail,
} from "@/components/recipes";
import { Divider } from "@/components/ui/divider";
import { RECIPES } from "@/data/recipes";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = RECIPES.find((recipe) => recipe.slug === slug);

  if (!recipe) {
    return {
      title: "Recipe Not Found",
      description: "The requested recipe could not be found.",
    };
  }

  return {
    title: recipe.title,
    description: `${recipe.overview} Ready in ${
      recipe.prepMinutes + recipe.cookMinutes
    } minutes. Serves ${recipe.servings}.`,
    openGraph: {
      title: `${recipe.title} | Healthy Recipe Website`,
      description: `${recipe.overview} Ready in ${
        recipe.prepMinutes + recipe.cookMinutes
      } minutes. Serves ${recipe.servings}.`,
      url: `/recipes/${recipe.slug}`,
    },
  };
}

export default async function RecipesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const recipe = RECIPES.find((recipe) => recipe.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="">
      <section
        className={cn(
          "max-w-view mx-auto w-full",
          "px-4 py-12 md:px-8 lg:pb-16"
        )}
      >
        <div className="max-w-custom mx-auto w-full flex flex-col gap-3">
          <BreadcrumbRecipe currentPage={recipe.title} />
          <RecipeDetail recipe={recipe} />
        </div>
      </section>

      <Divider />

      <section
        className={cn(
          "max-w-view mx-auto w-full",
          "px-4 py-12 md:px-8 lg:pb-24 lg:pt-16"
        )}
      >
        <div className="max-w-custom mx-auto w-full flex flex-col gap-6">
          <h3 className="text-preset-3 text-custom-neutral-900">
            More recipes
          </h3>
          <MoreRecipes recipeSlug={recipe.slug} />
        </div>
      </section>

      <Divider />
    </main>
  );
}
