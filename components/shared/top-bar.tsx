"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then();
    } else {
      const textField = document.createElement("textarea");
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
    }
  };
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex flex-col sm:flex-row items-center justify-between sm:gap-8">
        <Categories />
        <div className="flex flex-col gap-1 mt-4 sm:mt-0 sm:flex-row sm:gap-6">
          <h1
            onClick={() => copyToClipboard("+79934477703")}
            className="transition-colors duration-200 hover:text-blue-500 cursor-pointer"
          >
            +79934477703
          </h1>
          <h1
            onClick={() => copyToClipboard("+79495925642")}
            className="transition-colors duration-200 hover:text-blue-500 cursor-pointer"
          >
            +79495925642
          </h1>
        </div>
      </Container>
    </div>
  );
};
