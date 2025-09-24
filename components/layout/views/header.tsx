import { FC } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavLink } from "./nav-link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "@/components/ui/icons";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/recipes", label: "Recipes" },
];

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="px-4">
      <div
        className={cn(
          "max-w-custom mx-auto h-24",
          "grid grid-cols-[1fr_auto] lg:grid-cols-[260px_1fr_260px] items-center"
        )}
      >
        <img src="/logo.svg" alt="" />
        <nav className="hidden lg:flex items-center gap-10 justify-self-center">
          {navigationItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          className={cn(
            buttonVariants({
              variant: "default",
              className: "text-preset-5 max-w-fit justify-self-end",
            }),
            "hidden lg:inline-flex"
          )}
          href="/recipes"
        >
          Browse recipes
        </Link>
        <Popover>
          <PopoverTrigger className="lg:hidden size-10 bg-custom-neutral-200 rounded-md inline-flex items-center justify-center hover:bg-custom-neutral-300 transition-colors duration-300">
            <MenuIcon className="size-6 text-custom-neutral-900" />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="border-custom-neutral-300 w-[calc(100vw-2rem)]"
          >
            Contenido
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
