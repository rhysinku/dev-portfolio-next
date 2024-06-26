import React from "react";
import HeaderText from "../components/Text/HeaderText";
import TechContainer from "../components/TechContainer";

const AboutPage = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)]" id="about_con">
      <div className="wrapper">
        <div className="h-screen flex items-center justify-center about_section">
          <div className="px-6 text-center md:text-left">
            <h1 className="text-7xl sm:text-8xl text-priColor-900 drop-shadow-glow ">
              <HeaderText word={"About me"} isDrag={false} />
            </h1>
            <p>
              Hello! I'm
              <span className="text-priColor-900 drop-shadow-glow text-3xl font-bold font-priFont">
                {" "}
                Rhysin Villahermosa{" "}
              </span>
              , a budding web developer driven by my love for creating
              captivating online experiences. I'm on a quest to become a
              proficient full stack developer, adept at both frontend and
              backend technologies. Being self-taught, I thrive on the journey
              of discovery and hands-on learning. I'm dedicated to ongoing
              improvement, aspiring to make valuable contributions to the
              dynamic realm of web development.
            </p>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center about_section">
          <div className="w-full flex justify-between items-center flex-wrap gap-y-5">
            <div className="w-full px-5 text-center lg:w-1/2 lg:text-left">
              <h1 className="text-8xl text-priColor-900 drop-shadow-glow ">
                <HeaderText word={"My Tech Stack"} />
              </h1>
              <p>Technologies I’ve been working with recently</p>
            </div>

            <div id="stack_container" className="w-full lg:w-1/2">
              <TechContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
