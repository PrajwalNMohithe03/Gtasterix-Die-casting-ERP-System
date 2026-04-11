import { Routes, Route } from "react-router-dom";

import SalesDashboard from "../pages/dashboards/Salesdashboard/components/SalesDashboard";
import WorkOrdersPage from "../pages/dashboards/Salesdashboard/pages/WorkOrdersPage";
import MachineMonitoring from "../pages/dashboards/Salesdashboard/pages/MachineMonitoring";
import NCRPage from "../pages/dashboards/Salesdashboard/pages/NcrPage";
import ApprovalsPage from "../pages/dashboards/Salesdashboard/pages/ApprovalsPage";

import OrdersPage from "../pages/dashboards/Salesdashboard/salesorder/SalesOrder";
import AnalyticsPage from "../pages/dashboards/Salesdashboard/analytics/Analytics";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<SalesDashboard />} />
      <Route path="work-orders" element={<WorkOrdersPage />} />
      <Route path="machine-status" element={<MachineMonitoring />} />
      <Route path="ncr" element={<NCRPage />} />
      <Route path="approvals" element={<ApprovalsPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="analytics" element={<AnalyticsPage />} />
    </Routes>
  );
}