import { useState } from "react";
import "./Projects.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
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
      <div className="projects__header">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={handleDecrement}
          className="projects__arrow projects__arrow--left"
        />
        <h3>{projectArr[counter].title}</h3>
        <img
          src={rightArrow}
          alt="right arrow"
          onClick={handleIncrement}
          className="projects__arrow projects__arrow--right"
        />
      </div>
      <div className="projects__content">
        <p>{projectArr[counter].text}</p>
        <img
          className="projects__content--image"
          src={projectArr[counter].image}
          alt={projectArr[counter].title}
        />
      </div>
      <p>{projectArr[counter].link}</p>
    </div>
  );
};
