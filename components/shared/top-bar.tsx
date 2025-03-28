import { cn } from "@/lib/utils";
import * as React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopUp } from "./sort-popup";

interface ITopBarProps {
  className?: string;
}

export const TopBar: React.FunctionComponent<ITopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky bg-white py-5 shadow-lg shadow-black/5 z-10 top-0",
        className
      )}
    >
      <Container className=" flex items-center justify-between">
        <Categories />
        <SortPopUp />
      </Container>
    </div>
  );
};


