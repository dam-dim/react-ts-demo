import "./NavBar.css";
import { getPagesForNavBar } from "../../utils/GetPagesForNavBar";

export default function NavBar() {
  return <div className="navbar">{getPagesForNavBar()}</div>;
}
