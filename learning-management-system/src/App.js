import React, { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Loading from "./pages/loading/Loading";
import Page404 from "./pages/page404/Page404";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { getUserInfo } from "./services/userInfo";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const userInFo = getUserInfo();

  useEffect(() => {
    if (
      (location.pathname === "/register" || location.pathname === "/login") &&
      userInFo &&
      userInFo.status === 1
    ) {
      navigate("/dashboard");
    } else if (!userInFo || (userInFo && userInFo.status === 0)) {
      navigate("/login");
    }
  }, [userInFo]);

  const hideSidebarAndHeader =
    location.pathname !== "/login" &&
    location.pathname !== "/notfound" &&
    location.pathname !== "/register" &&
    location.pathname !== "/home";
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        {hideSidebarAndHeader ? (
          <>
            <Header />
            <Sidebar />
          </>
        ) : null}

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
