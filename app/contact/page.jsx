import React from "react";
import HeaderText from "../components/Text/HeaderText";
import FormContact from "../components/ContactForm/FormContact";
import SocialMediaBox from "../components/SocialMedia/SocialMediaBox";

const ContactPage = () => {
  return (
    <div className="lg:h-[calc(100vh-3.5rem)] h-screen" id="contact_con">
      <div className="wrapper">
        <div className="h-full flex items-center justify-center gap-6 flex-wrap">
          <div className="lg:w-2/5 lg:text-left w-full text-center px-4">
            <h1 className="text-6xl text-priColor-800 drop-shadow-glow md:text-8xl">
              <HeaderText word={"Get In Touch"} />
            </h1>
            <p>
              Interested in working together? Whether you'd like to discuss a
              collaboration, hire me for a project, or share some feedback, I'm
              ready to connect with you.
            </p>
            <p className="my-5">Find me on:</p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <SocialMediaBox />
            </div>
            <div></div>
          </div>
          <div className="grad-box lg:w-1/2 w-11/12 max-w-7xl  p-9 flex items-center justify-center">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
