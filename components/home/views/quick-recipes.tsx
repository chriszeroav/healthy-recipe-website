import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface QuickRecipesProps {}

export const QuickRecipes: FC<QuickRecipesProps> = () => {
  return (
    <section className="px-4 py-10 md:px-8 lg:py-20 max-w-view mx-auto w-full">
      <div className="max-w-custom mx-auto w-full flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-5 lg:max-w-[510px] lg:w-full">
          <h2 className="text-preset-2-mobile md:text-preset-2 text-custom-neutral-900">
            Built for real life
          </h2>
          <p className="text-preset-6 text-custom-neutral-600">
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <span
              className={cn(
                "text-preset-5 text-nowrap",
                "relative z-10 before:absolute before:-z-10",
                "before:bottom-1 before:left-0 before:right-0",
                "before:h-[10px] before:bg-custom-orange-500/80 before:rounded-md"
              )}
            >
              30 minutes
            </span>{" "}
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className="text-preset-6 text-custom-neutral-600">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
        <picture>
          <img
            className="rounded-xl"
            src="/image-home-real-life-large.webp"
            alt=""
          />
        </picture>
      </div>
    </section>
  );
};
