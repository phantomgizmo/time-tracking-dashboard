import React from "react";

interface ProfileCardProps {
  profileName: string;
}

const ProfileCard = ({ profileName }: ProfileCardProps) => {
  return (
    <div>
      <header>
        <small>Report for</small>
        <p>{profileName}</p>
      </header>
      <ul>
        <li>
          <button>Daily</button>
        </li>
        <li>
          <button>Weekly</button>
        </li>
        <li>
          <button>Monthly</button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
