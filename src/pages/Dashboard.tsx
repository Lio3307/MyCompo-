import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const location = useLocation();
  const pathName: string = location.pathname.split("/")[2] || "home";

  return (
    <Sidebar getPath={pathName}>
      <Outlet />
    </Sidebar>
  );
};

export default Dashboard;
