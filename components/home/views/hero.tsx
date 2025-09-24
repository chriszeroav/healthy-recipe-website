import React, { FC } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <section className="px-4 py-12 md:px-8 lg:py-20 max-w-view mx-auto relative z-10">
      <div className="max-w-custom mx-auto flex flex-col gap-10 lg:gap-20">
        <div className="flex flex-col gap-4 lg:gap-3 lg:items-center">
          <h1 className="text-preset-1-mobile md:text-preset-1-tablet lg:text-preset-1 text-custom-neutral-900">
            <span
              className={cn(
                "relative z-10 before:absolute before:-z-10",
                "before:bottom-3 before:left-0 before:right-0",
                "before:h-[23px] md:before:h-[29px] lg:before:h-[39px]",
                "before:bg-custom-orange-500/40 before:rounded-md"
              )}
            >
              Healthy
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="text-preset-6 text-custom-neutral-600 max-w-[580px] lg:text-center mb-4 lg:mb-7">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>

          <Link
            className={buttonVariants({
              size: "large",
              className: "text-preset-5 max-w-fit",
            })}
            href="/recipes"
          >
            Start exploring
          </Link>
        </div>
        <picture className="bg-custom-neutral-0 p-1 lg:p-2 block rounded-lg lg:rounded-xl">
          <img
            className="rounded-md w-full lg:hidden"
            src="/image-home-hero-small.webp"
            alt="Colorful array of fresh, healthy ingredients including vegetables, fruits, and whole foods arranged beautifully"
          />
          <img
            className="rounded-md w-full hidden lg:block"
            src="/image-home-hero-large.webp"
            alt="Colorful array of fresh, healthy ingredients including vegetables, fruits, and whole foods arranged beautifully"
          />
        </picture>
      </div>
      <img
        src="/pattern-squiggle-1.svg"
        alt="pattern decoration"
        className="absolute left-0 right-0 w-full -z-10 top-[450px] md:top-[250px] lg:mask-x-from-95%"
      />
    </section>
  );
};
