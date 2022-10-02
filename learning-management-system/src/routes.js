import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const StudentDashboard = React.lazy(() =>
  import("./student-module/pages/StudentDashboard")
);
const StudentList = React.lazy(() =>
  import("./student-module/pages/StudentList")
);
const AddStudent = React.lazy(() =>
  import("./student-module/pages/AddStudent")
);

export const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  {
    path: "/dashboard/student",
    name: "Student-Dashboard",
    element: StudentDashboard,
  },
  { path: "/student/list", name: "StudentList", element: StudentList },
  { path: "/student/add", name: "AddStudent", element: AddStudent },
];
