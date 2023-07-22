import { MouseEvent } from "react";
import { getCategoryMenu } from "../../utils/GetCategoryMenu";
import "./GridMenu.css";

type GridMenuProps = {
  category: string;
  currentType: string;
  handleClick: (e: MouseEvent) => void;
};

export function GridMenu({
  category,
  currentType,
  handleClick,
}: GridMenuProps) {
  return (
    <div className="grid-menu">
      {getCategoryMenu(category, currentType, handleClick)}
    </div>
  );
}
