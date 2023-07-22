import { ReactNode } from "react";
import data from "../data/data.json";
import { GridItem } from "../components/grid-item/GridItem";

export function getGridItems(category: string) {
  let output: ReactNode[] = [];

  const currentCategory = data[category as keyof typeof data];

  currentCategory.forEach((element) => {
    output.push(
      <GridItem
        key={element.name}
        name={element.name}
        type={element.type}
        price={element.price}
        image={element.image}
      />
    );
  });

  return output;
}
