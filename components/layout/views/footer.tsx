import React, { FC } from "react";
import { BlueskyIcon, InstagramIcon, TikTokIcon } from "@/components/ui/icons";
import Link from "next/link";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="px-4 py-10 md:px-8 max-w-view mx-auto w-full">
      <div className="max-w-custom mx-auto w-full flex items-center justify-between">
        <p className="text-preset-9 text-custom-neutral-900">
          Made by Christopher
        </p>
        <ul className="flex items-center gap-6">
          <Link href="#">
            <InstagramIcon className="text-custom-neutral-900" />
          </Link>
          <Link href="#">
            <BlueskyIcon className="text-custom-neutral-900" />
          </Link>
          <Link href="#">
            <TikTokIcon className="text-custom-neutral-900" />
          </Link>
        </ul>
      </div>
    </footer>
  );
};
