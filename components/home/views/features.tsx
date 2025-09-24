import React, { FC } from "react";
import { FeatureCard } from "@/components/ui/feature-card";
import {
  MinimumFussIcon,
  SearchInSecondsIcon,
  WholeFoodRecipesIcon,
} from "@/components/ui/icons";

interface FeaturesProps {}

export const Features: FC<FeaturesProps> = () => {
  return (
    <section className="px-4 py-10 md:px-8 lg:py-20 max-w-view mx-auto w-full">
      <div className="max-w-custom mx-auto w-full flex flex-col gap-12">
        <h2 className="text-preset-2-mobile md:text-preset-2 text-custom-neutral-900">
          What you’ll get
        </h2>
        <ul className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
          <FeatureCard
            icon={<WholeFoodRecipesIcon />}
            title="Whole-food recipes"
            description="Each dish uses everyday, unprocessed ingredients."
          />
          <FeatureCard
            icon={<MinimumFussIcon />}
            title="Minimum fuss"
            description="All recipes are designed to make eating healthy quick and easy."
          />
          <FeatureCard
            icon={<SearchInSecondsIcon />}
            title="Search in seconds"
            description="Filter by name or ingredient and jump straight to the recipe you need."
          />
        </ul>
      </div>
    </section>
  );
};
