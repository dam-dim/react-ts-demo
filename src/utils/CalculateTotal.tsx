import { findItemById } from "./FindItemById";

type CartItem = {
  id: string;
  quantity: number;
};

export function calculateTotal(cartItems: CartItem[]) {
  let output: number = 0;

  cartItems.forEach((element) => {
    const item = findItemById(element.id);
    output += item.price * element.quantity;
  });

  return output;
}
