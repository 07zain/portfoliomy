'use client';

import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="main-header">
      <Container className="header-inner">
        {/* Name */}
        <h3 className="logo-name">
  <span className="first-name">Zainab</span>{" "}
  <span className="last-name">Ashraf</span>
</h3>

        {/* Social Icons */}
        <div className="header-socials">
          <a
            href="https://github.com/07zain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ashrafzainab"
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
    </header>
  );
};

export default Header;
