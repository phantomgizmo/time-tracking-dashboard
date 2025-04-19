import Activity from '@/types/activity';

import iconEllipsis from '@/assets/icon-ellipsis.svg';

interface ActivityCardProps {
  activity: Activity;
  timeCategory: 'daily' | 'weekly' | 'monthly';
}

const ActivityCard = ({ activity, timeCategory }: ActivityCardProps) => {
  const bgVariants = {
    Work: 'bg-work',
    Play: 'bg-play',
    Study: 'bg-study',
    Exercise: 'bg-exercise',
    Social: 'bg-social',
    'Self Care': 'bg-self-care'
  };

  const contentVariants = {
    Work: 'before:content-(--icon-work)',
    Play: 'before:content-(--icon-play)',
    Study: 'before:content-(--icon-study)',
    Exercise: 'before:content-(--icon-exercise)',
    Social: 'before:content-(--icon-social)',
    'Self Care': 'before:content-(--icon-self-care)'
  };

  return (
    <div
      className={`${
        contentVariants[activity.title]
      } relative mx-auto flex w-[285px] flex-col justify-end overflow-hidden rounded-xl pt-8 before:absolute before:top-[-1rem] before:right-4 before:z-[1] lg:max-w-[205px] ${
        bgVariants[activity.title]
      }`}
    >
      <div className="relative z-[2] flex flex-col gap-1 rounded-xl bg-blue-700 px-4 py-6 text-white lg:gap-4">
        <section className="flex items-center justify-between">
          <h1 className="text-lg">{activity.title}</h1>
          <button className="size-3.5 cursor-pointer">
            <img src={iconEllipsis} alt="" />
          </button>
        </section>
        <section className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-2">
          <p className="text-3xl font-light lg:text-4xl lg:font-normal">
            {activity.timeframes[timeCategory].current}hrs
          </p>
          <p className="text-xs text-blue-500">
            Last {timeCategory.charAt(0).toUpperCase() + timeCategory.slice(1)}{' '}
            - {activity.timeframes[timeCategory].previous}hrs
          </p>
        </section>
      </div>
    </div>
  );
};

export default ActivityCard;
