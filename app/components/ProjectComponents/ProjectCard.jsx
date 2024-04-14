import React from "react";
import HeaderText from "../Text/HeaderText";

const ProjectCard = () => {
  return (
    <section className="project-card">
      <div class="project_cont">
        <figure>
          <img src={"https://placehold.co/682x475"} />
        </figure>
        <div className="mb-8">
          <h2 className="text-6xl mb-5 text-priColor-900 drop-shadow-glow">
            <HeaderText word={"Project Title"} />
          </h2>
          <p>
            This is a project descriptions this is the content, Here it lies the
            content that i want to place in here
          </p>
          <div className="stack-used my-5">
            <section className="btn">JavaScript</section>
            <section className="btn">Sass</section>
            <section className="btn">Html</section>
            <section className="btn">npm</section>
          </div>

          <div className="project">
            <section className="btn">Source Code</section>
            <section className="btn">View Site</section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
