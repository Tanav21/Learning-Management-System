import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand Section */}
        <div className="footer-brand">
          <h2>Wisdom Wave</h2>  
          <p>Empowering learning, one course at a time.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/courses">Courses</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQs</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterSquare />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your E-Learning Platform. All rights reserved.</p>
        <p>Made with ❤️ by <a href="https://yourportfolio.com">Sahil</a></p>
      </div>
    </footer>
  );
};

export default Footer;
