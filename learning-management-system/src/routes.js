import React from "react";


const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const StudentDashboard = React.lazy(()=> import("./student-module/pages/StudentDashboard"))

export const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/dashboard/student", name:"Student-Dashboard", element: StudentDashboard}
];
