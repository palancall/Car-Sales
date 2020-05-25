import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <h2>Tolentino Motors</h2>
      <Link to="/">HOME</Link>
      <input type="text" placeholder="CLICK HERE TO SEARCH" />
    </div>
  );
};

export default NavBar;
