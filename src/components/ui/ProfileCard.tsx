import React, { useCallback, useEffect, useRef, useState } from "react";

import imageJeremy from "@/assets/image-jeremy.png";

interface ProfileCardProps {
  profileName: string;
  setTimeCategory?: React.Dispatch<
    React.SetStateAction<"daily" | "weekly" | "monthly">
  >;
}

const ProfileCard = ({ profileName, setTimeCategory }: ProfileCardProps) => {
  const activeButton = useRef<HTMLButtonElement | null>(null);
  const [activeTimeCategory, setActiveTimeCategory] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");

  // const setTimeCategoryCallback = useCallback(
  //   (timeCategory: "daily" | "weekly" | "monthly") => {
  //     setTimeCategory(timeCategory);
  //   },
  //   [setTimeCategory]
  // );

  // const deactivateButton = (button: HTMLButtonElement | null) => {
  //   button?.removeAttribute("disabled");
  //   button?.classList.remove("text-white");
  //   button?.classList.toggle("cursor-pointer");
  // };

  // const activateButton = useCallback(
  //   (button: HTMLButtonElement) => {
  //     const timeCategory = button.getAttribute("data-time-category") as
  //       | "daily"
  //       | "weekly"
  //       | "monthly";
  //     setTimeCategoryCallback(timeCategory);
  //     button.toggleAttribute("disabled");
  //     button.classList.toggle("text-white");
  //     button.classList.remove("cursor-pointer");
  //     activeButton.current = button;
  //   },
  //   [setTimeCategoryCallback]
  // );

  // const toggleActiveButton = useCallback((button: HTMLButtonElement) => {
  //   deactivateButton(activeButton.current);
  //   activeButton.current = button;
  //   setActiveTimeCategory(
  //     activeButton.current.getAttribute("data-time-category") as
  //       | "daily"
  //       | "weekly"
  //       | "monthly"
  //   );
  // }, []);

  const handleCategoryClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonClicked = e.target as HTMLButtonElement;
    console.log(buttonClicked);
    // toggleActiveButton(buttonClicked);
  };

  // // Toggle active button each time activeTimeCategory changed
  // useEffect(() => {
  //   activateButton(activeButton.current as HTMLButtonElement);
  // }, [activeTimeCategory, activateButton]);

  // Set initial value for active time category
  useEffect(() => {
    // activateButton(activeButton.current as HTMLButtonElement);
    // if (activeButton.current) {
    //   console.log(activeButton.current);
    // }
    console.log("LOL");
  }, []);

  // useEffect(() => {
  //   console.log("RENDERED");
  //   // console.log(activeButton);
  // });

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
            ref={"daily" === activeTimeCategory ? activeButton : null}
            className="hover:text-white cursor-pointer active:text-white"
            onClick={handleCategoryClick}
            data-time-category="daily"
          >
            Daily
          </button>
        </li>
        <li>
          <button
            ref={"weekly" === activeTimeCategory ? activeButton : null}
            className="hover:text-white cursor-pointer active:text-white"
            onClick={handleCategoryClick}
            data-time-category="weekly"
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            ref={"monthly" === activeTimeCategory ? activeButton : null}
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
