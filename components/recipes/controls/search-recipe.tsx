import React, { FC } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/icons";

interface SearchRecipeProps {}

export const SearchRecipe: FC<SearchRecipeProps> = () => {
  return (
    <div className="relative md:max-w-[310px] w-full">
      <SearchIcon className="text-custom-neutral-900 absolute top-1/2 -translate-y-1/2 left-3 size-5" />
      <Input
        placeholder="Search by name or ingredient..."
        className="text-preset-7 pl-11"
      />
    </div>
  );
};
