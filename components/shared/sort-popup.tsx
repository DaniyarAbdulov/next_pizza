import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

interface SortPopUpProps {
  className?: string;
}

export const SortPopUp: React.FC<SortPopUpProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка: </b>
      <b className="text-primary-button">популярное</b>
    </div>
  );
};
