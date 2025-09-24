import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <li className="flex flex-col gap-6">
      <div
        className={cn(
          "inline-flex items-center justify-center",
          "size-[60px] bg-custom-neutral-0 rounded-xl",
          "border border-custom-neutral-200"
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-preset-3 text-custom-neutral-900">{title}</h4>
        <p className="text-preset-6 text-custom-neutral-600">{description}</p>
      </div>
    </li>
  );
};
