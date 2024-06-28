import "../../../assets/css/public/style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-1">
          <NavLink to="" className="logo">
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </NavLink>

          <div className="icons">
            <NavLink to="" className="fas fa-shopping-cart"></NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
