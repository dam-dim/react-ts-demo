import { useAppContext } from "../../context/AppContext";
import "./ShoppingCart.css";

type ShoppingCartProps = {
  isVisible: boolean;
};

export function ShoppingCart({ isVisible }: ShoppingCartProps) {
  const { closeCart } = useAppContext();

  return isVisible ? (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p className="pointer" onClick={closeCart}>
        Close
      </p>
    </div>
  ) : null;
}
