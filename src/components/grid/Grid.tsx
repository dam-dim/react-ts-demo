import GridItems from "../grid-items/GridItems";
import { GridMenu } from "../grid-menu/GridMenu";
import "./Grid.css";

type GridProps = {
  category: string;
};

export function Grid(props: GridProps) {
  return (
    <div className="grid">
      <h1>{props.category}</h1>
      <GridMenu category={props.category} />
      <GridItems category={props.category} />
    </div>
  );
}
