import { BulletPointIcon } from "@/components/ui/icons";
import { FC } from "react";

interface ItemArrowProps {
  title: string;
  description: string;
}

export const ItemArrow: FC<ItemArrowProps> = ({ title, description }) => {
  return (
    <li className="flex gap-5">
      <BulletPointIcon className="min-w-fit" />
      <div className="flex flex-col gap-3">
        <h4 className="text-preset-4 text-custom-neutral-900">{title}</h4>
        <p className="text-preset-6 text-custom-neutral-600">{description}</p>
      </div>
    </li>
  );
};
