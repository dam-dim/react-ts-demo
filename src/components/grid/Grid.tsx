import { useState, MouseEvent } from "react";
import GridItems from "../grid-items/GridItems";
import { GridMenu } from "../grid-menu/GridMenu";
import "./Grid.css";

type GridProps = {
  category: string;
};

export function Grid({ category }: GridProps) {
  const [currentType, setCurrentType] = useState("All Products");

  function changeCurrentType(type: string) {
    setCurrentType(() => type);
  }

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    changeCurrentType(
      e.currentTarget.textContent ? e.currentTarget.textContent : ""
    );
  };

  return (
    <div className="grid">
      <h1>{category}</h1>
      <GridMenu
        category={category}
        currentType={currentType}
        handleClick={handleClick}
      />
      <GridItems category={category} currentType={currentType} />
    </div>
  );
}
