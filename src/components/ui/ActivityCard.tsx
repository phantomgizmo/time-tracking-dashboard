import React from "react";

import iconEllipsis from "@/assets/icon-ellipsis.svg";

interface ActivityCardProps {
  activityName: string;
  currentTime: number;
  previousTime: number;
  timeCategory: "day" | "week" | "month";
}

const ActivityCard = ({
  activityName,
  currentTime,
  previousTime,
  timeCategory,
}: ActivityCardProps) => {
  return (
    <div>
      <section>
        <h1>{activityName}</h1>
        <button>
          <img src={iconEllipsis} alt="" />
        </button>
      </section>
      <section>
        <p>{currentTime}hrs</p>
        <p>
          Last {timeCategory.charAt(0).toUpperCase() + timeCategory.slice(1)} -{" "}
          {previousTime}hrs
        </p>
      </section>
    </div>
  );
};

export default ActivityCard;
