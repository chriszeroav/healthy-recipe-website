"use client";

import { FC } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, label, ...props }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={buttonVariants({
        variant: "link",
        size: "none",
        className: cn(
          "text-preset-7 relative group py-3 px-2 lg:p-0 justify-start",
          isActive
            ? "bg-custom-neutral-100 lg:bg-transparent"
            : "hover:bg-custom-neutral-100 lg:hover:bg-transparent"
        ),
      })}
      href={href}
      {...props}
    >
      {label}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0",
          "h-[3px] rounded-full",
          "bg-custom-orange-500",
          "transition-opacity duration-300",
          isActive
            ? "opacity-0 lg:opacity-100"
            : "opacity-0 lg:group-hover:opacity-100"
        )}
      />
    </Link>
  );
};
