import Activity from "@/types/activity";

import iconEllipsis from "@/assets/icon-ellipsis.svg";

interface ActivityCardProps {
  activity: Activity;
  timeCategory: "daily" | "weekly" | "monthly";
}

const ActivityCard = ({ activity, timeCategory }: ActivityCardProps) => {
  const bgVariants = {
    Work: "bg-work",
    Play: "bg-play",
    Study: "bg-study",
    Exercise: "bg-exercise",
    Social: "bg-social",
    "Self Care": "bg-self-care",
  };

  const contentVariants = {
    Work: "before:content-(--icon-work)",
    Play: "before:content-(--icon-play)",
    Study: "before:content-(--icon-study)",
    Exercise: "before:content-(--icon-exercise)",
    Social: "before:content-(--icon-social)",
    "Self Care": "before:content-(--icon-self-care)",
  };

  return (
    <div
      className={`${contentVariants[activity.title]} before:top-[-1rem] before:right-4 before:z-[1] overflow-hidden before:absolute relative mx-auto w-[285px] flex flex-col justify-end rounded-xl pt-8 ${bgVariants[activity.title]}`}
    >
      <div className="relative z-[2] flex flex-col gap-1 bg-blue-700 rounded-xl px-4 py-6 text-white">
        <section className="flex justify-between">
          <h1 className="text-lg">{activity.title}</h1>
          <button className="cursor-pointer">
            <img src={iconEllipsis} alt="" />
          </button>
        </section>
        <section className="flex justify-between items-center">
          <p className="text-3xl font-thin">
            {activity.timeframes[timeCategory].current}hrs
          </p>
          <p className="text-xs">
            Last {timeCategory.charAt(0).toUpperCase() + timeCategory.slice(1)}{" "}
            - {activity.timeframes[timeCategory].previous}hrs
          </p>
        </section>
      </div>
    </div>
  );
};

export default ActivityCard;
