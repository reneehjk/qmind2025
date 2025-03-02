import React from "react";
import logo from "../../public/logo.svg";

const Header = ({ scrollToSection, aboutRef, projectRef, demoRef }) => {
  return (
    <div className="flex flex-row justify-between w-[100vw] bg-black -mt-20 pt-10 fixed px-[50px]">
      <div className="flex flex-row">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <div className="ml-10 text-white text-[55px] font-bold ">M.I.</div>
      </div>
      <div className="flex flex-row space-x-20 text-white self-end mb-5 text-[28px] font-semibold">
        <div onClick={() => scrollToSection(aboutRef)} className="cursor-pointer">
          About
        </div>
        <div onClick={() => scrollToSection(projectRef)} className="cursor-pointer">
          Project
        </div>
        <div onClick={() => scrollToSection(demoRef)} className="cursor-pointer">
          Demo
        </div>
      </div>
    </div>
  );
};

export default Header;