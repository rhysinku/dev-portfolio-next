import React from "react";
import HeaderText from "../Text/HeaderText";
import TagButton from "../Buttons/TagButton";
import GradientButton from "../Buttons/GradientButton";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <section className="project_card">
      <div className="project_cont">
        <figure>
          <Image
            src={`/screenshot/${project.image}`}
            alt={project.name}
            width={682}
            height={475}
            className="overflow-hidden rounded-xl drop-shadow-glow"
          />
        </figure>
        <div className="project_info">
          <h2 className="lg:text-6xl text-3xl mb-5 text-priColor-900 drop-shadow-glow text-center xl:text-left">
            <HeaderText word={project.name} />
          </h2>
          <p>{project.desc}</p>
          <div className="stack-used my-5 flex-wrap gap-2 justify-center xl:justify-start">
            {project.stack.map((stack, index) => (
              <TagButton key={index}>{stack}</TagButton>
            ))}
          </div>

          <div className="project-btn">
            {project.github && (
              <GradientButton targetBlank={true} href={project.github}>
                View Code
              </GradientButton>
            )}
            {project.site && (
              <GradientButton targetBlank={true} href={project.site}>
                Visit Page
              </GradientButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
