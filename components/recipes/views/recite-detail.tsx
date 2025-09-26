import {
  BulletPointIcon,
  CookTimeIcon,
  PrepTimeIcon,
  ServingsIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Recipe } from "@/types/recipes";
import React, { FC } from "react";

interface RecipeDetailProps {
  recipe: Recipe;
}

export const RecipeDetail: FC<RecipeDetailProps> = ({ recipe }) => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="lg:max-w-[580px]">
        <img src={recipe.image} className="rounded-[10px]" alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <h3
          className={cn(
            "text-preset-2-mobile lg:text-preset-2",
            "text-custom-neutral-900"
          )}
        >
          {recipe.title}
        </h3>
        <p className="text-preset-6 text-custom-neutral-600">
          {recipe.overview}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <div className="flex items-center gap-2">
            <ServingsIcon className="text-custom-neutral-900" />
            <span className="text-preset-7 text-custom-neutral-900">
              Servings: {recipe.servings}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <PrepTimeIcon className="text-custom-neutral-900" />
            <span className="text-preset-7 text-custom-neutral-900">
              Prep: {recipe.prepMinutes} mins
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CookTimeIcon className="text-custom-neutral-900" />
            <span className="text-preset-7 text-custom-neutral-900">
              Cook: {recipe.cookMinutes} mins
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-preset-4 text-custom-neutral-900">
            Ingredients:
          </h4>
          <ul className="flex flex-col gap-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                <BulletPointIcon className="min-w-fit size-6" />

                <p className="text-preset-6 text-custom-neutral-600">
                  {ingredient}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-preset-4 text-custom-neutral-900">
            Instructions:
          </h4>
          <ul className="flex flex-col gap-2">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex items-center gap-2">
                <BulletPointIcon className="min-w-fit size-6" />

                <p className="text-preset-6 text-custom-neutral-600">
                  {instruction}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
