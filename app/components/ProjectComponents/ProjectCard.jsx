import React from "react";
import HeaderText from "../Text/HeaderText";
import TagButton from "../Buttons/TagButton";
import GradientButton from "../Buttons/GradientButton";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <section className="project-card">
      <div className="project_cont">
        <figure className="w-1/2">
          <Image
            src={`/screenshot/${project.image}`}
            width={682}
            height={475}
          />
        </figure>
        <div className="mb-8 w-1/2">
          <h2 className="text-6xl mb-5 text-priColor-900 drop-shadow-glow">
            <HeaderText word={project.name} />
          </h2>
          <p>{project.desc}</p>
          <div className="stack-used my-5">
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
