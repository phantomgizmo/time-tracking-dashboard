import React from "react";

import Activity from "@/types/activity";

import iconEllipsis from "@/assets/icon-ellipsis.svg";

interface ActivityCardProps {
  activity: Activity;
  timeCategory: "daily" | "weekly" | "monthly";
}

const ActivityCard = ({ activity, timeCategory }: ActivityCardProps) => {
  return (
    <div>
      <section>
        <h1>{activity.title}</h1>
        <button>
          <img src={iconEllipsis} alt="" />
        </button>
      </section>
      <section>
        <p>{activity.timeframes[timeCategory].current}hrs</p>
        <p>
          Last {timeCategory.charAt(0).toUpperCase() + timeCategory.slice(1)} -{" "}
          {activity.timeframes[timeCategory].previous}hrs
        </p>
      </section>
    </div>
  );
};

export default ActivityCard;
