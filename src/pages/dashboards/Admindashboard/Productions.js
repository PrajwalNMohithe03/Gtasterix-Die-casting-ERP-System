import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaFilter, FaPrint } from "react-icons/fa";

export default function Procurement() {

    const [showForm, setShowForm] = useState(false);
    const [mode, setMode] = useState("add");
    const [statusFilter, setStatusFilter] = useState("All Status");

    {/* COMMON STYLE */}
const cardStyle = {
  height: "100px",
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
};

const iconBox = (bg) => ({
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  backgroundColor: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});

  return (
    <div style={{ marginLeft: "250px", paddingTop: "80px" }}>
      <div className="container-fluid">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 className="fw-bold">Work Orders</h3>
          <p className="text-muted mb-0">
           Manage and track production work orders
          </p>
        </div>

        <button onClick={() =>{setMode("add"); setShowForm(true);} }
                className="btn btn-primary" style={{padding: "10px 35px", background: "#17039d", color: "#fff"}}>
                  + Create Work Orders
                </button>
      </div>

     {/* CARDS */}
<div className="row g-3 mb-4 mt-4">

  {/* Pending POs */}
  <div className="col-md-3">
    <div className="card p-3 shadow-sm border-1 rounded-4 d-flex flex-row align-items-center gap-3">

      {/* ICON */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: "50px",
          height: "60px",
          borderRadius: "12px",
          backgroundColor: "#e7f1ff"
        }}
      >
      </div>

      {/* TEXT */}
      <div>
        <div className="text-muted small">Total Work Orders</div>
        <h5 className="fw-bold mb-0">6</h5>
      </div>

    </div>
  </div>

{/* Awaiting Approval */}
<div className="col-md-3">
  <div className="card p-3 border-1 d-flex flex-row align-items-center gap-3" style={cardStyle}>

    <div>
      <div className="text-muted small">In Progress</div>
      <h5 className="fw-bold mb-0 text-warning">2</h5>
    </div>

  </div>
</div>

{/* Overdue */}
<div className="col-md-3">
  <div className="card p-3 border-1 d-flex flex-row align-items-center gap-3" style={cardStyle}>

    <div>
      <div className="text-muted small">Completed</div>
      <h5 className="fw-bold mb-0 text-success">1</h5>
    </div>

  </div>
</div>

{/* Rating */}
<div className="col-md-3">
  <div className="card p-3 border-1 d-flex flex-row align-items-center gap-3" style={cardStyle}>

    <div>
      <div className="text-muted small">On Hold</div>
      <h5 className="fw-bold mb-0 text-warning">1</h5>
    </div>

  </div>
</div>
</div>

{/* SEARCH + FILTER */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "nowrap",   
    overflowX: "auto",    
    padding: "12px",
    borderRadius: "14px",
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    paddingBottom:"30px"
  }}
>

  {/* SEARCH */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flex: "1",                
      minWidth: "250px",        
      border: "1px solid #d0d1d4",
      borderRadius: "10px",
      height: "40px",
      padding: "0 10px"
    }}
  >
    <FaSearch className="text-muted me-2" />
    <input
      type="text"
      placeholder="Search by PO ID or supplier..."
      style={{
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "14px"
      }}
    />
  </div>

  {/* STATUS */}
  <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  style={{
    width: "160px",
    minWidth: "160px",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid #d0d1d4",
    padding: "0 8px"
  }}
>
  <option>All Status</option>
  <option>Draft</option>
  <option>Pending Approval</option>
  <option>Sent To Supplier</option>
  <option>Partially Received</option>
  <option>Fully Received</option>
</select>

  {/* FILTER */}
  <button
    style={{
      height: "40px",
      minWidth: "140px",   
      borderRadius: "10px",
      border: "1px solid #d0d1d4",
      background: "#f9fafb",
      padding: "0 12px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      whiteSpace: "nowrap"
    }}
  >
    <FaFilter className="text-muted" />
    More Filters
  </button>

</div>

    {/* TABLE */}
<div
  className="card border-1 rounded-4"
  style={{
    overflowX: "auto",                 
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    paddingTop: "30px"
  }}
