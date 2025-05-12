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
      <div className="footer-grid">
        {/* Left Column: Brand and Social */}
        <div className="footer-left">
          <h2>Wisdom Wave</h2>
          <p>Empowering learning, one course at a time.</p>
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
        {/* Right Column: Navigation Links */}
        <div className="footer-right">
          <div className="footer-links-col">
            <a href="/about">About Us</a>
            <a href="/courses">Courses</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-links-col">
            <a href="/faq">FAQs</a>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wisdom Wave. All rights reserved.</p>
        <p>
          Made with 💜 by <a href="/">Team Wisdom</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
