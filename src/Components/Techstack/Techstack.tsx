import "./Techstack.scss";
import react_icon from "../../assets/images/react_icon.png";
import css_icon from "../../assets/images/css.png";
import html5_icon from "../../assets/images/html5.png";
import javascript_icon from "../../assets/images/javascript.jpg";
import java_icon from "../../assets/images/Java_icon.png";
export const Techstack = () => {
  return (
    <div className="techStack">
      <div className="techStack__Content">
        <img className="techStack__Images" src={react_icon} alt="react_icon" />
        <img className="techStack__Images" src={css_icon} alt="css_icon" />
        <img className="techStack__Images" src={html5_icon} alt="html5_icon" />
        <img
          className="techStack__Images"
          src={javascript_icon}
          alt="javascript_icon"
        />
        <img className="techStack__Images" src={java_icon} alt="java_icon" />
      </div>
    </div>
  );
};
