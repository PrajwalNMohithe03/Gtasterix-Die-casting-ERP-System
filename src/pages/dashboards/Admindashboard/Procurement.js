import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaFilter, FaPrint } from "react-icons/fa";
import { FaCheckCircle, FaClock, FaExclamationCircle, FaStar } from "react-icons/fa";

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
          <h3 className="fw-bold">Purchase Orders</h3>
          <p className="text-muted mb-0">
            Manage supplier purchase orders and deliveries
          </p>
        </div>

        <button onClick={() =>{setMode("add"); setShowForm(true);} }
                className="btn btn-primary" style={{padding: "10px 35px", background: "#17039d", color: "#fff"}}>
                  + Create Purchase Order
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
        <FaCheckCircle size={22} color="#0d6efd" />
      </div>

      {/* TEXT */}
      <div>
        <div className="text-muted small">Pending POs</div>
        <h5 className="fw-bold mb-0">8</h5>
        <div className="text-muted small">₹24.5 Lakh</div>
      </div>

    </div>
  </div>

{/* Awaiting Approval */}
<div className="col-md-3">
  <div className="card p-3 border-1 d-flex flex-row align-items-center gap-3" style={cardStyle}>

    <div style={iconBox("#fff3cd")}>
      <FaClock size={20} color="#f59f00" />
    </div>

    <div>
      <div className="text-muted small">Awaiting Approval</div>
      <h5 className="fw-bold mb-0 text-warning">3</h5>
    </div>

  </div>
</div>

{/* Overdue */}
<div className="col-md-3">
  <div className="card p-3 border-1 d-flex flex-row align-items-center gap-3" style={cardStyle}>

    <div style={iconBox("#fdecea")}>
      <FaExclamationCircle size={20} color="#dc3545" />
    </div>

    <div>
      <div className="text-muted small">Overdue Deliveries</div>
      <h5 className="fw-bold mb-0 text-danger">1</h5>
      <div className="text-muted small">3 days late</div>
    </div>

  </div>
</div>

{/* Rating */}
<div className="col-md-3">
  <div className="card p-3 border-1 d-flex flex-row align-items-center gap-3" style={cardStyle}>

    <div style={iconBox("#e6f4ea")}>
      <FaStar size={20} color="#198754" />
    </div>

    <div>
      <div className="text-muted small">Avg Supplier Rating</div>
      <h5 className="fw-bold mb-0 text-success">4.2/5</h5>
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

{/* ACTIVE SUPPLIERS */}
<div className="mt-4">
  <h5 className="fw-bold mb-3">Active Suppliers</h5>

  <div className="row g-3">

    {[
      {
        name: "Hindalco Industries Ltd.",
        type: "Aluminum Supplier",
        delivery: "96%",
        contact: "Ravi Nair"
      },
      {
        name: "Vedanta Zinc International",
        type: "Zinc Supplier",
        delivery: "89%",
        contact: "Meera Shah"
      },
      {
        name: "Sundaram Fasteners Ltd.",
        type: "Hardware/Inserts",
        delivery: "98%",
        contact: "Anand Rajan"
      },
      {
        name: "Chem-Lube Technologies",
        type: "Lubricants",
        delivery: "81%",
        contact: "Farhan Irani"
      },
      {
        name: "Bharat Toolings Pvt. Ltd.",
        type: "Dies & Tooling",
        delivery: "92%",
        contact: "Sudhir Joshi"
      },
      {
        name: "Tata Steel Strips",
        type: "Steel (Trims)",
        delivery: "97%",
        contact: "Nisha Pillai"
      }
    ].map((sup, i) => (

      <div className="col-md-4" key={i}>
  <div
    className="card border-1 h-100 d-flex flex-column"
    style={{
      borderRadius: "14px",
      boxShadow: "1px 2px 8px rgba(0,0,0,0.05)",
      padding: "14px"
    }}
  >

    {/* TOP CONTENT */}
    <div className="d-flex justify-content-between align-items-start">

      {/* LEFT */}
      <div>
        <div className="fw-semibold">{sup.name}</div>
        <div className="text-muted small">{sup.type}</div>
        <br />

        <div className="text-muted small">On-time Delivery:</div>
        <div className="text-muted small">Contact:</div>
      </div>

      {/* RIGHT */}
      <div className="text-end">

        <div className="text-warning mb-5" style={{ fontSize: "14px" }}>
          ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        <div className="small fw-semibold">{sup.delivery}</div>

        <div className="small text-muted">
          {sup.contact}
        </div>

      </div>
    </div>

    {/* BUTTON */}
    <button
      className="btn btn-sm w-100 mt-3"
      style={{
        background: "#0d6efd",
        color: "#fff",
        borderRadius: "8px",
        fontSize: "14px",
        padding: "8px 0",
        fontWeight:"500"
      }}
    >
      Create PO
    </button>

  </div>
</div>
    ))}

  </div>
</div>

    </div>
    </div>
  );
} 