import React, { useState } from "react";

import ProfileCard from "@/components/ui/ProfileCard";
import ActivityContainer from "@/components/container/ActivityContainer";
import TimeCategoryProvider from "@/providers/TimeCategory";

const TimeTrackingDashboard = () => {
  const [timeCategory, setTimeCategory] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");

  return (
    <div className="grid">
      <ProfileCard
        setTimeCategory={setTimeCategory}
        profileName="Jeremy Robson"
      />
      <TimeCategoryProvider value={timeCategory}>
        <ActivityContainer />
      </TimeCategoryProvider>
    </div>
  );
};

export default TimeTrackingDashboard;
