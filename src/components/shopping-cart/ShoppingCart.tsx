import { useAppContext } from "../../context/AppContext";
import { getCartItems } from "../../utils/GetCartItems";
import "./ShoppingCart.css";

type ShoppingCartProps = {
  isVisible: boolean;
};

export function ShoppingCart({ isVisible }: ShoppingCartProps) {
  const { closeCart, cartItems } = useAppContext();

  return isVisible ? (
    <div className="shopping-cart">
      <div className="center-between cart-header">
        <h2>Shopping Cart</h2>
        <p className="pointer" onClick={closeCart}>
          Close
        </p>
      </div>

      <ul>{getCartItems(cartItems)}</ul>
    </div>
  ) : null;
}
