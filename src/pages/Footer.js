// Footer.js
import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="link-boxes">
          <div className="box">
            <h3 className="link_name">Company</h3>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Terms of Service</a></li>
            </ul>
          </div>
          <div className="box">
            <h3 className="link_name">Services</h3>
            <ul>
              <li><a href="/">Web Development</a></li>
              <li><a href="/">Graphic Design</a></li>
              <li><a href="/">SEO</a></li>
              <li><a href="/">Marketing</a></li>
            </ul>
          </div>
          <div className="box">
            <h3 className="link_name">Account</h3>
            <ul>
              <li><a href="/">Login</a></li>
              <li><a href="/">Sign Up</a></li>
              <li><a href="/">Forgot Password</a></li>
            </ul>
          </div>
          <div className="box">
            <h3 className="link_name">Courses</h3>
            <ul>
              <li><a href="/">JavaScript Basics</a></li>
              <li><a href="/">React Fundamentals</a></li>
              <li><a href="/">Node.js Mastery</a></li>
              <li><a href="/">Python for Beginners</a></li>
            </ul>
          </div>
          <div className="box input-box">
            <h3 className="link_name">Subscribe</h3>
            <input type="text" placeholder="Enter your email" />
            <input type="button" value="Subscribe" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
