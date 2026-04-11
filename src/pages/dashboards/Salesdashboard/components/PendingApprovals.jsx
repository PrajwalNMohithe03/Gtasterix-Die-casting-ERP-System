import React from "react";
import { useNavigate } from "react-router-dom";

export default function PendingApprovals() {
  const navigate = useNavigate(); // ✅ correct
  return (
    <div className="card shadow-sm border-0 p-3 h-100 dashboard-card">
      <h6 className="fw-semibold mb-3">Pending Approvals</h6>
 <span
          className="text-primary small fw-semibold cursor-pointer"
          onClick={() => navigate("/sales/approvals")}
        >
          View All →
        </span>
      <div className="d-flex justify-content-between mb-2">
        <span>PO-1104</span>
        <span>₹0.9L</span>
      </div>

      <div className="d-flex justify-content-between">
        <span>PO-1105</span>
        <span>₹3.8L</span>
      </div>
    </div>
  );
}