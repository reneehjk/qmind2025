import React from "react";
import logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-[50px] pt-7 pb-4 z-20 relative border-t-[0.5px] border-[#808080]">
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div className="max-w-1/2">
          <h2 className="text-[35px] font-semibold flex items-end">
            <span className="mr-4">
              <img src={logo} className="h-12 w-12" />
            </span>
            Mechanistic Interpretation
          </h2>
          <p className="text-[18px] mt-2 font-medium">
            short summary Lorem ipsum dolor amet, consectetur adipiscing elit.
            Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida
            urna ultrices lacus dictum feugiat ornare imperdiet.
          </p>
        </div>
        <div className="mr-4">
          <h3 className="text-[28px] font-semibold">Contributors:</h3>
          <div className="grid grid-cols-3 gap-x-20 gap-y-2 text-[18px] mt-2 font-medium">
            <span>David Courtis</span>
            <span>Jagrit</span>
            <span>Bridgitte Rauch</span>
            <span>Dhruv Popli</span>
            <span>David Krayacich</span>
            <span>Renee Kim</span>
          </div>
        </div>
      </div>
      <div className="border-t-[0.1px] border-[#808080] mt-6 pt-4 text-left text-[14px]">
        QMIND © 2025
      </div>
    </footer>
  );
};

export default Footer;