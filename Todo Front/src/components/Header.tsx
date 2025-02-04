import React from "react";
import Logo from "./Icons/Logo";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo__wrapper">
        <Logo />
      </div>
      <h3>Organize and complete your pending tasks easily!</h3>
    </header>
  );
};

export default Header;