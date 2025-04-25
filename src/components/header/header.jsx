import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // install react-icons if not already

const Header = ({ isAuth }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        Wisdom Wave
      </Link>

      <div className={`link ${isMobileMenuOpen ? "show" : ""}`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
