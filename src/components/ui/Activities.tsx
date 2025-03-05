import React from "react";

import Activity from "@/types/activity";

import ActivityCard from "@/components/ui/ActivityCard";

interface ActivitiesProps {
  className?: string;
  activities: Activity[];
  loading: boolean;
  error: boolean;
}

const Activities = ({
  className,
  activities,
  loading,
  error,
}: ActivitiesProps) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>Error</div>;
  if (!activities) return null;

  return (
    <div className={className}>
      {activities.map((activity) => (
        <ActivityCard
          activityName={activity.activityName}
          timeCategory={activity.timeCategory}
          currentTime={activity.currentTime}
          previousTime={activity.previousTime}
        />
      ))}
    </div>
  );
};

export default Activities;
