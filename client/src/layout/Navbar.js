import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="index.html">
          <i className="">CONNECTECH</i>
        </Link>
      </h1>
      <ul>
        {/* <li>
          <Link to="!#">Developers</Link>
        </li> */}
        <li>
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li>
          <Link className="" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
