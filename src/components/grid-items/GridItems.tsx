import { getGridItems } from "../../utils/GetGridItems";
import "./GridItems.css";

type GridItemsProps = {
  category: string;
};

export default function GridItems(props: GridItemsProps) {
  return <div className="grid-items">{getGridItems(props.category)}</div>;
}
