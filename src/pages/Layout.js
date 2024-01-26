import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/Layout.css" // Import the CSS file for your layout styles
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hooks" className="nav-link">
              Hooks
            </Link>
          </li>
          <li className="nav-item">

           
            <Link to="/login">
            <button>Login</button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="content-container">
        <Outlet />
      </div>

      <Footer/>
    </>
  );
}
