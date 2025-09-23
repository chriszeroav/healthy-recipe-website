import Link from "next/link";
import { FC } from "react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="px-4">
      <div className="max-w-custom mx-auto h-24 flex items-center justify-between">
        <img src="/logo.svg" alt="" />
        <nav className="flex items-center gap-10">
          <Link className="text-preset-7 text-custom-neutral-900" href="/">
            Home
          </Link>
          <Link className="text-preset-7 text-custom-neutral-900" href="/about">
            About
          </Link>
          <Link
            className="text-preset-7 text-custom-neutral-900"
            href="/recipes"
          >
            Recipes
          </Link>
        </nav>
      </div>
    </header>
  );
};
