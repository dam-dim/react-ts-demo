import { ReactNode } from "react";
import { findItemById } from "./FindItemById";
import { CartItem } from "../components/cart-item/CartItem";

type CartItem = {
  id: string;
  quantity: number;
};

export function getCartItems(cartItems: CartItem[]) {
  let output: ReactNode[] = [];

  cartItems.forEach((cartItem) => {
    const id = cartItem.id;
    const quantity = cartItem.quantity;
    const item = findItemById(id);
    output.push(
      <li key={id}>
        <CartItem
          id={id}
          name={item.name}
          quantity={quantity}
          image={item.image}
          price={item.price}
        />
      </li>
    );
  });

  return output;
}
