import React, { FC } from "react";

interface ImpactProps {}

export const Impact: FC<ImpactProps> = () => {
  return (
    <section className="px-4 py-12 md:px-8 lg:py-20 max-w-view mx-auto w-full">
      <div className="max-w-custom mx-auto w-full flex flex-col gap-10 lg:flex-row lg:gap-16 lg:items-center">
        <div className="flex flex-col gap-5 lg:max-w-[376px]">
          <h2 className="text-preset-2-mobile md:text-preset-2 text-custom-neutral-900">
            Beyond the plate
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-preset-6 text-custom-neutral-600">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className="list-disc ml-5 text-preset-6 text-custom-neutral-900">
              <li className="text-preset-6">
                Encourage family dinners and social cooking.
              </li>
              <li>
                Reduce reliance on single-use packaging and delivery waste.
              </li>
              <li>
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="rounded-xl"
            src="/image-about-beyond-the-plate-large.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
