import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaUserPlus,
  FaCog,
  FaFileAlt,
  FaClipboardList,
} from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  
  const navigate = useNavigate();

  const productionData = {
  labels: ["Mon 04-Mar", "Tue 05-Mar", "Wed 06-Mar", "Thu 07-Mar", "Fri 08-Mar", "Sat 09-Mar", "Sun 10-Mar"],
  datasets: [
    {
      label: "Production",
      data: [3820, 4150, 4480, 3950, 4210, 2840, 1000],
      backgroundColor: "#4e73df",
      borderRadius: 8, 
      barThickness: 60, 
    },
  ],
};

  const productionOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: { display: false },

    tooltip: {
      enabled: true,
      displayColors: false,
      backgroundColor: "#ffffff", 
      titleColor: "#000000",      
      bodyColor: "#000000",       
      borderColor: "#ddd",        
      borderWidth: 1,
      padding: 10,
      callbacks: {
        // Title (Day + Date)
        title: function (context) {
          return context[0].label; 
        },

        // Main value (Pieces Produced)
        label: function (context) {
          return `Pieces Produced: ${context.raw}`;
        },
      },
    },
  },

  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 6000,
      ticks: { stepSize: 1500 },
    },
  },
};

  const activeWorkOrders = [
    { id: "WO-2024-0891", progress: "68%" },
    { id: "WO-2024-0895", progress: "22%" },
  ];
  const machineStatus = [
    { id: "DCM-01", status: "Running" },
    { id: "DCM-02", status: "Idle" },
    { id: "DCM-03", status: "Running" },
    { id: "DCM-04", status: "Alarm" },
  ];
  const openNCRs = [
    { id: "NCR-001", severity: "Major", desc: "Porosity defect in FG-005 Crankcase Cover" },
    { id: "NCR-003", severity: "Critical", desc: "Cold shut defect - FG-001 Gearbox Housing" },
    { id: "NCR-004", severity: "Major", desc: "Surface finish not as per Maruti spec" },
  ];
  const pendingApprovals = [
    { id: "PO-2024-1104", amount: "₹0.90L", requester: "Chem-Lube Tech." },
    { id: "PO-2024-1105", amount: "₹3.80L", requester: "Bharat Toolings" },
  ];

  const recentActivities = [
    { user: "🔵 Rajesh Kumar", action:"started WO-2024-0895", time: "10:42 AM" },
    { user: "🔵 Priya Sharma", action:"created NCR-004", time: "10:38 AM" },
    { user: "🔵 Amit Patel", action:"approved PO-2024-1103 (₹6,60,000)", time: "10:15 AM" },
    { user: "🔵 System", action:"DCM-04 temperature alarm triggered", time: "09:50 AM" },
    { user: "🔵 Sneha Mehta", action:"converted Quotation QT-0221 to SO-2024-0545", time: "09:30 AM" },
    { user: "🔵 Vikram Singh", action:"logged in", time: "09:00 AM" },
  ];

  // ====== INACTIVITY / AUTO LOGOUT ======
  const [setShowLogoutModal] = useState(false);
  const [inactive, setInactive] = useState(false);
  
  const logoutTime = 5 * 60 * 1000; // 1 min
  
  useEffect(() => {
    let timeout;
  
    const resetTimer = () => {
      clearTimeout(timeout);
      setInactive(false);
      timeout = setTimeout(() => setInactive(true), logoutTime);
    };
  
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
  
    resetTimer();
  
    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      clearTimeout(timeout);
    };
  }, [logoutTime]);

  const handleLogout = () => {
    setShowLogoutModal(false);
    alert("Logged out ✅");
    navigate("/"); 
  };


  return (
    <div style={{ marginLeft: "250px", paddingTop: "70px", minHeight: "100vh", overflowY: "auto" }}>
      <div className="p-3">
        <h3 className="fw-bold">Welcome back, Vikram Singh!</h3>
        <p>Here's what's happening with your operations today.</p>

        {/* ---------- Top Cards ---------- */}
        <div className="row g-3 mt-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card p-3 shadow-sm h-100">
              <h3>👥</h3>
              <p>Total Active Users</p>
              <h3>7</h3>
              <small>5 online now</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card p-3 shadow-sm h-100">
              <h3>⏱️</h3>
              <p>System Uptime</p>
              <h3>99.8%</h3>
              <small>Last 30 days</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card p-3 shadow-sm h-100">
              <h3>🛠️</h3>
              <p>Work Orders</p>
              <h3>42</h3>
              <small>6 active</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card p-3 shadow-sm h-100">
              <h3>📈</h3>
              <p>OEE</p>
              <h3>79.4%</h3>
              <small>Target: 85%</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card p-3 shadow-sm h-100">
              <h3>⚠️</h3>
              <p>Open NCRs</p>
              <h3>4</h3>
              <small>2 critical</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card p-3 shadow-sm h-100">
              <h3>🛒</h3>
              <p>Pending PO Approvals</p>
              <h3>3</h3>
              <small>₹5.1L total</small>
            </div>
          </div>
        </div>

        {/* ---------- Production Trend + Recent Activity ---------- */}
<div className="row g-3 mt-4">

  {/* Production Trend */}
  <div className="col-lg-8 col-md-12">
    <div className="card shadow-sm h-100">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center px-3 pt-3">
        <h6 className="mb-0 fw-semibold">
          Production Trend (Last 7 Days)
        </h6>

         {/* Button to navigate to AnalyticsOEE */}
      <button
        className="btn btn-sm text-primary fw-medium border-0 bg-transparent"
        onClick={() => navigate("/analyticsoee")}
      >
        View Details →
      </button>
      </div>

      <div className="card-body pt-2">
         <div style={{ height: "300px" }}>
           <Bar data={productionData} options={productionOptions} />
         </div>
       </div>
    </div>
  </div>


          {/* Recent Activity */}
          <div className="col-lg-4 col-md-12">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Recent Activity</h5>
                <ul className="list-group list-group-flush">
                  {recentActivities.map((item, index) => (
                    <li
  key={index}
  className="list-group-item py-2"
  style={{ fontSize: "0.8rem" }} // smaller text
>
  <div className="d-flex flex-column">

    {/* User + Action */}
    <div>
      <span className="fw-bold">{item.user}</span>{" "}
      <span>{item.action}</span>
    </div>

    {/* Time next line */}
    <small className="text-muted mt-1">
      {item.time}
    </small>

  </div>
</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>



        <div className="row g-3 mt-4">

  {/* Active Work Orders */}
  <div className="col-12 col-md-6 col-lg-3">
    <div className="card p-2 shadow-sm h-100" style={{ minHeight: "160px" }}>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
          Active Work Orders
        </h6>
        <span className="text-primary" style={{ cursor: "pointer", fontSize: "0.8rem" }}>
          View All
        </span>
      </div>

      <div>
        {activeWorkOrders.map((wo, idx) => (
          <div key={idx} className="d-flex justify-content-between mb-1" style={{ fontSize: "0.7rem" }}>
            <span>{wo.id}</span>
            <span className="text-muted">{wo.progress}</span>
          </div>
        ))}
      </div>

    </div>
  </div>

  {/* Machine Status */}
  <div className="col-12 col-md-6 col-lg-3">
    <div className="card p-2 shadow-sm h-100" style={{ minHeight: "160px" }}>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
          Machine Status
        </h6>
        <span className="text-primary" style={{ cursor: "pointer", fontSize: "0.8rem" }}>
          View All
        </span>
      </div>

      <div>
        {machineStatus.map((m, idx) => (
          <div
            key={idx}
            className="d-flex justify-content-between align-items-center mb-1"
            style={{ fontSize: "0.7rem" }}
          >
            <span>{m.id}</span>

            <span
              className="px-2 py-0 rounded"
              style={{
                backgroundColor:
                  m.status === "Running"
                    ? "#d1fae5"
                    : m.status === "Idle"
                    ? "#e5e7eb"
                    : "#fee2e2",
                color:
                  m.status === "Running"
                    ? "#065f46"
                    : m.status === "Idle"
                    ? "#374151"
                    : "#991b1b",
                fontSize: "0.68rem",
                fontWeight: "500"
              }}
            >
              {m.status}
            </span>
          </div>
        ))}
      </div>

    </div>
  </div>

 {/* Open NCRs */}
<div className="col-12 col-md-6 col-lg-3">
  <div className="card p-2 shadow-sm h-100" style={{ minHeight: "160px" }}>

    <div className="d-flex justify-content-between align-items-center mb-2">
      <h6 className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
        Open NCRs
      </h6>
      <span className="text-primary" style={{ cursor: "pointer", fontSize: "0.8rem" }}>
        View All
      </span>
    </div>

    {openNCRs.map((ncr, idx) => (
      <div key={idx} className="mb-2" style={{ fontSize: "0.7rem" }}>
        
        <div className="d-flex justify-content-between align-items-center">
          <span>{ncr.id}</span>

          <span
            className="px-2 py-0 rounded"
            style={{
              backgroundColor:
                ncr.severity === "Critical" ? "#fee2e2" : "#fff7ed", 
              color:
                ncr.severity === "Critical" ? "#991b1b" : "#9a3412", 
              fontSize: "0.65rem",
              fontWeight: "500"
            }}
          >
            {ncr.severity}
          </span>
        </div>

        <div className="text-muted" style={{ fontSize: "0.68rem" }}>
          {ncr.desc}
        </div>
      </div>
    ))}

  </div>
</div>


  {/* Pending Approvals */}
  <div className="col-12 col-md-6 col-lg-3">
    <div className="card p-2 shadow-sm h-100" style={{ minHeight: "160px" }}>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="fw-semibold mb-0" style={{ fontSize: "0.9rem" }}>
          Pending Approvals
        </h6>
        <span className="text-primary" style={{ cursor: "pointer", fontSize: "0.8rem" }}>
          View All
        </span>
      </div>

      {pendingApprovals.map((po, idx) => (
        <div key={idx} className="d-flex justify-content-between mb-2" style={{ fontSize: "0.7rem" }}>
          <div>
            <div>{po.id}</div>
            <div className="text-muted" style={{ fontSize: "0.68rem" }}>
              {po.requester}
            </div>
          </div>

          <div className="fw-semibold">{po.amount}</div>
        </div>
      ))}

    </div>
  </div>

</div>
    

           {/* ---------- Quick Actions ---------- */}
<div className="row g-3 mt-5 mx-1">
  <div className="col-12">
    <div className="card shadow p-3 mx-auto" style={{ maxWidth: "1260px" }}>
      <h5 className="mb-3">Quick Actions</h5>

      <div className="row g-3">

{[
  { title: "Create User", icon: <FaUserPlus /> },
  { title: "System Settings", icon: <FaCog />, click: () => navigate("/settings") },
  { title: "Generate Report", icon: <FaFileAlt /> },
  { title: "View Audit Logs", icon: <FaClipboardList /> },
].map((item, index) => (
  <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
    <div
  className="text-center d-flex flex-column align-items-center justify-content-center"
  style={{
    height: "120px",
    cursor: "pointer",
    transition: "0.3s",
    border: "1.5px dashed #cbd5e1",   
    borderRadius: "8px"
  }}
  onClick={item.click}
  onMouseEnter={(e) => {
    e.currentTarget.style.border = "1.8px dashed #0d6efd"; 
    e.currentTarget.classList.add("shadow");
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.border = "1.8px dashed #cbd5e1";
    e.currentTarget.classList.remove("shadow");
  }}
>
      {/* ICON */}
      <div style={{ fontSize: "24px", marginBottom: "8px" }}>
        {item.icon}
      </div>

      {/* TITLE */}
      <h6 className="mb-0">{item.title}</h6>
    </div>
  </div>
))}

    </div>  
  </div>  
  </div>  
  </div>  

  {/* ====== INACTIVITY CARD ====== */}
      {inactive && (
  <Modal show={inactive} centered backdrop="static" keyboard={false}>
    
      <Modal.Header closeButton>
      <Modal.Title>Session Inactive</Modal.Title>
    </Modal.Header>

    <Modal.Body className="text-center">
      <h5>You're still logged in</h5>
      <p>Your session is inactive.</p>

      <div className="d-flex justify-content-center mt-3 gap-2">
        
        <button
          className="btn"
          style={{
            backgroundColor: "#bec8d1",
            color: "#252525",
            width: "150px"
          }}
          onClick={() => setInactive(false)}
        >
          Stay Logged In
        </button>

        <button
          className="btn btn-danger"
          style={{ width: "150px" }}
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </Modal.Body>

  </Modal>
)}

      </div>
    </div>  

  );
}