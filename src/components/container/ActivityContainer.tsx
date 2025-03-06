import { useEffect, useState } from "react";

import Activity from "@/types/activity";

import Activities from "@/components/ui/Activities";

const dummyData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const getDummyData = () => {
  return new Promise<Activity[]>((resolve, reject) => {
    if (!dummyData) reject("No dummy data");
    resolve(dummyData as Activity[]);
  });
};

const ActivityContainer = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const getActivities = async () => {
    setLoading(true);

    getDummyData()
      .then((data: Activity[]) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <Activities
      className="flex flex-col gap-4"
      activities={activities}
      error={isError}
      loading={isLoading}
    />
  );
};

export default ActivityContainer;
