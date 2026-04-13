import React, { useState } from "react";
import "./ncr.css";

export default function NCRPage() {
const [severity, setSeverity] = useState("all");  //
  const data = [
    {
      id: "NCR-002",
      type: "Supplier",
      desc: "Dimensional deviation in CP-001 Insert M8",
      severity: "minor",
      status: "closed",
      user: "Priya Sharma"
    },
    {
      id: "NCR-003",
      type: "Internal",
      desc: "Cold shut defect - FG-001 Gearbox Housing",
      severity: "critical",
      status: "action",
      user: "Kavita Joshi"
    },
    {
      id: "NCR-004",
      type: "Customer",
      desc: "Surface finish not as per Maruti spec",
      severity: "major",
      status: "progress",
      user: "Priya Sharma"
    }
  ];

  const [selected, setSelected] = useState(data[1]);

  return (
    <div className="container-fluid ncr-page">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 className="fw-semibold">Non-Conformance Reports (NCR)</h3>
          <p className="text-muted small mb-0">
            Track and manage quality non-conformances
          </p>
        </div>
        <button className="btn create-btn">+ Create NCR</button>
      </div>

      {/* KPI */}
     <div className="row g-3 mb-3">

  {/* OPEN NCR */}
  <div className="col-md-3">
    <div className="kpi-card d-flex align-items-center">
      <div className="icon-box red">
        <i className="bi bi-exclamation-triangle"></i>
      </div>
      <div>
        <p className="kpi-title">Open NCRs</p>
        <h4 className="kpi-value">3</h4>
      </div>
    </div>
  </div>

  {/* CRITICAL */}
  <div className="col-md-3">
    <div className="kpi-card d-flex align-items-center">
      <div className="icon-box orange">
        <i className="bi bi-clock"></i>
      </div>
      <div>
        <p className="kpi-title">Critical</p>
        <h4 className="kpi-value text-danger">1</h4>
      </div>
    </div>
  </div>

  {/* MAJOR */}
  <div className="col-md-3">
    <div className="kpi-card d-flex align-items-center">
      <div className="icon-box yellow">
        <i className="bi bi-exclamation-circle"></i>
      </div>
      <div>
        <p className="kpi-title">Major</p>
        <h4 className="kpi-value text-warning">2</h4>
      </div>
    </div>
  </div>

  {/* CLOSED */}
  <div className="col-md-3">
    <div className="kpi-card d-flex align-items-center">
      <div className="icon-box green">
        <i className="bi bi-check-circle"></i>
      </div>
      <div>
        <p className="kpi-title">Closed</p>
        <h4 className="kpi-value text-success">1</h4>
      </div>
    </div>
  </div>

</div>
<div className="filter-container mb-3">

  <div className="search-box">
    <i className="bi bi-search"></i>
    <input placeholder="Search by NCR ID or description..." />
  </div>


<select
  className="form-select filter-select"
  value={severity}
  onChange={(e) => setSeverity(e.target.value)}
>
  <option value="all">All Severity</option>
  <option value="critical">Critical</option>
  <option value="major">Major</option>
  <option value="minor">Minor</option>
</select>

  <button className="btn filter-btn">
    <i className="bi bi-funnel me-1"></i> More Filters
  </button>

</div>
      {/* TABLE */}
      <div className="table-box">
        <div className="table-scroll">

          <table className="table ncr-table align-middle">
            <thead>
              <tr>
                <th>NCR ID</th>
                <th>TYPE</th>
                <th>DESCRIPTION</th>
                <th>SEVERITY</th>
                <th>STATUS</th>
                <th>ASSIGNED TO</th>
                <th style={{ minWidth: "200px" }}>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => setSelected(row)}
                  className={selected.id === row.id ? "row-active" : ""}
                >
                  <td className="fw-semibold text-primary">{row.id}</td>
                  <td><span className="pill">{row.type}</span></td>
                  <td>{row.desc}</td>

                  <td><span className={`badge-custom ${row.severity}`}>{row.severity}</span></td>
                  <td><span className={`badge-custom ${row.status}`}>{row.status}</span></td>

                  <td>{row.user}</td>

                  <td>
                    <button className="btn btn-sm btn-primary me-2">View</button>
                    {row.status === "progress" && (
                      <button className="btn btn-sm btn-purple">8D Report</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

      {/* DETAIL PANEL */}
      <div className="detail-panel mt-3">

        <div className="d-flex justify-content-between">
          <h5 className="fw-semibold">{selected.id} - {selected.desc}</h5>
          <span className="badge-custom critical">Critical</span>
        </div>

        <p className="text-muted small">
          Created: 09-Mar-2026 | Type: {selected.type}
        </p>

        <p>{selected.desc}</p>

        <div className="row g-3 mt-2">
          <div className="col-md-4">
            <div className="info-box yellow">
              <h6>Containment</h6>
              <p>12 pcs segregated & tagged</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box blue">
              <h6>Root Cause</h6>
              <p>Temperature too low</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box purple">
              <h6>Corrective Action</h6>
              <p>Pre-heat cycle</p>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="timeline mt-4">
          {["Raised","Investigation","Containment","Root Cause","Corrective Action","Verification"].map((t,i)=>(
            <div key={i} className={`step ${i<4?"done":i===4?"active":""}`}>
              <div className="circle">{i<4?"✓":i+1}</div>
              <span>{t}</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}