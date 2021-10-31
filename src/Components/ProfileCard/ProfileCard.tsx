import React from "react";
import "./ProfileCard.scss";
import profilePicture from "../../assets/images/profilePicture.jpg";
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
        <p>{selfProfile.text}</p>
        <img
          className="profileCard__Content profileCard__Content--Picture"
          src={profilePicture}
          alt="morris"
        />
      </div>
    </section>
  );
};
