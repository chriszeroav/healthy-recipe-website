import React, { FC } from "react";
import { Recipe } from "@/types/recipes";
import Link from "next/link";
import {
  CookTimeIcon,
  PrepTimeIcon,
  ServingsIcon,
} from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RecipesProps {
  data: Recipe[];
}

export const Recipes: FC<RecipesProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
      {data.map((recipe) => (
        <li
          key={recipe.id}
          className={cn(
            "flex flex-col gap-4",
            "border border-custom-neutral-300",
            "bg-custom-neutral-0 p-2 rounded-[18px]",
            "hover:scale-105 transition-transform duration-300"
          )}
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-[10px] max-h-[300px] object-cover"
          />
          <div className="flex flex-col gap-2 flex-1 px-2">
            <h3 className="text-preset-5 text-custom-neutral-900 truncate">
              {recipe.title}
            </h3>
            <p className="text-preset-9 text-custom-neutral-600">
              {recipe.overview}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5">
                <ServingsIcon className="text-custom-neutral-900" />
                <span className="text-preset-9 text-custom-neutral-900">
                  Servings: {recipe.servings}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <PrepTimeIcon className="text-custom-neutral-900" />
                <span className="text-preset-9 text-custom-neutral-900">
                  Prep: {recipe.prepMinutes} mins
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CookTimeIcon className="text-custom-neutral-900" />
                <span className="text-preset-9 text-custom-neutral-900">
                  Cook: {recipe.cookMinutes} mins
                </span>
              </div>
            </div>
          </div>

          <Link
            href={`/recipes/${recipe.id}`}
            className={buttonVariants({ className: "text-preset-8" })}
          >
            View Recipe
          </Link>
        </li>
      ))}
    </ul>
  );
};
