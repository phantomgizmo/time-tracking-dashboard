import { createContext } from "react";

import React from "react";

export const timeCategoryContext = createContext<
  "daily" | "weekly" | "monthly"
>("daily");

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
