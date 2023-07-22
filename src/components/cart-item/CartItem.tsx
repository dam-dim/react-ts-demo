import React from "react";
import { useAppContext } from "../../context/AppContext";

type CartItemProps = {
  id: string;
  name: string;
  image: number;
  quantity: number;
};

export function CartItem({ id, name, image, quantity }: CartItemProps) {
  const { decreaseCartQuantity } = useAppContext();

  return (
    <div className="cart-item">
      <p>{id}</p>
      <p>{name}</p>
      <p>{image}</p>
      <p>{quantity}</p>
      <p className="pointer" onClick={() => decreaseCartQuantity(id)}>
        Delete
      </p>
    </div>
  );
}
