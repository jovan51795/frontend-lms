import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const StudentDashboard = React.lazy(() =>
  import("./pages/student/StudentDashboard")
);
const AddStudent = React.lazy(() => import("./pages/admin/AddStudent"));
const StudentList = React.lazy(() => import("./pages/admin/StudentList"));
const AdminDashboard = React.lazy(() => import("./pages/admin/AdminDashboard"));
const AdminProfile = React.lazy(() => import("./pages/admin/AdminProfile"));
const AddSubject = React.lazy(() => import("./pages/admin/AddSubject"));

export const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  {
    path: "/dashboard/student",
    name: "Student-Dashboard",
    element: StudentDashboard,
  },
  { path: "admin/student/list", name: "StudentList", element: StudentList },
  { path: "admin/student/add", name: "AddStudent", element: AddStudent },
  {
    path: "/dashboard/admin",
    name: "Admin-Dashboard",
    element: AdminDashboard,
  },
  {
    path: "/admin/profile",
    name: "Admin-Profile",
    element: AdminProfile,
  },
  {
    path: "/admin/subject/add",
    name: "Add-Subject",
    element: AddSubject,
  },
];