>
  <table
    className="table align-middle mb-0"
    style={{
      minWidth: "1150px",
      fontSize: "13px",                 
      borderCollapse: "separate",
      borderSpacing: "0 8px"               
    }}
  >

    {/* HEADER */}
    <thead>
      <tr
        className="text-muted"
        style={{
          background: "#f8f9fa",
          fontSize: "12px",
          fontWeight: "500"
        }}
      >
        <th>PO NUMBER</th>
        <th>SUPPLIER</th>
        <th>ITEM DESCRIPTION</th>
        <th>AMOUNT</th>
        <th>STATUS</th>
        <th style={{ width: "180px"}}>RECEIVING %</th>
        <th>EXPECTED DELIVERY</th>
        <th style={{ width: "150px" }}>ACTION</th>
      </tr>
    </thead>

    {/* BODY */}
    <tbody>

      {[
        {
          id: "PO-2024-1101",
          supplier: "Hindalco Industries",
          item: "10,000 kg Aluminum A380",
          amount: "₹18.50 L",
          status: "success",
          statusText: "Fully Received",
          percent: 100,
          date: "05-Mar-2026"
        },
        {
          id: "PO-2024-1102",
          supplier: "Sundaram Fasteners",
          item: "50,000 pcs Steel Insert",
          amount: "₹4.25 L",
          status: "primary",
          statusText: "Partially Received",
          percent: 62,
          date: "08-Mar-2026"
        },
        {
          id: "PO-2024-1103",
          supplier: "Vedanta Zinc",
          item: "3,000 kg ZA-8 Ingot",
          amount: "₹6.60 L",
          status: "secondary",
          statusText: "Sent to Supplier",
          percent: 0,
          date: "15-Mar-2026"
        }
      ].map((row, i) => (
        <tr
          key={i}
          style={{
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
          }}
        >
          <td className="p-3 text-primary fw-semibold">{row.id}</td>
          <td className="fw-semibold">{row.supplier}</td>
          <td className="text-muted">{row.item}</td>
          <td>{row.amount}</td>

          {/* STATUS */}
          <td>
            <span
  style={{
    background:
      row.status === "success"
        ? "#e6f4ea"
        : row.status === "primary"
        ? "#e7f1ff"
        : row.status === "secondary"
        ? "#f3e8ff"   
        : "#f1f3f5",

    color:
      row.status === "success"
        ? "#198754"
        : row.status === "primary"
        ? "#0d6efd"
        : row.status === "secondary"
        ? "#6f42c1"   
        : "#6c757d",

    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 500
  }}
>
  {row.statusText}
</span>
          </td>

          {/* PROGRESS */}
          <td>
            <div className="d-flex align-items-center gap-2">
              <div
                className="progress w-100"
                style={{
                  height: "6px",
                  background: "#e9ecef",
                  borderRadius: "10px"
                }}
              >
                <div
                  className="progress-bar"
                  style={{
                    width: `${row.percent}%`,
                    background:
                      row.percent === 100
                        ? "#198754"
                        : row.percent > 0
                        ? "#f59f00"
                        : "#979b9f"
                  }}
                ></div>
              </div>
              <small className="text-muted" style={{ fontSize: "11px"}}>
                {row.percent}%
              </small>
            </div>
          </td>

          <td className="text-muted" style={{paddingLeft:"20px"}}>{row.date}</td>

          <td>
            <FaPrint style={{ cursor: "pointer", fontSize: "14px" }} />
          </td> 
        </tr>
      ))}

      {/* APPROVE ROW */}
      <tr style={{ background: "#fff" }}>
        <td className="p-3 text-primary fw-semibold">PO-2024-1104</td>
        <td className="fw-semibold">Chem-Lube Tech.</td>
        <td className="text-muted">200 liters Die Release</td>
        <td>₹0.90 L</td>

        <td>
          <span
            style={{
              background: "#fff3cd",
              color: "#f59f00",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 500
            }}
          >
            Pending Approval
          </span>
        </td>

        <td>
          <div className="d-flex align-items-center gap-2">
            <div className="progress w-100" style={{ height: "5px" }}>
              <div className="progress-bar bg-secondary" style={{ width: "0%" }}></div>
            </div>
            <small className="text-muted">0%</small>
          </div>
        </td>
              <td style={{ paddingLeft: "25px" }}>—</td>

        <td>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-sm"
              style={{
                background: "#198754",
                color: "#fff",
                borderRadius: "6px",
                padding: "4px 10px",
                fontSize: "12px"
              }}
            >
              Approve
            </button>

            <FaPrint style={{ cursor: "pointer", fontSize: "14px" }} />
          </div>
        </td>
      </tr>

      {/* SEND ROW */}
      <tr style={{ background: "#fff" }}>
        <td className="p-3 text-primary fw-semibold">PO-2024-1105</td>
        <td className="fw-semibold">Bharat Toolings</td>
        <td className="text-muted">1 pc Die - Valve Cover</td>
        <td>₹3.80 L</td>

        <td>
          <span
            style={{
              background: "#f1f3f5",
              color: "#6c757d",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 500
            }}
          >
            Draft
          </span>
        </td>

        <td>
          <div className="d-flex align-items-center gap-2">
            <div className="progress w-100" style={{ height: "5px" }}>
              <div className="progress-bar bg-secondary" style={{ width: "0%" }}></div>
            </div>
            <small className="text-muted">0%</small>
          </div>
        </td>
             <td style={{ paddingLeft: "25px" }}>—</td>
        <td>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-sm"
              style={{
                background: "#0d6efd",
                color: "#fff",
                borderRadius: "6px",
                padding: "4px 10px",
                fontSize: "12px"
              }}
            >
              Send
            </button>

            <FaPrint style={{ cursor: "pointer", fontSize: "14px" }} />
          </div>
        </td>
      </tr>

    </tbody>
  </table>
</div> 
    </div>
    </div>
  );
} 