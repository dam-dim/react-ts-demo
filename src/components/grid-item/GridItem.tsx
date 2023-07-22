import "./GridItem.css";

type GridItemType = {
  name: string;
  type: string;
  price: number;
  image: number;
};

export function GridItem(props: GridItemType) {
  return (
    <div className="grid-item">
      <img src={`images//${props.image}.png`} alt="" />
      <h4>{props.name}</h4>
      <p>{props.type}</p>
      <p>${props.price.toFixed(2)}</p>
      <p className="pointer add-btn">Add</p>
    </div>
  );
}
