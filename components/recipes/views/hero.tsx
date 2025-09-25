import React, { FC } from "react";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <section className="px-4 py-10 md:px-8 lg:py-20 max-w-view mx-auto w-full">
      <div className="max-w-custom mx-auto w-full flex flex-col gap-3 lg:items-center lg:text-center">
        <h2 className="text-preset-2-mobile md:text-preset-2 text-custom-neutral-900">
          Explore our simple, healthy recipes
        </h2>
        <p className="text-preset-6 text-custom-neutral-600 lg:max-w-[724px]">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>
    </section>
  );
};
