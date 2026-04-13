import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdOutlineVerified } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./purchase.css";

export default function ApprovalsPage() {
  return (
    <div className="dashboard p-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 className="fw-bold">Purchase Orders</h3>
          <p className="sub-text">
            Manage supplier purchase orders and deliveries
          </p>
        </div>

        <button className="btn create-btn">
          + Create Purchase Order
        </button>
      </div>

      {/* STATS */}
      <div className="row g-3 mb-4">

  {/* Pending POs */}
  <div className="col-md-3">
    <div className="stat-card">
      <div className="d-flex align-items-center gap-3">
        <div className="icon-box blue">
          <FiCheckCircle />
        </div>

        <div>
          <p className="stat-title mb-1">Pending POs</p>
          <h5 className="mb-0">8</h5>
          <small className="sub-text">₹24.5 Lakh</small>
        </div>
      </div>
    </div>
  </div>

  {/* Awaiting Approval */}
  <div className="col-md-3">
    <div className="stat-card">
      <div className="d-flex align-items-center gap-3">
        <div className="icon-box yellow">
          <FiClock />
        </div>

        <div>
          <p className="stat-title mb-1">Awaiting Approval</p>
          <h5 className="mb-0 text-warning">3</h5>
        </div>
      </div>
    </div>
  </div>

  {/* Overdue */}
  <div className="col-md-3">
    <div className="stat-card">
      <div className="d-flex align-items-center gap-3">
        <div className="icon-box red">
          <HiOutlineExclamationCircle />
        </div>

        <div>
          <p className="stat-title mb-1">Overdue Deliveries</p>
          <h5 className="mb-0 text-danger">1</h5>
          <small>3 days late</small>
        </div>
      </div>
    </div>
  </div>

  {/* Rating */}
  <div className="col-md-3">
    <div className="stat-card">
      <div className="d-flex align-items-center gap-3">
        <div className="icon-box green">
          <MdOutlineVerified />
        </div>

        <div>
          <p className="stat-title mb-1">Avg Supplier Rating</p>
          <h5 className="mb-0 text-success">4.2/5</h5>
        </div>
      </div>
    </div>
  </div>

</div>

      {/* SEARCH */}


<div className="search-container mb-4 d-flex gap-3">

  {/* 🔍 SEARCH */}
  <div className="search-box flex-grow-1 d-flex align-items-center">
    <FiSearch className="search-icon" />

    <input
      type="text"
      placeholder="Search by PO ID or supplier..."
      className="search-input"
    />
  </div>

  {/* DROPDOWN */}
  <select className="status-select">
    <option>All Status</option>
  </select>

  {/* FILTER BUTTON */}
  <button className="filter-btn">
    <HiOutlineFilter className="filter-icon" />
    More Filters
  </button>

</div>

      {/* TABLE */}
      <div className="table-wrapper mb-5">
        <table className="table custom-table align-middle">
          <thead>
            <tr>
              <th>PO NUMBER</th>
              <th>SUPPLIER</th>
              <th>ITEM DESCRIPTION</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>RECEIVING %</th>
              <th>EXPECTED DELIVERY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-primary">PO-2024-1101</td>
              <td>Hindalco Industries</td>
              <td>10,000 kg Aluminum A380</td>
              <td>₹18.50 L</td>

              <td><span className="badge-success">Fully Received</span></td>

              <td>
                <div className="progress">
                  <div className="progress-bar progress-green" style={{ width: "100%" }} />
                </div>
                <small>100%</small>
              </td>

              <td>05-Mar-2026</td>
              <td>🖨️</td>
            </tr>

            <tr>
              <td className="text-primary">PO-2024-1102</td>
              <td>Sundaram Fasteners</td>
              <td>50,000 pcs Steel Insert</td>
              <td>₹4.25 L</td>

              <td><span className="badge-blue">Partially Received</span></td>

              <td>
                <div className="progress">
                  <div className="progress-bar progress-orange" style={{ width: "62%" }} />
                </div>
                <small>62%</small>
              </td>

              <td>08-Mar-2026</td>
              <td>🖨️</td>
            </tr>

            <tr>
              <td className="text-primary">PO-2024-1103</td>
              <td>Vedanta Zinc</td>
              <td>3,000 kg ZA-8 Ingot</td>
              <td>₹6.60 L</td>

              <td><span className="badge-purple">Sent to Supplier</span></td>

              <td>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "0%" }} />
                </div>
                <small>0%</small>
              </td>

              <td>15-Mar-2026</td>
              <td>🖨️</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SUPPLIERS */}
      <h5 className="mb-3 fw-bold">Active Suppliers</h5>

      <div className="row g-3">
        {suppliers.map((s, i) => (
          <div className="col-md-4" key={i}>
            <div className="card supplier-card">

              <div className="d-flex justify-content-between align-items-start">
                <h6 className="fw-semibold">{s.name}</h6>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>

              <p className="sub-text">{s.type}</p>

              <p className="mb-1">
                On-time Delivery: <strong>{s.delivery}%</strong>
              </p>

              <p className="mb-3">
                Contact: <strong>{s.contact}</strong>
              </p>

              <button className="btn create-btn w-100">
                Create PO
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

const suppliers = [
  { name: "Hindalco Industries Ltd.", type: "Aluminum Supplier", delivery: 96, contact: "Ravi Nair" },
  { name: "Vedanta Zinc International", type: "Zinc Supplier", delivery: 89, contact: "Meera Shah" },
  { name: "Sundaram Fasteners Ltd.", type: "Hardware/Inserts", delivery: 98, contact: "Anand Rajan" },
  { name: "Chem-Lube Technologies", type: "Lubricants", delivery: 81, contact: "Farhan Irani" },
  { name: "Bharat Toolings Pvt Ltd.", type: "Dies & Tooling", delivery: 92, contact: "Sudhir Joshi" },
  { name: "Tata Steel Strips", type: "Steel (Trims)", delivery: 97, contact: "Nisha Pillai" }
];