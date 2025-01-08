"use client";
import React from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useCategory } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  className,
  categoryId,
  title,
  items,
  listClassName,
}) => {
  const setActiveCategoryId = useCategory((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  // @ts-ignore
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[50px]",
          listClassName
        )}
      >
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
