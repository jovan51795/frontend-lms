import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const StudentDashboard = React.lazy(() =>
  import("./student-module/pages/StudentDashboard")
);
const StudentList = React.lazy(() =>
  import("./student-module/pages/StudentList")
);
const AdminDashboard = React.lazy(() =>
  import("./administrator-module/pages/AdminDashboard")
);

export const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  {
    path: "/dashboard/student",
    name: "Student-Dashboard",
    element: StudentDashboard,
  },
  { path: "/student/studentlist", name: "StudentList", element: StudentList },
  {
    path: "/dashboard/admin",
    name: "Admin-Dashboard",
    element: AdminDashboard,
  },
];
