import React from "react";
import HeaderText from "../components/Text/HeaderText";
import FormContact from "../components/ContactForm/FormContact";

const ContactPage = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)]" id="contact_con">
      <div className="wrapper">
        <div className="h-full flex items-center justify-center gap-6">
          <div className="w-1/2">
            <h1 className="text-8xl text-priColor-800 drop-shadow-glow">
              <HeaderText word={"Get In Touch"} />
            </h1>
            <p>
              Interested in working together? Whether you'd like to discuss a
              collaboration, hire me for a project, or share some feedback, I'm
              ready to connect with you.
            </p>
            <p className="my-5">Find me on:</p>
            <div></div>
          </div>
          <div className="grad-box w-1/2 p-9 min-h-[600px] flex items-center justify-center">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
