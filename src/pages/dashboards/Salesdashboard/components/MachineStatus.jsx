// MachineStatus.js

import { useNavigate } from "react-router-dom";

export default function MachineStatus() {
  const navigate = useNavigate(); // ✅ correct

  return (
    <div className="card p-3 shadow-sm border-0 h-100 dashboard-card">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-semibold mb-0">Machine Status</h6>
        <span
          className="text-primary small fw-semibold cursor-pointer"
          onClick={() => navigate("/sales/machine-status")}
        >
          View All →
        </span>
      </div>

      {/* CONTENT */}
      <div className="d-flex justify-content-between mb-2">
        <span>DCM-01</span>
        <span className="badge bg-success">Running</span>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span>DCM-02</span>
        <span className="badge bg-secondary">Idle</span>
      </div>

      <div className="d-flex justify-content-between">
        <span>DCM-04</span>
        <span className="badge bg-danger">Alarm</span>
      </div>

    </div>
  );
}