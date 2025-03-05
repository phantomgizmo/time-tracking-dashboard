import React, { useContext } from "react";

import Activity from "@/types/activity";

import ActivityCard from "@/components/ui/ActivityCard";

import { timeCategoryContext } from "@/providers/TimeCategory";

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
  const timeCategory = useContext(timeCategoryContext);

  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>Error</div>;
  if (!activities) return null;

  return (
    <div className={className}>
      {activities.map((activity) => (
        <ActivityCard activity={activity} timeCategory={timeCategory} />
      ))}
    </div>
  );
};

export default Activities;
