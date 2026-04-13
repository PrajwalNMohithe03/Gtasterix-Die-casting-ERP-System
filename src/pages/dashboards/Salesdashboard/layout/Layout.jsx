import { useState } from "react";
import Sidebar from "./SidebarTemp";
import Topbar from "./Topbar";
import AppRoutes from "../../../../routes/Approutes"; // adjust path

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="d-flex layout-wrapper">

      <Sidebar collapsed={collapsed} />
<div
  className="main-content"
  style={{
    width: collapsed ? "calc(100% - 80px)" : "calc(100% - 240px)"
  }}
>
        <Topbar toggleSidebar={toggleSidebar} />

        <div className="page-content">
          <AppRoutes />   {/* ✅ IMPORTANT */}
        </div>
      </div>

    </div>
  );
}