import React from "react";
import { useState } from "react";
import logo from "../images/vkLogo.png";
import { HeaderData } from "../utils/data";
import { Link } from "react-scroll";
import { Equal, X } from "lucide-react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  return (
    <div className="h-10 bg-[#161617b3] w-full top-0 left-0 right-0 fixed z-20 flex backdrop-blur-md justify-center md:justify-between">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="flex items-center p-1 mx-5 cursor-pointer h-full"
      >
        <img
          src={logo}
          alt="logo"
          className="h-[67%] transition-transform duration-300 ease-cubic-bezier(.215,.61,.355,1) hover:scale-110"
        />
      </Link>
      <div className="flex items-center md:hidden">
        {HeaderData.map((x) => {
          return (
            <Link
              to={x.id}
              spy={true}
              smooth={true}
              duration={500}
              key={x.id}
              className="text-[#dfdfdf] font-cutive mx-5 tracking-tighter leading-4 cursor-pointer hover:text-white"
            >
              {x.text}
            </Link>
          );
        })}
      </div>
      <div className="self-center mr-4 md:flex hidden" onClick={toggleNav}>
        <Equal size={28} strokeWidth={0.5} color="#dfdfdf" />
      </div>
      <div
        className={`${
          nav ? `translate-y-0`
            : "-translate-y-full overflow-hidden"
        } fixed h-[100dvh] left-0 top-0 w-full bg-black flex flex-col items-center duration-300`}
      >
        <X
          size={28}
          strokeWidth={0.5}
          color="#dfdfdf"
          onClick={toggleNav}
          className="h-10 flex self-end mr-4"
        />
        <div className={`flex self-start flex-col min-h-50vh max-h-fit mt-12`}>
        {HeaderData.map((x) => {
          return (
            <Link
              to={x.id}
              spy={true}
              smooth={true}
              duration={1000}
              key={x.id}
              onClick={toggleNav}
              className="text-[#dfdfdf] font-cutive text-2xl font-light mx-8 my-4 tracking-wide leading-5 cursor-pointer hover:text-white"
            >
              {x.text}
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Header;
