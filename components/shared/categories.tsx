"use client";
import { cn } from "@/lib/utils";
import { useCategory } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}
const cats = [
  { id: 1, name: "Трансферы" },
  { id: 2, name: "WhatsApp" },
  { id: 3, name: "Телеграм" },
  { id: 4, name: "О нас" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeId = useCategory((state) => state.activeId);
  return (
    <div
      className={cn(
        "inline-flex flex-wrap gap-1 bg-grey-50 p-1 rounded-xl border border-grey-300",
        className
      )}
    >
      {/* Grid layout for small screens */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
        {cats.map(({ name, id }, index) => (
          <a
            className={cn(
              "flex items-center font-bold h-11 rounded-xl px-5",
              activeId === id && "bg-yellow shadow-md text-primary",
              "w-full",
              index !== 0 && "border-t-2 border-grey-300" // Add border-top except for the first item
            )}
            href={`/#${name}`}
            key={index}
          >
            <button className="w-full">{name}</button>
          </a>
        ))}
      </div>
    </div>
  );
};
