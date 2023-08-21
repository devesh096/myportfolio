import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  //for typewriter effects
  const [text] = useTypewriter({
    words: ["Student in NIT Kurukshetra ", "Web Developer", "iOS Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Devesh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Currently, I am pursuing MCA from National Institute of Technology,
          Kurukshetra. I am highly passionate data science enthusiast who
          believes that data is the most valuable resource for the growth of a
          company. I am skilled in machine learning, statistics, predictive
          analytics and programming to perform experiments on that data, bring
          out the valuable insights and tell a strong story with it!
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
