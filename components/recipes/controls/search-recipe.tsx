"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface SearchRecipeProps {}

export const SearchRecipe: FC<SearchRecipeProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  const updateURL = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim() === "") {
        params.delete("search");
      } else {
        params.set("search", value.trim());
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateURL(searchValue);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchValue, updateURL]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative md:max-w-[310px] w-full">
      <SearchIcon
        className={cn(
          "text-custom-neutral-900 size-5",
          "absolute top-1/2 -translate-y-1/2 left-3"
        )}
      />
      <Input
        placeholder="Search by name or ingredient..."
        className="text-preset-7 text-custom-neutral-900 pl-11"
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
