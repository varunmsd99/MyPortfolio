import React from "react";
import SplineObject from "./SplineObject";
import { HomePageData } from "../utils/data";
import { ChevronRight } from "lucide-react";
import { Link } from "react-scroll"; 
import flag from "../images/flag.png";
import DateTimeDisplay from "../utils/getDate";

const Home = () => {
  return (
    <div className="min-h-[100dvh] max-h-fit bg-black flex flex-col" id="home">
      <div className="flex-1 flex items-center justify-between mt-12 md:flex-col">
        <div className="flex flex-1 flex-col items-center justify-center text-white md:self-center md:justify-self-center">
          <h1 className="font-black text-6xl md:text-4xl tracking-wider">{HomePageData.name}</h1>
          <h2 className="pt-3 text-2xl font-light md:text-xl tracking-tight">{HomePageData.title}</h2>
          <div className="flex">
          {HomePageData.links.map((x) => {
            return(
                <Link to={x.url} key={x.text} target="_blank" spy={true} smooth={true} duration={500} className="flex cursor-pointer text-sm text-[#2997ff] items-center pt-3 mx-3">
                  <h2 className="self-baseline text-center text-base pr-1">{x.text}</h2>
                  <ChevronRight color="#2997ff" size={16} strokeWidth={2} className="mt-1" />
                </Link>)
          })}
          </div>
        </div>
        <div className="flex flex-1 items-start w-full">
          <SplineObject className=""/>
        </div>
      </div>
      <div className="text-white text-end py-2 px-3 flex self-end items-center">
        <img src={flag} alt='flag' className="w-4 h-4 rounded-full  mr-2"/>
        <DateTimeDisplay />
      </div>
    </div>
  );
};

export default Home;
