import "./NavBar.css";
import { getPagesForNavBar } from "../../utils/GetPagesForNavBar";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="width-centered">{getPagesForNavBar()}</div>
    </div>
  );
}
