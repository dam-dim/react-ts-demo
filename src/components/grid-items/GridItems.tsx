import { getGridItems } from "../../utils/GetGridItems";
import "./GridItems.css";

type GridItemsProps = {
  category: string;
  currentType: string;
};

export default function GridItems({ category, currentType }: GridItemsProps) {
  return (
    <div className="grid-items">{getGridItems(category, currentType)}</div>
  );
}
