import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-container">
      <ul className="header-list">
        <a onClick={props.logout}>
          <li className="header-item"> Log Out</li>
        </a>

        <a href="/login">
          <li className="header-item"> Log In</li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
