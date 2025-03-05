import { useRoutes } from "react-router-dom";

import TimeTrackingDashboard from "@/pages/dashboard";

export default function AppRouter() {
  const publicRoutes = [
    {
      path: "/",
      element: <TimeTrackingDashboard />,
    },
  ];
  const routes = useRoutes([...publicRoutes]);

  return routes;
}
