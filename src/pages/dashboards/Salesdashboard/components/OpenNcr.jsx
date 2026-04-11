import React from "react";
import { useNavigate } from "react-router-dom";

export default function OpenNCR() {
  const navigate = useNavigate(); // ✅ correct

  return (
    <div className="card shadow-sm border-0 p-3 h-100 dashboard-card">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-semibold mb-0">Open NCR</h6>
        <span
          className="text-primary small fw-semibold cursor-pointer"
          onClick={() => navigate("/sales/ncr")}
        >
          View All →
        </span>
      </div>

      {/* CONTENT */}
      <div className="d-flex justify-content-between mb-2">
        <span>NCR-001</span>
        <span className="badge bg-warning text-dark">Major</span>
      </div>

      <div className="d-flex justify-content-between">
        <span>NCR-003</span>
        <span className="badge bg-danger">Critical</span>
      </div>

    </div>
  );
}