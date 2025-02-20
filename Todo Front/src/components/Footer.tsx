import React from "react";
import GItHubIcon from "./Icons/GItHub";
import InstagramIcon from "./Icons/Instagram";
import InstagramHoverIcon from "./Icons/InstagramHover";
import LinkedInIcon from "./Icons/LinkedIn";
import YoutubeIcon from "./Icons/Youtube";
import YoutubeFilledIcon from "./Icons/YoutubeFilled";

const Footer: React.FC = () => {
  return (
    <footer className="container py-10">
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-sm md:text-base">
          Created with ❤️ by MOJTABA5858.
        </p>
        <div className="flex gap-1">
          <a
            href="https://github.com/dev-mojtaba"
            target="_blank"
            className="relative w-6 sm:w-8 md:w-10 h-10"
          >
            <GItHubIcon className="absolute inset-0 m-auto w-full h-full fill-primary-dark dark:fill-primary-light hover:fill-primary transition-all ease-linear duration-200" />
          </a>
          <a
            href="https://instagram.com/dev_mojtaba"
            target="_blank"
            className="relative w-6 sm:w-8 md:w-10 h-10"
          >
            <InstagramIcon className="absolute inset-0 m-auto w-full h-full fill-primary-dark dark:fill-primary-light transition-all ease-linear duration-200 hover:opacity-0" />
            <InstagramHoverIcon className="absolute inset-0 m-auto w-full h-full transition-all ease-linear duration-200 hover:opacity-100 opacity-0" />
          </a>
          <a
            href="https://linkedin.com/in/mojtaba-zebardast-267010297/"
            target="_blank"
            className="relative w-6 sm:w-8 md:w-10 h-10"
          >
            <LinkedInIcon className="absolute inset-0 m-auto w-full h-full fill-primary-dark dark:fill-primary-light hover:fill-blue-800 transition-all ease-linear duration-200" />
          </a>
          <a
            href="https://youtube.com/@MOJTABA5858/"
            target="_blank"
            className="relative w-6 sm:w-8 md:w-10 h-10"
          >
            <YoutubeIcon className="absolute inset-0 m-auto w-full h-full fill-primary-dark dark:fill-primary-light transition-all ease-linear duration-200 hover:opacity-0" />
            <YoutubeFilledIcon className="absolute inset-0 m-auto w-full h-full hover:fill-red-600 transition-all ease-linear duration-200 hover:opacity-100 opacity-0" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
