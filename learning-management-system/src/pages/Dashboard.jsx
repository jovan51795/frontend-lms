import React, { useState } from "react";

import { getUserInfo } from "../services/userInfo";
import AdminDashboard from "../components/admin/AdminDashboard";
import StudentDashboard from "../components/student/StudentDashboard";

const Dashboard = () => {
  const [userInfo] = useState(getUserInfo);
  return (
    <>
      {userInfo.object.type === "admin" ? (
        <AdminDashboard />
      ) : (
        <StudentDashboard />
      )}
    </>
  );
};

export default Dashboard;
