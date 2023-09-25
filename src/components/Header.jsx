import "./Header.styles.scss";
import logo from "../assets/cart.png";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-items">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="Your Logo" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
