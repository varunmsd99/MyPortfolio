import React from "react";
import { Link } from "react-router-dom";
import { contactData } from "../utils/data";
import { Mail, ChevronRight } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-white py-10 flex flex-col justify-center"
    >
      <p className="text-6xl font-black text-center mb-16 md:my-8">
        <span className="text-clip font-bungee-spice bg-[linear-gradient(to_right,#eca658,#f391a6,#e188c3,#a58de3,#56abec,#737eb7,#c8638c,#dd5d57,#df6c51)] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
          Let's Work Together
        </span>
      </p>
      <div className="flex md:flex-col justify-center gap-8 w-full overflow-x-hidden pb-10 md:pb-8">
        {contactData.map((x) => {
          return (
            <div
              key={x.name}
              className="flex flex-col items-center px-2 min-w-36"
            >
              {x.icon}
              <h1 className="font-bold text-lg text-center font-jura tracking-wide">{x.name}</h1>
              <h3 className="font-semibold text-sm text-[#7c7c7c] text-center font-jura tracking-wide">
                {x.text}
              </h3>
              <Link
                to={x.url}
                target="_blank"
                className="flex cursor-pointer text-sm text-[#2997ff] items-center"
              >
                <p className="self-baseline text-center font-jura tracking-wide font-bold">{x.subtext}</p>
                <ChevronRight
                  color="#2997ff"
                  size={14}
                  strokeWidth={2}
                  className="mt-1"
                />
              </Link>
            </div>
          );
        })}
      </div>
      <p className="text-center text-sm pb-8 font-jura tracking-wide">or</p>
      <p className="text-center text-sm font-jura tracking-wide font-semibold">send an email at</p>
      <div className="flex justify-center">
        <Mail color="#707070" strokeWidth={1} className="pr-2" />
        <p className="text-[#2997ff] text-sm font-jura tracking-wide font-semibold">varunpelluru@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
