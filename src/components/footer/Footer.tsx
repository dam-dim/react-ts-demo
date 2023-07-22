import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer center-between">
      <div className="width-centered center-between">
        <div>
          <p>&copy;2023 CORAL , Inc.</p>
        </div>

        <a href="#" className="center-between">
          <p>Scroll To Top</p>
          <img src="icon\arrow.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
