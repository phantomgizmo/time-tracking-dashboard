import { createContext } from "react";


export const timeCategoryContext = createContext<
  "daily" | "weekly" | "monthly"
>("daily");