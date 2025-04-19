import { useState } from 'react';

import ActivityContainer from '@/components/container/ActivityContainer';
import ProfileCard from '@/components/ui/ProfileCard';
import TimeCategoryProvider from '@/providers/TimeCategory';

const TimeTrackingDashboard = () => {
  const [timeCategory, setTimeCategory] = useState<
    'daily' | 'weekly' | 'monthly'
  >('daily');

  return (
    <div className="m-auto grid max-w-fit content-center gap-4 lg:grid-cols-4">
      <ProfileCard
        className="row-span-2"
        timeCategory={timeCategory}
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
