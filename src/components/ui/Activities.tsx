import { useContext } from 'react';

import Activity from '@/types/activity';

import ActivityCard from '@/components/ui/ActivityCard';

import { timeCategoryContext } from '@/providers/TimeCategory/context';

interface ActivitiesProps {
  className?: string;
  activities: Activity[];
  loading: boolean;
  error: boolean;
}

const Activities = ({ activities, loading, error }: ActivitiesProps) => {
  const timeCategory = useContext(timeCategoryContext);

  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error) return <div>Error</div>;
  if (!activities) return null;

  return (
    <>
      {activities.map((activity, i) => (
        <ActivityCard key={i} activity={activity} timeCategory={timeCategory} />
      ))}
    </>
  );
};

export default Activities;
