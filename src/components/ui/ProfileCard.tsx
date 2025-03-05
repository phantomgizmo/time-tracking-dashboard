import React from "react";

interface ProfileCardProps {
  profileName: string;
  setTimeCategory: React.Dispatch<
    React.SetStateAction<"daily" | "weekly" | "monthly">
  >;
}

const ProfileCard = ({ profileName, setTimeCategory }: ProfileCardProps) => {
  return (
    <div>
      <header>
        <small>Report for</small>
        <p>{profileName}</p>
      </header>
      <ul>
        <li>
          <button
            onClick={() => {
              setTimeCategory("daily");
            }}
          >
            Daily
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setTimeCategory("weekly");
            }}
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setTimeCategory("monthly");
            }}
          >
            Monthly
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
