import React from "react";

import ProfileCard from "@/components/ui/ProfileCard";
import ActivityContainer from "@/components/container/ActivityContainer";

const TimeTrackingDashboard = () => {
  return (
    <div className="grid">
      <ProfileCard profileName="Jeremy Robson" />
      <ActivityContainer />
    </div>
  );
};

export default TimeTrackingDashboard;
