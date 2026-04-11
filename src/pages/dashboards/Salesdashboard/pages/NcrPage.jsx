import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ncr.css";

export default function NCRPage() {
  return (
    <div className="ncr-page">
  <div className="container-fluid">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Non-Conformance Reports (NCR)</h2>
          <p className="text-muted">
            Track and manage quality non-conformances
          </p>
        </div>
        <button className="btn btn-danger px-4 py-2 fw-semibold">
          + Create NCR
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card summary-card">
            <p>Open NCRs</p>
            <h4>3</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card summary-card">
            <p>Critical</p>
            <h4 className="text-danger">1</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card summary-card">
            <p>Major</p>
            <h4 className="text-warning">2</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card summary-card">
            <p>Closed</p>
            <h4 className="text-success">1</h4>
          </div>
        </div>
      </div>

      {/* SEARCH + FILTER */}
      <div className="card p-3 mb-3">
        <div className="d-flex gap-3 flex-wrap">
          <input
            type="text"
            className="form-control search-box"
            placeholder="Search by NCR ID or description..."
          />

          <select className="form-select w-auto">
            <option>All Severity</option>
            <option>Critical</option>
            <option>Major</option>
            <option>Minor</option>
          </select>

          <button className="btn btn-outline-secondary">
            More Filters
          </button>
        </div>
      </div>

      {/* TABLE BOX WITH SCROLLBAR */}
      <div className="table-container mt-2">

        <table className="table align-middle mb-0">
          <thead>
            <tr>
              <th>NCR ID</th>
              <th>Type</th>
              <th>Description</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-primary fw-semibold">NCR-001</td>
              <td><span className="badge bg-light text-dark">Internal</span></td>
              <td>Porosity defect in FG-005 Crankcase Cover</td>
              <td><span className="badge bg-warning text-dark">Major</span></td>
              <td><span className="badge bg-primary">Under Review</span></td>
              <td>Rajesh Kumar</td>
              <td><button className="btn btn-primary btn-sm">View</button></td>
            </tr>

            <tr>
              <td className="text-primary fw-semibold">NCR-002</td>
              <td><span className="badge bg-light text-dark">Supplier</span></td>
              <td>Dimensional deviation in CP-001 Insert M8</td>
              <td><span className="badge bg-warning text-dark">Minor</span></td>
              <td><span className="badge bg-success">Closed</span></td>
              <td>Priya Sharma</td>
              <td><button className="btn btn-primary btn-sm">View</button></td>
            </tr>

            <tr>
              <td className="text-primary fw-semibold">NCR-003</td>
              <td><span className="badge bg-light text-dark">Internal</span></td>
              <td>Cold shut defect - FG-001 Gearbox Housing</td>
              <td><span className="badge bg-danger">Critical</span></td>
              <td><span className="badge bg-warning text-dark">Corrective Action</span></td>
              <td>Kavita Joshi</td>
              <td><button className="btn btn-primary btn-sm">View</button></td>
            </tr>

            <tr>
              <td className="text-primary fw-semibold">NCR-004</td>
              <td><span className="badge bg-light text-dark">Customer</span></td>
              <td>Surface finish not as per Maruti spec</td>
              <td><span className="badge bg-warning text-dark">Major</span></td>
              <td><span className="badge bg-secondary">8D in Progress</span></td>
              <td>Priya Sharma</td>
              <td className="d-flex gap-2">
                <button className="btn btn-primary btn-sm">View</button>
                <button className="btn btn-purple btn-sm">8D Report</button>
              </td>
            </tr>

          </tbody>
        </table>
</div>
      </div>
    </div>
  );
}