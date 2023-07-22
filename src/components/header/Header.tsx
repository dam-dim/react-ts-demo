import "./Header.css";
import { useAppContext } from "../../context/AppContext";

export function Header() {
  const { openCart, cartQuantity } = useAppContext();

  return (
    <div className="header center-between">
      <div className="pointer">
        <img src="icon\search.svg" alt="" />
      </div>

      <div>
        <a href="/" className="center-between">
          <img src="icon\squares.svg" alt="" />
          <h1>Coral</h1>
          <img src="icon\squares.svg" alt="" />
        </a>
      </div>

      <div className="center-between">
        <div className="profile pointer center-between">
          <img src="icon\profile.svg" alt="" />
          <p>Profile</p>
        </div>

        <div className="shopping pointer center-between" onClick={openCart}>
          <img src="icon\cart.svg" alt="" />
          <p>Shopping</p>
          <div className="quantity">
            <p>{cartQuantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
