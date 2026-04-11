import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./workorders.css";
import { FaPlay, FaPause, FaEye } from "react-icons/fa";

export default function WorkOrders() {
  const data = [
    {
      id: "WO-2024-0891",
      item: "Gearbox Housing",
      code: "FG-001",
      qty: 500,
      produced: 340,
      machine: "DCM-01",
      progress: 68,
      status: "inprogress",
      date: "10-Mar-2026",
      action: "pause"
    },
    {
      id: "WO-2024-0892",
      item: "Engine Bracket",
      code: "FG-002",
      qty: 800,
      produced: 0,
      machine: "DCM-02",
      progress: 0,
      status: "notstarted",
      date: "11-Mar-2026",
      action: "play"
    },
    {
      id: "WO-2024-0893",
      item: "Valve Cover",
      code: "FG-004",
      qty: 1200,
      produced: 1200,
      machine: "DCM-03",
      progress: 100,
      status: "completed",
      date: "08-Mar-2026",
      action: "view"
    },
    {
      id: "WO-2024-0894",
      item: "Crankcase Cover",
      code: "FG-005",
      qty: 600,
      produced: 210,
      machine: "DCM-01",
      progress: 35,
      status: "onhold",
      date: "09-Mar-2026",
      action: "view"
    },
    {
      id: "WO-2024-0895",
      item: "LED Housing",
      code: "FG-006",
      qty: 400,
      produced: 88,
      machine: "DCM-04",
      progress: 22,
      status: "inprogress",
      date: "10-Mar-2026",
      action: "pause"
    },
    {
      id: "WO-2024-0896",
      item: "Water Pump Housing",
      code: "FG-007",
      qty: 150,
      produced: 0,
      machine: "DCM-02",
      progress: 0,
      status: "notstarted",
      date: "12-Mar-2026",
      action: "play"
    }
  ];

  return (
    <div className="workorders-page">

      {/* HEADER */}
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h2>Work Orders</h2>
          <p>Manage and track production work orders</p>
        </div>

        <button className="create-btn">
          + Create Work Order
        </button>
      </div>

      {/* CARDS */}
      <div className="row g-3 mt-2">
        <div className="col-md-3">
          <div className="summary-card">
            <span>Total Work Orders</span>
            <h3>6</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card">
            <span>In Progress</span>
            <h3 className="blue">2</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card">
            <span>Completed</span>
            <h3 className="green">1</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card">
            <span>On Hold</span>
            <h3 className="orange">1</h3>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="filters mt-3 d-flex gap-2">
        <input
          className="search"
          placeholder="Search by WO ID or item name..."
        />

        <select className="status-dropdown">
          <option>All Status</option>
        </select>

        <button className="filter-btn">More Filters</button>
      </div>

      {/* TABLE */}
      <div className="table-container mt-3">
        <div className="table-scroll">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>WORK ORDER ID</th>
                <th>ITEM</th>
                <th>QUANTITY</th>
                <th>MACHINE</th>
                <th>PROGRESS</th>
                <th>STATUS</th>
                <th>START DATE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="wo-id">{row.id}</td>

                  <td>
                    <div className="item-name">{row.item}</div>
                    <div className="item-code">{row.code}</div>
                  </td>

                  <td>
                    <div>{row.qty} pcs</div>
                    <div className="produced">
                      Produced: {row.produced}
                    </div>
                  </td>

                  <td>{row.machine}</td>

                  <td className="progress-cell">
                    <div className="progress-bar-bg">
                      <div
                        className={`progress-fill ${row.status}`}
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                    <span>{row.progress}%</span>
                  </td>

                  <td>
                    <span className={`badge ${row.status}`}>
                      {formatStatus(row.status)}
                    </span>
                  </td>

                  <td>{row.date}</td>

                  {/* ACTIONS */}
                  <td className="actions">
                    {row.action === "play" && <FaPlay className="play" />}
                    {row.action === "pause" && <FaPause className="pause" />}
                    <FaEye className="eye" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

function formatStatus(status) {
  if (status === "inprogress") return "In Progress";
  if (status === "completed") return "Completed";
  if (status === "onhold") return "On Hold";
  return "Not Started";
}