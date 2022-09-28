import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));

export const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
];
