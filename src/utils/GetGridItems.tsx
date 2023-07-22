import { ReactNode } from "react";
import data from "../data/data.json";
import { GridItem } from "../components/grid-item/GridItem";

export function getGridItems(category: string, currentType: string) {
  let output: ReactNode[] = [];

  const currentCategory = data[category as keyof typeof data];

  //let temp: ReactNode[] = [];
  //let counter = 0;

  currentCategory.forEach((element) => {
    // if (counter % 4 === 3) {
    //
    //   output.push(<div className="items-row center-between">{temp}</div>);
    //   temp = [];
    // }
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
    // counter++;
  });

  return output;
}
