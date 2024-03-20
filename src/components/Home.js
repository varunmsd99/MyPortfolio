import React from "react";
import SplineHome from "./SplineHome";
import { UserData } from "../utils/data";
import { ChevronRight } from "lucide-react";
import { Link } from "react-scroll";
import flag from "../images/flag.png";
import DateTimeDisplay from "../utils/getDate";

const Home = () => {

  return (
    <div className="min-h-[100dvh] max-h-fit bg-[#070200fe] flex flex-col" id="home">
      <div className="flex-1 flex items-center justify-between flex-col md:mt-12">
        <div className="flex-1 flex items-center w-[60vw] md:w-screen">
          <SplineHome />
        </div>
        <div className="flex flex-1 flex-col items-center text-white -mt-8">
          <span className="flex items-baseline md:flex-col md:items-center"><h2 className="font-gluten text-3xl">Hi, I'm &nbsp;</h2><h1 className="text-center text-7xl tracking-wider font-bungee-spice">{UserData.name}</h1></span>
          <h2 className="pt-3 text-2xl md:text-xl md:mt-2">{UserData.title}</h2>
          <div className="flex md:mt-1">
          {UserData.links.map((x) => {
            return(x.url.includes('/') ? (
              <a href={x.url} key={x.text} target="_blank" rel="noopener noreferrer" className="flex cursor-pointer text-sm text-[#2997ff] items-center pt-3 mx-3">
                <h2 className="self-baseline text-center text-base pr-1">{x.text}</h2>
                <ChevronRight color="#2997ff" size={16} strokeWidth={2} className="mt-1" />
              </a>) : (
              <Link to={x.url} key={x.text} target="_blank" spy={true} smooth={true} duration={500} className="flex cursor-pointer text-sm text-[#2997ff] items-center pt-3 mx-3">
              <h2 className="self-baseline text-center text-base pr-1">{x.text}</h2>
              <ChevronRight color="#2997ff" size={16} strokeWidth={2} className="mt-1" />
            </Link>))
          })}
          </div>
        </div>
      </div>
      <div className="text-white text-end py-2 px-3 flex self-end items-center">
        <img src={flag} alt='flag' className="w-4 h-4 rounded-full mr-2"/>
        <DateTimeDisplay />
      </div>
    </div>
  );
};

export default Home;
