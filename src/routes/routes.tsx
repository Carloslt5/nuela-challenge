import { Navigate, Outlet } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return <Outlet />;
};

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];
