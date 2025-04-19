import React from 'react';
import { cn } from '@/utils/utils';

import imageJeremy from '@/assets/image-jeremy.png';

interface ProfileCardProps {
  className?: string;
  profileName: string;
  timeCategory: 'daily' | 'weekly' | 'monthly';
  setTimeCategory: React.Dispatch<
    React.SetStateAction<'daily' | 'weekly' | 'monthly'>
  >;
}

const ProfileCard = ({
  className,
  profileName,
  timeCategory,
  setTimeCategory
}: ProfileCardProps) => {
  return (
    <div
      className={cn(
        'mx-auto flex w-[285px] flex-col rounded-xl bg-blue-700 font-[rubik] lg:max-w-[205px]',
        className
      )}
    >
      <header className="bg-blue flex items-center gap-4 rounded-xl px-6 py-4 lg:flex-col lg:items-start lg:gap-6">
        <div className="rounded-full bg-white p-1">
          <img
            className="size-14"
            src={imageJeremy}
            alt="Image of jeremy smiling :D"
          />
        </div>
        <div className="flex flex-col items-start lg:mb-12">
          <small className="text-stone-400">Report for</small>
          <p className="text-xl font-thin text-stone-100 lg:text-start lg:text-4xl">
            {profileName}
          </p>
        </div>
      </header>
      <ul className="flex justify-between px-6 py-4 text-blue-600 lg:flex-col lg:items-start lg:gap-3">
        <li>
          <button
            className={cn(
              'cursor-pointer hover:text-white',
              timeCategory === 'daily' && 'text-white'
            )}
            onClick={() => setTimeCategory('daily')}
          >
            Daily
          </button>
        </li>
        <li>
          <button
            className={cn(
              'cursor-pointer hover:text-white',
              timeCategory === 'weekly' && 'text-white'
            )}
            onClick={() => setTimeCategory('weekly')}
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            className={cn(
              'cursor-pointer hover:text-white',
              timeCategory === 'monthly' && 'text-white'
            )}
            onClick={() => setTimeCategory('monthly')}
          >
            Monthly
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
