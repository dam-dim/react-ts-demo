import { ReactNode, MouseEvent } from "react";
import { getCategoryTypes } from "./GetCategoryTypes";

export function getCategoryMenu(
  category: string,
  currentType: string,
  handleClick: (e: MouseEvent) => void
) {
  let output: ReactNode[] = [];
  const categoryTypes: string[] = getCategoryTypes(category);

  output.push(
    <li
      style={{
        fontWeight: currentType === "All Products" ? "bold" : "normal",
      }}
      key="All Products"
      className="li-menu-black pointer"
      onClick={handleClick}
    >
      All Products
    </li>
  );

  categoryTypes.forEach((element) => {
    output.push(
      <li
        key={element}
        style={{
          fontWeight: element === currentType ? "bold" : "normal",
        }}
        className="li-menu-black pointer"
        onClick={handleClick}
      >
        {element}
      </li>
    );
  });

  return <ul className="center-around">{output}</ul>;
}
