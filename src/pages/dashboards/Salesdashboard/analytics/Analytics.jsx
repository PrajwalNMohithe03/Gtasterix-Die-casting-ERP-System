import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./oee.css";

export default function OeeDashboard() {
  return (
    <div className="oee-dashboard p-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold">OEE Analytics Dashboard</h3>
          <p className="sub-text">
            Overall Equipment Effectiveness monitoring and analysis
          </p>
        </div>

        <div className="d-flex gap-2">
          <button className="btn light-btn">Import</button>
          <button className="btn light-btn">Export</button>
          <button className="btn light-btn">Print</button>
          <button className="btn primary-btn">Preview</button>
        </div>
      </div>

      {/* CIRCLE CARDS */}
      <div className="row g-3 mb-4">
        {[
          { title: "Overall OEE", value: "79.4%", color: "orange" },
          { title: "Availability", value: "87.2%", color: "green" },
          { title: "Performance", value: "91.5%", color: "green" },
          { title: "Quality (FPY)", value: "99.6%", color: "green" }
        ].map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="card oee-card text-center">
              <p className="sub-text">{item.title}</p>

              <div className={`circle ${item.color}`}>
                <span>{item.value}</span>
              </div>

              <small className="sub-text">Target: 85%</small>
            </div>
          </div>
        ))}
      </div>

      {/* SIX BIG LOSSES */}
      <div className="card p-3 mb-4">
        <h6 className="fw-bold">Six Big Losses Analysis</h6>
        <p className="sub-text">Breakdown of production losses impacting OEE</p>

        <table className="table mt-3">
          <thead>
            <tr>
              <th>LOSS CATEGORY</th>
              <th>HOURS/DAY</th>
              <th>OEE IMPACT</th>
              <th>PREVIOUS</th>
              <th>TREND</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Breakdowns</td>
              <td>2.8 hrs/day</td>
              <td className="text-danger">4.2%</td>
              <td>5.1%</td>
              <td className="text-success">↗ Improving</td>
            </tr>

            <tr>
              <td>Reduced Speed</td>
              <td>—</td>
              <td className="text-danger">2.1%</td>
              <td>1.5%</td>
              <td className="text-danger">↘ Worsening</td>
            </tr>

            <tr>
              <td>Startup Rejects</td>
              <td>—</td>
              <td className="text-danger">0.2%</td>
              <td>0.2%</td>
              <td className="text-muted">— Stable</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* BOTTOM CARDS */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Production (March 2026)</h6>
            <p>Total Parts Produced <b>28,450 pcs</b></p>
            <p className="text-danger">Scrap 285 pcs</p>
            <p className="text-warning">Rework 142 pcs</p>
            <hr />
            <p className="text-success fw-bold">On-Time Delivery 94.2%</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h6>Procurement Status</h6>
            <p>Pending POs <b>8</b></p>
            <p>Value <b>₹24.5 L</b></p>
            <p>Awaiting Approval <b>3</b></p>
            <p>Overdue Deliveries <b>1</b></p>
            <hr />
            <p className="text-success fw-bold">Avg Rating 4.2</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h6>Sales (March 2026)</h6>
            <p>Total Orders <b>23</b></p>
            <p>Order Value <b>₹62.5 L</b></p>
            <p>Pending Quotations <b>5</b></p>
            <hr />
            <p className="text-success fw-bold">On-Time Delivery 94.2%</p>
          </div>
        </div>
      </div>

    </div>
  );
}