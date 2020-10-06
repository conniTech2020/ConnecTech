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

// import React, { Component } from "react";
// import { Route, NavLink, HashRouter } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import LogIn from "./LogIn";
// import SingUp from "./SingUp";

// function NavBar() {
//   return (
//     <HashRouter>
//       <div>
//         {/* <h1>Simple SPA</h1> */}
//         <ul className="header">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//           <li>
//             <NavLink to="/login">Login</NavLink>
//           </li>
//           <li>
//             <NavLink to="/singup">Sing-up</NavLink>
//           </li>
//         </ul>
//         <div className="content">
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/login" component={LogIn} />
//           <Route path="/singup" component={SingUp} />
//         </div>
//       </div>
//     </HashRouter>
//   );
// }

// export default NavBar;
