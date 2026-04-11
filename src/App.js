import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./pages/dashboards/Salesdashboard/layout/Layout";

// dashboards
import Admin from "./pages/dashboards/Admindashboard/Admin";
import Production from "./pages/dashboards/Productiondashboard/Production";
import Quality from "./pages/dashboards/QualityDashboard/Quality";
import Procurement from "./pages/dashboards/Procurementdashboard/Procurement";
import SalesDashboard from "./pages/dashboards/Salesdashboard/components/SalesDashboard";
import AppRoutes from "./routes/Approutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* 🔥 EVERYTHING INSIDE LAYOUT */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* DASHBOARDS */}
          <Route path="admin" element={<Admin />} />
          <Route path="production" element={<Production />} />
          <Route path="quality" element={<Quality />} />
          <Route path="procurement" element={<Procurement />} />

          {/* SALES */}
          
         <Route path="sales/*" element={<AppRoutes />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;