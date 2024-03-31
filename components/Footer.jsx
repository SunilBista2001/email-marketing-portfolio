import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Sunil's Portfolio</p>
        <div className="social_icons">
          <a
            href="https://twitter.com/itsbista/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/sunil-bista-4079a8245/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
