import { ReactNode } from "react";
import data from "../data/data.json";
import { GridItem } from "../components/grid-item/GridItem";

export function getGridItems(category: string, currentType: string) {
  let output: ReactNode[] = [];

  const currentCategory = data[category as keyof typeof data];

  currentCategory.forEach((element) => {
    if (element.type === currentType || currentType === "All Products") {
      output.push(
        <GridItem
          key={element.id}
          id={element.id}
          name={element.name}
          type={element.type}
          price={element.price}
          image={element.image}
        />
      );
    }
  });

  return output;
}
