import React from "react";
import { useNavigate } from "react-router-dom";

export default function ActiveWorkOrders() {
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm border-0 p-3 h-100 dashboard-card">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-semibold mb-0">Active Work Orders</h6>
        <span
          className="text-primary small fw-semibold cursor-pointer"
    onClick={() => navigate("/sales/work-orders")}
        >
          View All →
        </span>
      </div>

      {/* CONTENT */}
      <div className="mb-3">
        <div className="d-flex justify-content-between small">
          <span>WO-0891</span>
          <span>68%</span>
        </div>
        
      </div>

    </div>
  );
}