import React, { FC } from "react";
import { ItemArrow } from "./item-arrow";

interface ValuesProps {}

export const Values: FC<ValuesProps> = () => {
  return (
    <section className="px-4 py-12 md:px-8 lg:py-20 max-w-view mx-auto w-full">
      <div className="max-w-custom mx-auto w-full flex flex-col gap-10 lg:flex-row">
        <h2 className="text-preset-2-mobile md:text-preset-2 text-custom-neutral-900 lg:max-w-[372px] lg:w-full">
          Our food philosophy
        </h2>
        <ul className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <ItemArrow
            title="Whole ingredients first."
            description="Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe."
          />
          <ItemArrow
            title="Flavor without compromise."
            description="Spices, citrus, and natural sweetness replace excess salt, sugar, and additives."
          />
          <ItemArrow
            title="Respect for time."
            description="Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful."
          />
          <ItemArrow
            title="Sustainable choices."
            description="Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly."
          />
        </ul>
      </div>
    </section>
  );
};
