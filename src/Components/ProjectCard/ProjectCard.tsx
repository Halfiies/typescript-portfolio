import React from "react";
import "./ProjectCard.scss";
interface Props {
  title: string;
  text: string;
  image: string;
  link: string;
}

export const ProjectCard: React.FC<Props> = ({ title, text, image, link }) => {
  return (
    <section className="projectCard" id={`card_for_${title}`}>
      <h3>{title}</h3>
      <div className="projectCard__Content">
        <p>{text}</p>
        <img className="projectCard__Content--image" src={image} alt={title} />
      </div>
      <p>{link}</p>
    </section>
  );
};
