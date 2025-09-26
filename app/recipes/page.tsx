import {
  Recipes,
  SearchRecipe,
  SelectMaxCookTime,
  SelectMaxPrepTime,
} from "@/components/recipes";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Discover eight quick, whole-food dishes that fit real-life schedules. Search by name or ingredient and find healthy recipes in seconds.",
  openGraph: {
    title: "Recipes | Healthy Recipe Website",
    description:
      "Discover eight quick, whole-food dishes that fit real-life schedules. Search by name or ingredient and find healthy recipes in seconds.",
    url: "/recipes",
  },
};

export default function Page() {
  return (
    <main>
      <section
        className={cn(
          "max-w-view mx-auto w-full",
          "px-4 py-12 md:px-8 md:pt-16",
          "lg:pb-16 lg:pt-20"
        )}
      >
        <div
          className={cn(
            "max-w-custom mx-auto w-full",
            "flex flex-col gap-3 lg:text-center"
          )}
        >
          <h2
            className={cn(
              "text-preset-2-mobile md:text-preset-2",
              "text-custom-neutral-900"
            )}
          >
            Explore our simple, healthy recipes
          </h2>

          <p
            className={cn(
              "text-preset-6 text-custom-neutral-600",
              "lg:max-w-[724px] mx-auto"
            )}
          >
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </div>
      </section>

      <section
        className={cn(
          "max-w-view mx-auto w-full",
          "px-4 pb-10 md:px-8 lg:pb-24",
          "flex flex-col gap-6"
        )}
      >
        <div
          className={cn(
            "max-w-custom mx-auto w-full",
            "flex flex-col gap-3",
            "md:flex-row md:justify-between"
          )}
        >
          <div className="flex flex-col gap-3 md:flex-row">
            <Suspense>
              <SelectMaxPrepTime />
            </Suspense>
            <Suspense>
              <SelectMaxCookTime />
            </Suspense>
          </div>
          <Suspense>
            <SearchRecipe />
          </Suspense>
        </div>

        <div className="max-w-custom mx-auto w-full">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse rounded-[10px] bg-custom-neutral-200 p-4 aspect-[63/100] lg:aspect-[68/100]"
                  ></div>
                ))}
              </div>
            }
          >
            <Recipes />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
