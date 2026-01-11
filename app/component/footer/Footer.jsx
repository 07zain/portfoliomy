'use client';

import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="premium-footer">
      <Container className="footer-content">
        {/* Left */}
        <p className="footer-text">
          © {new Date().getFullYear()} <strong>Zainab Ashraf</strong>
        </p>

        {/* Center */}
        <p className="footer-made">
          Crafted with care using React & Next.js
        </p>

        {/* Right */}
        <div className="footer-socials">
          <a
            href="https://github.com/zainabashraf076"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/zainab-ashraf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:zainabashraf076@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
