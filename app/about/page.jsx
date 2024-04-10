import React from "react";
import HeaderText from "../components/Text/HeaderText";

const AboutPage = () => {
  return (
    <div className="h-full">
      <div className="wrapper">
        <div
          id="about_con"
          className="flex items-center justify-center h-full flex-col"
        >
          <div className="h-screen flex items-center justify-center">
            <div>
              <h1 className="text-8xl text-priColor-900 drop-shadow-glow ">
                <HeaderText word={"About me"} isDrag={false} />
              </h1>
              <p>
                Hello! I'm{" "}
                <span className="text-priColor-900 drop-shadow-glow text-3xl font-bold">
                  Rhysin Villahermosa
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
          <div className="h-screen flex items-center justify-center">
            <div>
              <h1>
                <HeaderText word={"My skills"} />
              </h1>
              <p>Technologies I’ve been working with recently</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
