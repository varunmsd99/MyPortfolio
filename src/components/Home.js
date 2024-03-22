import React from "react";
import SplineHome from "./SplineHome";
import { UserData } from "../utils/data";
import { ChevronRight } from "lucide-react";
import { Link } from "react-scroll";

const Home = () => {

  return (
    <div className="min-h-screen max-h-fit bg-[#000] flex flex-col" id="home">
      <div className="flex-1 flex items-center justify-between flex-col md:mt-12">
        <div className="flex-1 flex items-center w-[60vw] md:w-screen">
          <SplineHome />
        </div>
        <div className="flex flex-1 flex-col items-center text-white -mt-8">
          <span className="flex items-center md:flex-col md:items-center"><h2 className="font-montecarlo text-5xl">I'm &nbsp;</h2><h1 className="text-center text-7xl tracking-wider font-bungee-spice">{UserData.name}</h1></span>
          <div className="flex md:flex-col items-center">
            {UserData.title.map((x)=> {
              return(
                <h2 key={x} className="pt-3 text-2xl md:text-xl md:mt-2 font-cutive pr-2">{x}</h2>
              )
            })}
          </div>
          <div className="flex md:mt-1">
          {UserData.links.map((x) => {
            return(x.url.includes('/') ? (
              <a href={x.url} key={x.text} target="_blank" rel="noopener noreferrer" className="flex cursor-pointer text-sm text-[#2997ff] items-center pt-3 mx-3">
                <h2 className="self-baseline text-center tracking-tight text-base pr-1 font-cutive">{x.text}</h2>
                <ChevronRight color="#2997ff" size={16} strokeWidth={2} className="" />
              </a>) : (
              <Link to={x.url} key={x.text} target="_blank" spy={true} smooth={true} duration={500} className="flex cursor-pointer text-sm text-[#2997ff] items-center pt-3 mx-3">
                <h2 className="self-baseline text-center text-base tracking-tight pr-1 font-cutive">{x.text}</h2>
                <ChevronRight color="#2997ff" size={16} strokeWidth={2} className="" />
              </Link>))
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
