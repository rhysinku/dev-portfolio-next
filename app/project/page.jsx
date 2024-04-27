import React from "react";

import ProjectBox from "../components/ProjectComponents/ProjectBox";
import HeaderText from "../components/Text/HeaderText";

const ProjectPage = () => {
  return (
    <div className="h-[calc(100%-3.5rem)]" id="project_con">
      <div className="wrapper">
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl text-priColor-900 drop-shadow-glow mb-6">
              <HeaderText word={"Projects I Worked"} />
            </h1>

            <p>
              Explore my portfolio of projects showcasing my skills and
              contributions
            </p>
          </div>
        </div>
      </div>

      <ProjectBox />
    </div>
  );
};

export default ProjectPage;
