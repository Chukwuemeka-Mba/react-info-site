import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-icon">
        <span>
          <img src="./react-logo.svg" alt="" />
        </span>
        <a href="./">
          <h1>ReactFacts</h1>
        </a>
      </div>

      <div className="nav-end">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
