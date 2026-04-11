import { useState } from "react";
import ActiveWorkOrders from "./ActiveWorkOrders";
import MachineStatus from "./MachineStatus";
import OpenNCR from "./OpenNcr";
import PendingApprovals from "./PendingApprovals";
import "./dashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import "./dashboard.css";

const SalesDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const data = [
    { day: "Mon", value: 3800 },
    { day: "Tue", value: 4200 },
    { day: "Wed", value: 4500 },
    { day: "Thu", value: 3900 },
    { day: "Fri", value: 4300 },
    { day: "Sat", value: 2900 },
    { day: "Sun", value: 1200 }
  ];

  return (
    <div className="d-flex">



      {/* MAIN */}
      <div className="flex-grow-1 bg-light min-vh-100">

       

        <div className="container-fluid py-3 px-4" style={{ maxWidth: "1400px" }}>

          {/* HEADER */}
          <h3 className="fw-bold mb-1">Welcome back, Sneha Mehta!</h3>
          <p className="text-muted small mb-3">
            Here's what's happening with your operations today.
          </p>

          {/* KPI CARDS */}
          <div className="row g-4">

            <Card icon="bi-cart" color="success" title="Total Orders" value="23" sub="₹62.5 Lakh" />
            <Card icon="bi-clock" color="warning" title="Pending Quotations" value="5" sub="Awaiting response" />
            <Card icon="bi-check-circle" color="success" title="On-Time Delivery" value="94.2%" sub="This month" />
            <Card icon="bi-people" color="primary" title="Top Customer" value="Maruti Suzuki" sub="₹1.2 Cr YTD" />

          </div>

          {/* CHART + ACTIVITY */}
          <div className="row g-4 mt-2 align-items-stretch">

            {/* CHART */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0 p-3 h-100">

                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="fw-semibold mb-0">
                    Production Trend (Last 7 Days)
                  </h6>
                  <span className="text-primary small fw-semibold">
                    View Details ↗
                  </span>
                </div>

                <div style={{ height: 260 }} className="mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "10px",
                          border: "none",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }}
                      />
                      <Bar
                        dataKey="value"
                        fill="#3b82f6"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>

            {/* ACTIVITY */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 p-3 h-100">

                <h6 className="fw-semibold">Recent Activity</h6>

                <ul className="list-unstyled mt-3">

                  <li className="d-flex gap-2 mb-3">
                    <span className="bg-primary rounded-circle dot"></span>
                    <div>
                      <div className="fw-semibold small">Rajesh Kumar</div>
                      <div className="small text-muted">Started WO-2024-0895</div>
                      <div className="text-muted small">10:42 AM</div>
                    </div>
                  </li>

                  <li className="d-flex gap-2 mb-3">
                    <span className="bg-primary rounded-circle dot"></span>
                    <div>
                      <div className="fw-semibold small">Priya Sharma</div>
                      <div className="small text-muted">Created NCR-004</div>
                      <div className="text-muted small">10:38 AM</div>
                    </div>
                  </li>
                  
                  <li className="d-flex gap-2 mb-3">
                    <span className="bg-primary rounded-circle dot"></span>
                    <div>
                      <div className="fw-semibold small">Priya Sharma</div>
                      <div className="small text-muted">Created NCR-004</div>
                      <div className="text-muted small">10:38 AM</div>
                    </div>
                  </li>

                  <li className="d-flex gap-2">
                    <span className="bg-primary rounded-circle dot"></span>
                    <div>
                      <div className="fw-semibold small">Amit Patel</div>
                      <div className="small text-muted">Approved PO</div>
                      <div className="text-muted small">10:15 AM</div>
                    </div>
                  </li>

                </ul>

              </div>
            </div>

          </div>

          {/* BOTTOM */}
    <div className="row g-4 mt-3">

  <div className="col-lg-3 col-md-6">
    <ActiveWorkOrders />
  </div>

  <div className="col-lg-3 col-md-6">
    <MachineStatus />
  </div>

  <div className="col-lg-3 col-md-6">
    <OpenNCR />
  </div>

  <div className="col-lg-3 col-md-6">
    <PendingApprovals />
  </div>

</div>
          </div>

        </div>
      </div>
  );
}

/* KPI CARD */
function Card({ icon, color, title, value, sub }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card shadow-sm border-0 h-100 p-3 kpi-card">

        <div
          className={`bg-${color} bg-opacity-25 d-flex align-items-center justify-content-center rounded`}
          style={{ width: 40, height: 40 }}
        >
          <i className={`bi ${icon} text-${color}`}></i>
        </div>

        <p className="mt-3 text-muted small mb-1">{title}</p>
        <h5 className="fw-bold mb-0">{value}</h5>
        <small className="text-muted">{sub}</small>

      </div>
    </div>
  );
}
export default SalesDashboard;