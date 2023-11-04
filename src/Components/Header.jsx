import Navigation from "./Navigation";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <h1 className="header-title">Gary Blue's Diner</h1>
      <Navigation />
    </div>
  );
}

export default Header;
