"use client";

import { FC } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, children, className }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={buttonVariants({
        variant: "link",
        size: "none",
        className: cn("text-preset-7 relative group", className),
      })}
      href={href}
    >
      {children}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0",
          "h-[3px] rounded-full",
          "bg-custom-orange-500",
          "transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
      />
    </Link>
  );
};
