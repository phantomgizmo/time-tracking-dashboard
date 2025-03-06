import React, { useEffect, useRef, useState } from "react";

import imageJeremy from "@/assets/image-jeremy.png";

interface ProfileCardProps {
  profileName: string;
  setTimeCategory: React.Dispatch<
    React.SetStateAction<"daily" | "weekly" | "monthly">
  >;
}

const ProfileCard = ({ profileName, setTimeCategory }: ProfileCardProps) => {
  const defaultActiveButton = useRef<HTMLButtonElement | null>(null);
  const [activeButton, setActiveButton] = useState<HTMLButtonElement | null>(
    defaultActiveButton.current
  );

  const deactivateButton = (button: HTMLButtonElement | null) => {
    button?.removeAttribute("disabled");
    button?.classList.remove("active");
  };

  const activateButton = (button: HTMLButtonElement) => {
    const timeCategory = button.getAttribute("data-time-category") as
      | "daily"
      | "weekly"
      | "monthly";
    setTimeCategory(timeCategory);
  };

  const toggleActiveButton = (button: HTMLButtonElement) => {
    deactivateButton(activeButton);
    activateButton(button);
    setActiveButton(button);
  };

  const handleCategoryClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonClicked = e.target as HTMLButtonElement;
    toggleActiveButton(buttonClicked);
  };

  useEffect(() => {
    console.log("RENDERED");
  });

  return (
    <div className="w-[285px] mx-auto flex flex-col font-[rubik] bg-blue-700 rounded-xl">
      <header className="flex items-center gap-4 bg-blue rounded-xl py-4 px-6">
        <div className="rounded-full bg-white p-1 ">
          <img
            className="size-14"
            src={imageJeremy}
            alt="Image of jeremy smiling :D"
          />
        </div>
        <div className="flex flex-col items-start">
          <small className="text-stone-400">Report for</small>
          <p className="text-stone-100 text-xl font-thin">{profileName}</p>
        </div>
      </header>
      <ul className="flex justify-between py-4 px-6 text-blue-600">
        <li>
          <button
            ref={defaultActiveButton}
            className="hover:text-white cursor-pointer active:text-white active"
            onClick={handleCategoryClick}
            data-time-category="daily"
            disabled
          >
            Daily
          </button>
        </li>
        <li>
          <button
            className="hover:text-white cursor-pointer active:text-white"
            onClick={handleCategoryClick}
            data-time-category="weekly"
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            className="hover:text-white cursor-pointer active:text-white"
            onClick={handleCategoryClick}
            data-time-category="monthly"
          >
            Monthly
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
