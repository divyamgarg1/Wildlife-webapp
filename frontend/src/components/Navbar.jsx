import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Wildlife Research</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login" className="login-btn">Login/Signup</Link>
        {/* <Link to="/signup" className="signup-btn">Sign Up</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
