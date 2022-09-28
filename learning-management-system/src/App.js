import React, { Suspense } from "react";
import { Routes, Route, Navigate, useLocation, Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Page404 from "./pages/page404/Page404";
import { routes } from "./routes";

const Login = React.lazy(() => import("./pages/Login"));

function App() {
  const location = useLocation();
  const hideSidebarAndHeader =
    location.pathname !== "/login" && location.pathname !== "/notfound";
  return (
    <>
      <Suspense>
        {hideSidebarAndHeader ? (
          <>
            <Header />
            <Sidebar />
          </>
        ) : null}

        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              name={route.name}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to="/notfound" />} />
          <Route path="/notfound" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
