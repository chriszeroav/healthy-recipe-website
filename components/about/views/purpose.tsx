import React, { FC } from "react";
import { ItemArrow } from "./item-arrow";

interface PurposeProps {}

export const Purpose: FC<PurposeProps> = () => {
  return (
    <section className="px-4 py-12 md:px-8 lg:py-20 max-w-view mx-auto w-full">
      <div className="max-w-custom mx-auto w-full flex flex-col gap-10 lg:flex-row">
        <h2 className="text-preset-2-mobile md:text-preset-2 text-custom-neutral-900 lg:max-w-[372px] lg:w-full">
          Why we exist
        </h2>
        <ul className="flex flex-col gap-6 md:gap-8 lg:gap-12">
          <ItemArrow
            title="Cut through the noise."
            description="The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking."
          />
          <ItemArrow
            title="Empower home kitchens."
            description="When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep."
          />
          <ItemArrow
            title="Make healthy look good."
            description="High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters."
          />
        </ul>
      </div>
    </section>
  );
};
