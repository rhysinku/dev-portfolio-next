import Image from "next/image";
import React from "react";

import ProjectBox from "../components/ProjectComponents/ProjectBox";
import HeaderText from "../components/Text/HeaderText";

const ProjectPage = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)]" id="project_con">
      <div className="w-screen flex items-center justify-center flex-col">
        <div className="w-full h-screen text-center">
          <div className="wrapper flex items-center justify-center">
            <div className="w-full">
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
        <div className="flex h-screen overflow-hidden">
          <ProjectBox />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
