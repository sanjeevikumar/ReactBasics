import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [btnToggle, setBtnToggle] = useState("Login");
  return (
    <div className="headerContainer">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnToggle === "Login"
                ? setBtnToggle("Logout")
                : setBtnToggle("Login");
            }}
          >
            {btnToggle}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
