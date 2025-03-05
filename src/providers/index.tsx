import { BrowserRouter } from "react-router-dom";

import React from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProvider;
