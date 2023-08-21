import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Winner in District Level Chess Competition"
            subTitle="Mandsaur Disrict."
            result="Success"
            des="Runner-Up Posiiton in District Level Chess Competition Organised by Nagar Palika, Mandsaur"
          />
          <ResumeCard
            title="Merit Holder in UCMAS State Level Competition."
            subTitle="Madhya Pradesh."
            result="Success"
            des="Merit Holder in the UCMAS State Level Yearly Competition Organised by UCMAS International!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
