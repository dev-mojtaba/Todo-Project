import React from "react";
import Logo from "./Icons/Logo";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-5 p-5 w-full bg-white dark:bg-secondary-dark">
      <div className="p-4 bg-primary-dark dark:bg-transparent rounded-full">
        <Logo />
      </div>
      <h3 className="text-center">
        Organize and complete your pending tasks easily!
      </h3>
    </header>
  );
};

export default Header;
