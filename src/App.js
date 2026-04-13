import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./pages/dashboards/Salesdashboard/layout/Layout";

import Admin from "./pages/dashboards/Admindashboard/Admin";
import Production from "./pages/dashboards/Productiondashboard/Production";
import Quality from "./pages/dashboards/QualityDashboard/Quality";
import Procurement from "./pages/dashboards/Procurementdashboard/Procurement";

function App() {
  return (
    <BrowserRouter>
  <Routes>

    {/* LOGIN */}
    <Route path="/" element={<Login />} />

    {/* DASHBOARDS WITHOUT LAYOUT */}
    <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
    <Route path="/production" element={<ProtectedRoute><Production /></ProtectedRoute>} />
    <Route path="/quality" element={<ProtectedRoute><Quality /></ProtectedRoute>} />
    <Route path="/procurement" element={<ProtectedRoute><Procurement /></ProtectedRoute>} />

    {/* ✅ ONLY SALES USES LAYOUT */}
    <Route
      path="/sales/*"
      element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }
    >
    
    </Route>

  </Routes>
</BrowserRouter>
  )
}

export default App;