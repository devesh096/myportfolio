import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's in Computer Application"
            subTitle="Barkatullah University (2018 - 2021)"
            result="72.4%"
            des="A Bachelor's Degree in Computer Application to get a KickStart on Computer Programming Languages and Cyber Security"
          />
          <ResumeCard
            title="Master's in Computer Application"
            subTitle="NIT Kurukshetra (2021-2024) "
            result="8.2/10"
            des="Post Graduation Degree in Computer Application Focusing on Machine Learning and Artifical Intelligence. "
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Kendriya Vidyalaya Mandsaur (2017-18)"
            result="87%"
            des="Higher Secondary School Education Focusing on Mathematics and Science."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Industrial Training
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Industrial Training in Java"
            subTitle="Ezeon Technologies, Bhopal"
            result="Bhopal"
            des="An Industrial Training in Java Spring Boot Framework."
          />
          <ResumeCard
            title="MEAN Stack Training"
            subTitle="Bitcode, Pune"
            result="Pune"
            des="An Industrial Training Course on Web Development using Angular and MongoDb."
          />
          <ResumeCard
            title="Data Science Training"
            subTitle="TechnoGeeks, Pune"
            result="Pune"
            des="A Beginner's Friendly Industrial Traning on Python with Data Science."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
