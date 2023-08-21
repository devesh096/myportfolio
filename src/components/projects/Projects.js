import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Portfolio Website"
          des="React Portfolio Website using MERN Stack and Showing the Full Portfolio of a candidate."
          src={projectOne}
        />
        <ProjectsCard
          title="Live-Cricket Website"
          des="CricFann.com Shows Live Score of Cricket Score and Latest Cricket News."
          src={projectTwo}
        />
        <ProjectsCard
          title="Stock Market Analysis App"
          des="Finology, A Stock Market Analysis Application with Real Time Stock Prediction."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
