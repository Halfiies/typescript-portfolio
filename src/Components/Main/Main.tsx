import React from "react";
import "./Main.scss";
import { Projects } from "../Projects/Projects";
import { projectArr } from "../../Data/Projects";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { selfProfile } from "../../Data/selfProfile";

export const Main = () => {
  return (
    <div className="main">
      <ProfileCard selfProfile={selfProfile} />
      <Projects projectArr={projectArr} />
    </div>
  );
};
