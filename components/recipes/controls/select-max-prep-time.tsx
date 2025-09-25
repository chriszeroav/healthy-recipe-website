"use client";

import React, { FC, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectMaxPrepTimeProps {}

export const SelectMaxPrepTime: FC<SelectMaxPrepTimeProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentMaxPrepTime = searchParams.get("maxPrepTime");

  const handleValueChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "clear") {
        params.delete("maxPrepTime");
      } else {
        params.set("maxPrepTime", value);
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <Select value={currentMaxPrepTime || ""} onValueChange={handleValueChange}>
      <SelectTrigger className="px-4 py-2.5 text-preset-7 text-custom-neutral-900 w-full md:w-auto">
        <SelectValue placeholder="Max Prep Time" alwaysShowPlaceholder />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="text-preset-7 text-custom-neutral-900" value="5">
          5 minutes
        </SelectItem>
        <SelectItem
          className="text-preset-7 text-custom-neutral-900"
          value="10"
        >
          10 minutes
        </SelectItem>
        <SelectItem
          className="text-preset-7 text-custom-neutral-900"
          value="15"
        >
          15 minutes
        </SelectItem>
        <SelectItem
          className="text-preset-7 text-custom-neutral-900"
          value="20"
        >
          20 minutes
        </SelectItem>
        <SelectItem
          className="text-preset-7 text-custom-neutral-900"
          value="clear"
        >
          Clear
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
