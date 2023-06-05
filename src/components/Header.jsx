import React from "react";
import logo from "../assets/tvLogo.png"

function Header() {
  return (
    <>
      <header className="w-full">
        <nav className="container mx-auto py-3 text-white flex justify-center md:justify-start">
          <img src={logo} alt="logo" />
        </nav>
      </header>
    </>
  );
}

export default Header;
