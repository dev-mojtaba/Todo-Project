import React from "react";
import GItHubIcon from "./Icons/GItHub";
import InstagramIcon from "./Icons/Instagram";
import InstagramHoverIcon from "./Icons/InstagramHover";
import LinkedInIcon from "./Icons/LinkedIn";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <p>Created with ❤️ by MOJTABA5858.</p>
        <div className="social__links">
          <a
            href="http://github.com/dev-mojtaba"
            target="_blank"
            className="github"
          >
            <GItHubIcon />
          </a>
          <a
            href="http://instagram.com/dev_mojtaba"
            target="_blank"
            className="instagram"
          >
            <InstagramIcon />
            <InstagramHoverIcon />
          </a>
          <a
            href="https://linkedin.com/in/mojtaba-zebardast-267010297/"
            target="_blank"
            className="linkedin"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
