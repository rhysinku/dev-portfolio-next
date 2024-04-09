import React from "react";
import HeaderText from "../components/Text/HeaderText";

const AboutPage = () => {
  return (
    <div className="h-full backdrop-blur-[3px] backdrop-saturate-[0.7]">
      <div className="wrapper">
        <div id="about_con" className="flex items-center justify-center h-full">
          <div>
          <h1 className="text-8xl text-priColor-800 drop-shadow-glow ">
          <HeaderText word={'About me'} isDrag={false}/>
          </h1>
          <p>Hello! I'm <span className="text-priColor-800 drop-shadow-glow text-3xl font-bold">Rhysin Villahermosa</span>, a budding web developer driven by my love for creating captivating online experiences. I'm on a quest to become a proficient full stack developer, adept at both frontend and backend technologies. Being self-taught, I thrive on the journey of discovery and hands-on learning. I'm dedicated to ongoing improvement, aspiring to make valuable contributions to the dynamic realm of web development.</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
