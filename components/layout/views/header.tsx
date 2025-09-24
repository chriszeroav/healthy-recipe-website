import { FC } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavLink } from "./nav-link";
import {
  Popover,
  PopoverClose,
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
    <header
      className={cn(
        "max-w-view mx-auto w-full",
        "border-b border-custom-neutral-300",
        "px-4 md:px-8 h-[92px] "
      )}
    >
      <div
        className={cn(
          "max-w-custom mx-auto h-full",
          "grid grid-cols-[1fr_auto] items-center",
          "lg:grid-cols-[260px_1fr_260px]"
        )}
      >
        <img src="/logo.svg" alt="Logo Healthy Recipe Finder" />
        <nav className="hidden lg:flex items-center gap-10 justify-self-center">
          {navigationItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
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
          <PopoverTrigger
            className={cn(
              "inline-flex items-center justify-center",
              "lg:hidden size-10 rounded-md",
              "bg-custom-neutral-200 hover:bg-custom-neutral-300",
              "transition-colors duration-300"
            )}
          >
            <MenuIcon className="size-6 text-custom-neutral-900" />
          </PopoverTrigger>
          <PopoverContent
            sideOffset={12}
            align="end"
            className="w-[calc(100vw-2rem)] flex flex-col gap-2.5 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <PopoverClose key={item.href} asChild>
                  <NavLink href={item.href} label={item.label} />
                </PopoverClose>
              ))}
            </nav>
            <PopoverClose asChild>
              <Link
                className={buttonVariants({
                  variant: "default",
                  className: "text-preset-5",
                })}
                href="/recipes"
              >
                Browse recipes
              </Link>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
