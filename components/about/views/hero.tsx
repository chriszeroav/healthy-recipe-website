import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <section className="px-4 py-12 md:px-8 lg:py-20 max-w-view mx-auto w-full relative">
      <div
        className={cn(
          "max-w-custom mx-auto w-full",
          "flex flex-col gap-10 md:gap-16 lg:flex-row",
          "lg:items-center"
        )}
      >
        <div className="flex flex-col gap-6 lg:max-w-[510px]">
          <p
            className={cn(
              "text-custom-neutral-900 bg-custom-orange-500",
              "text-preset-5 px-1.5 py-0.5 rounded-md max-w-fit"
            )}
          >
            Our mission
          </p>
          <h2 className="text-preset-2-mobile md:text-preset-2 text-custom-neutral-900">
            Help more people cook nourishing meals, more often.
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-preset-6 text-custom-neutral-600">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="text-preset-6 text-custom-neutral-600">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/image-about-our-mission-large.webp"
            className="rounded-xl"
            alt="Our mission image"
          />
        </div>
      </div>
      <img
        className="absolute right-0 bottom-40"
        src="/pattern-squiggle-2.svg"
        alt="Pattern decoration"
      />
    </section>
  );
};
