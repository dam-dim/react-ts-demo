import { useAppContext } from "../../context/AppContext";
import "./CartItem.css";

type CartItemProps = {
  id: string;
  name: string;
  image: number;
  quantity: number;
  price: number;
};

export function CartItem({ id, name, image, quantity, price }: CartItemProps) {
  const { decreaseCartQuantity } = useAppContext();

  return (
    <div className="cart-item center-between">
      <img src={`images//${image}.png`} alt="" />
      <div className="name-price">
        <p>{name}</p>
        <p>{quantity}</p>
      </div>

      <p>${(quantity * price).toFixed(2)}</p>
      <p className="pointer" onClick={() => decreaseCartQuantity(id)}>
        Delete
      </p>
    </div>
  );
}
