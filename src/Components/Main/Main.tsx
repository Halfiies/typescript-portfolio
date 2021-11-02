import "./Main.scss";
import { Projects } from "../Projects/Projects";
import { projectArr } from "../../Data/Projects";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { selfProfile } from "../../Data/selfProfile";
import { Techstack } from "../Techstack/Techstack";
export const Main = () => {
  return (
    <div className="main">
      <ProfileCard selfProfile={selfProfile} />
      <Techstack />
      <Projects projectArr={projectArr} />
    </div>
  );
};
