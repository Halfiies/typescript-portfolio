import React from "react";
import "./ProfileCard.scss";
import profilePicture from "../../assets/images/profilePicture.jpg";
import github from "../../assets/images/github_original.png";
import linkedin from "../../assets/images/linkedin_original.png";
interface IProfileCardProps {
  selfProfile: {
    name: string;
    text: string;
  };
}

export const ProfileCard = ({ selfProfile }: IProfileCardProps) => {
  return (
    <section className="profileCard" id={`card_for_${selfProfile.name}`}>
      <h3 className="profileCard__Header">{selfProfile.name}</h3>
      <div className="profileCard__Content">
        <div className="profileCard__Text">
          <p>{selfProfile.text}</p>
          <div className="profileCard__Links">
            <a href="https://github.com/Halfiies">
              <img
                src={github}
                className=" profileCard__Links--Images"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/morris-willis/">
              <img
                src={linkedin}
                className=" profileCard__Links--Images"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <img
          className="profileCard__Content profileCard__Content--Picture"
          src={profilePicture}
          alt="morris"
        />
      </div>
    </section>
  );
};
