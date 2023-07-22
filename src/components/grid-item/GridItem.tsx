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

  function showAddBtn() {
    console.log("enter");
  }

  return (
    <div className="grid-item">
      <img src={`images//${props.image}.png`} alt="" onMouseOver={showAddBtn} />
      <div className="name">
        <h4>{props.name}</h4>
      </div>
      <div className="center-between type-price">
        <p>{props.type}</p>

        <h4>${props.price.toFixed(2)}</h4>
      </div>
      <button
        className="pointer add-btn"
        onClick={() => increaseCartQuantity(props.id)}
      >
        Add To Cart
      </button>
    </div>
  );
}
