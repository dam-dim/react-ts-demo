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
      <div>
        <img src={`images//${image}.png`} alt="" />
      </div>

      <div className="name-price center-vertically">
        <div className="name-price-inner center-vertically">
          <h3>{name}</h3>
          <p className="p">
            ${price.toFixed(2)} x {quantity}
          </p>
          <p>${(quantity * price).toFixed(2)}</p>
        </div>
      </div>

      <div className="center-vertically">
        <button
          className="pointer delete"
          onClick={() => decreaseCartQuantity(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
