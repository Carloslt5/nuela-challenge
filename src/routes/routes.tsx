import { Navigate, Outlet } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { FormPage } from "../pages/FormPage";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/profile/add", element: <FormPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];