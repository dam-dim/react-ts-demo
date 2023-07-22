import { useAppContext } from "../../context/AppContext";
import { calculateTotal } from "../../utils/CalculateTotal";
import { getCartItems } from "../../utils/GetCartItems";
import "./ShoppingCart.css";

type ShoppingCartProps = {
  isVisible: boolean;
};

export function ShoppingCart({ isVisible }: ShoppingCartProps) {
  const { closeCart, cartItems } = useAppContext();

  return isVisible ? (
    <div className="shopping-cart">
      <div className="center-around cart-header">
        <h1 className="center-vertically">Shopping Cart</h1>
        <button className="pointer close center-vertically" onClick={closeCart}>
          Close
        </button>
      </div>
      <hr />
      <ul>{getCartItems(cartItems)}</ul>
      <hr />
      <div className="total center-around">
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      </div>
    </div>
  ) : null;
}
