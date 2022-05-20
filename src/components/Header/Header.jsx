import React from "react";
import HeaderStyle from "./HeaderStyle";

// logo location.
const LOGO_URL = "./images/logo.svg";

const Header = () => {
  const { mainContainer, logo, innerContainer, selectBox } = HeaderStyle;

  return (
    <header className={mainContainer.style}>
      <div className={innerContainer.style}>
        <img src={LOGO_URL} className={logo.style} />
        <select className={selectBox.style}>
          <option value="Username">Username</option>
          <option value="FNN Number">FNN Number</option>
        </select>
        <div>
          <input type="text" placeholder="search...." />
          <button>search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
