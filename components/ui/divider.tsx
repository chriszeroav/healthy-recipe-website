import React, { FC } from "react";

interface DividerProps {}

export const Divider: FC<DividerProps> = () => {
  return (
    <div className="h-[1px] bg-custom-neutral-300 max-w-view mx-auto w-full" />
  );
};
