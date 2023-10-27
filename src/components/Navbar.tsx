import { React, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img src={menu} alt="menu" className="w-[28px] h-[28px]" />
      </div>
    </nav>
  );
};

export default Navbar;
