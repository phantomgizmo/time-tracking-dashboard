import { useState } from "react";

import ActivityContainer from "@/components/container/ActivityContainer";
import ProfileCard from "@/components/ui/ProfileCard";
import TimeCategoryProvider from "@/providers/TimeCategory";

const TimeTrackingDashboard = () => {
  const [timeCategory, setTimeCategory] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");

  return (
    <div className="grid gap-4">
      <ProfileCard
        // setTimeCategory={setTimeCategory}
        profileName="Jeremy Robson"
      />
      <TimeCategoryProvider value={timeCategory}>
        <ActivityContainer />
      </TimeCategoryProvider>
    </div>
  );
};

export default TimeTrackingDashboard;
