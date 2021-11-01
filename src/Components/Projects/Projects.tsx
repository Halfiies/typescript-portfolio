import { useState } from "react";
import "./Projects.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import github from "../../assets/images/github_original.png";
interface Props {
  projectArr: {
    title: string;
    text: string;
    image: string;
    link: string;
  }[];
}

export const Projects = ({ projectArr }: Props) => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    if (counter === projectArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(projectArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="projects">
      <div className="projects__Header">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={handleDecrement}
          className="projects__Arrow projects__Arrow--Left"
        />
        <h3>{projectArr[counter].title}</h3>
        <img
          src={rightArrow}
          alt="right arrow"
          onClick={handleIncrement}
          className="projects__Arrow projects__Arrow--Right"
        />
      </div>
      <div className="projects__Content">
        <p>{projectArr[counter].text}</p>
        <img
          className="projects__Content--Image"
          src={projectArr[counter].image}
          alt={projectArr[counter].title}
        />
      </div>
      <a href={projectArr[counter].link} className="projectCard__Content--Link">
        <img
          src={github}
          className=" profileCard__Links--Images"
          alt="github"
        />
      </a>
    </div>
  );
};
