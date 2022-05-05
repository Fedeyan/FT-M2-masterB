import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import Styles from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={Styles.nav}>
      <img src={Logo} alt="" />
      <span>Henry - Weather App</span>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
}

export default Nav;
