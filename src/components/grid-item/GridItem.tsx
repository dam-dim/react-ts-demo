import { useAppContext } from "../../context/AppContext";
import "./GridItem.css";

type GridItemType = {
  id: string;
  name: string;
  type: string;
  price: number;
  image: number;
};

export function GridItem(props: GridItemType) {
  const { increaseCartQuantity } = useAppContext();

  return (
    <div className="grid-item">
      <img src={`images//${props.image}.png`} alt="" />
      <h4>{props.name}</h4>
      <div className="center-between">
        <p>{props.type}</p>
        <p>${props.price.toFixed(2)}</p>
      </div>
      <p
        className="pointer add-btn"
        onClick={() => increaseCartQuantity(props.id)}
      >
        Add
      </p>
    </div>
  );
}
