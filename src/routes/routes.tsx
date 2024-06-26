import { Navigate, Outlet } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { FormPage } from "../pages/FormPage";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";
import { TeachersPage } from "../pages/TeachersPage";
import { TimeTablesPage } from "../pages/TimeTablesPage";

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
      { path: "/perfil", element: <ProfilePage /> },
      { path: "/perfil/add", element: <FormPage /> },
      { path: "/perfil/horarios", element: <TimeTablesPage /> },
      { path: "/perfil/profesores", element: <TeachersPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];
