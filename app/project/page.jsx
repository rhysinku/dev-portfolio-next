import Image from "next/image";
import React from "react";

import ProjectBox from "../components/ProjectComponents/ProjectBox";
import HeaderText from "../components/Text/HeaderText";

const ProjectPage = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-scroll" id="project_con">
      <div className="wrapper">
        <div className="h-screen flex items-center justify-center">
          <div>
            <h1 className="text-6xl text-priColor-900 drop-shadow-glow ">
              <HeaderText word={"Projects I Worked"} />
            </h1>

            <p>
              Explore my portfolio of projects showcasing my skills and
              contributions
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[200vh]  flex-wrap">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="flex ">
            <ProjectBox />
          </div>
        </div>
      </div>

      <div className="h-[500px] bg-priColor-800"></div>
    </div>
  );
};

export default ProjectPage;
