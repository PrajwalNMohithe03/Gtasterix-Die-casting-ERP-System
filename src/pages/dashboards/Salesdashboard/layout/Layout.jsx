import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SidebarTemp";
import Topbar from "./Topbar";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="d-flex layout-wrapper">

      {/* SIDEBAR */}
      <Sidebar collapsed={collapsed} />

      {/* RIGHT SIDE */}
      <div className="main-content">

        <Topbar toggleSidebar={toggleSidebar} />

        <div className="page-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}