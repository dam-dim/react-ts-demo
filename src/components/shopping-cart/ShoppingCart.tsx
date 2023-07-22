import { useAppContext } from "../../context/AppContext";
import "./ShoppingCart.css";

export function ShoppingCart() {
  const { closeCart } = useAppContext();

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p className="pointer" onClick={closeCart}>
        Close
      </p>
    </div>
  );
}
