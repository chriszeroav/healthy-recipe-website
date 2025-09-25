import React, { FC } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <section className="px-4 py-10 md:px-8 lg:py-20 max-w-view mx-auto w-full">
      <div
        className={cn(
          "max-w-custom mx-auto w-full overflow-hidden relative z-10",
          "flex flex-col items-center gap-8 md:gap-10",
          "px-4 py-12 md:py-20 lg:py-24 text-center",
          "bg-custom-neutral-200 rounded-2xl"
        )}
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-preset-2-mobile md:text-preset-2 text-custom-neutral-900">
            Ready to cook smarter?
          </h2>
          <p className="text-preset-6 text-custom-neutral-600">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>
        <Link
          className={buttonVariants({
            size: "large",
            className: "text-preset-5",
          })}
          href="/recipes"
        >
          Browse recipes
        </Link>

        <img
          className="hidden md:block absolute md:-top-12 md:-right-2 -z-10 md:size-[170px] lg:size-[340px] lg:top-5 lg:-right-14"
          src="/pattern-knife.svg"
          alt="Pattern Knife Decoration"
        />

        <img
          className="hidden md:block absolute md:-bottom-10 md:-left-12 -z-10 md:w-[180px] lg:w-[314px] lg:-bottom-8 lg:-left-20"
          src="/pattern-fork.svg"
          alt="Pattern Fork Decoration"
        />
      </div>
    </section>
  );
};
