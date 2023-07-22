import "./Header.css";
import { useAppContext } from "../../context/AppContext";

export function Header() {
  const { openCart, cartQuantity } = useAppContext();

  return (
    <div className="header">
      <div className="logo center-around">
        <a href="/" className="center-around">
          <div className="center-between">
            <img src="icon\squares.svg" alt="" />
          </div>
          <h1 className="center-between">CORAL</h1>
          <div className="center-between">
            <img src="icon\squares.svg" alt="" />
          </div>
        </a>
      </div>

      <div className="width-centered center-between">
        <div className="search pointer center-between">
          <img src="icon\search.svg" alt="" />
        </div>

        <div className="profile-shopping center-between">
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
    </div>
  );
}
