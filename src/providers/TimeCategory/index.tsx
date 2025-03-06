import React from "react";

import { timeCategoryContext } from "./context";

const TimeCategoryProvider = ({
  value,
  children,
}: {
  value: "daily" | "weekly" | "monthly";
  children: React.ReactNode;
}) => {
  return (
    <timeCategoryContext.Provider value={value}>
      {children}
    </timeCategoryContext.Provider>
  );
};

export default TimeCategoryProvider;
