import { ReactNode } from "react";
import { getCategoryTypes } from "./GetCategoryTypes";

export function getCategoryMenu(category: string) {
  let output: ReactNode[] = [];
  const categoryTypes: string[] = getCategoryTypes(category);

  output.push(
    <li key="All Products" className="li-menu-black pointer">
      All Products
    </li>
  );

  categoryTypes.forEach((element) => {
    output.push(
      <li key={element} className="li-menu-black pointer">
        {element}
      </li>
    );
  });

  return <ul className="center-around">{output}</ul>;
}
