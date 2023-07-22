import { getCategoryMenu } from "../../utils/GetCategoryMenu";
import "./GridMenu.css";

type GridMenuProps = {
  category: string;
};

export function GridMenu(props: GridMenuProps) {
  return <div className="grid-menu">{getCategoryMenu(props.category)}</div>;
}
