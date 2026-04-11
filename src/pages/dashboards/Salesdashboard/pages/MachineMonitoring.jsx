import React from "react";
import "./machine.css";

export default function MachineMonitoring() {
  return (
<div className="machine-page">

      {/* HEADER */}
      <div className="mb-4">
        <h2 className="fw-bold">Machine Monitoring</h2>
        <p className="text-muted">Real-time monitoring of all production equipment</p>
      </div>

      {/* TOP CARDS */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="summary-card">
            <p>Total Machines</p>
            <h3>6</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="summary-card">
            <p>Running</p>
            <h3 className="text-success">3</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="summary-card">
            <p>Alarms</p>
            <h3 className="text-danger">1</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="summary-card">
            <p>Avg OEE</p>
            <h3 className="text-primary">67%</h3>
          </div>
        </div>
      </div>

      {/* ALERT BOX */}
      <div className="alert-box mb-4">
        <div>
          <h6 className="fw-bold text-danger">
            ⚠ Critical Alert: DCM-04 Temperature Alarm
          </h6>
          <p className="mb-2">
            Die temperature exceeded 220°C threshold (Current: 234°C). Immediate action required.
          </p>
          <button className="btn btn-danger btn-sm">Acknowledge Alarm</button>
        </div>
      </div>

      {/* MACHINE CARDS */}
      <div className="row g-4 mb-4">

        {/* CARD */}
        <div className="col-md-4">
          <div className="machine-card">
            <div className="d-flex justify-content-between">
              <h5>DCM-01</h5>
              <span className="status green">● Running</span>
            </div>

            <p className="text-muted">Die Casting Machine #1</p>

            <p>Capacity</p>
            <h6>650T Clamping</h6>

            <p className="mt-3">OEE <span className="float-end text-warning">82%</span></p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "82%" }}></div>
            </div>

            <p className="mt-3">Temperature <span className="float-end text-warning">215°C / 220°C</span></p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "95%" }}></div>
            </div>

            <p className="mt-3">Current Work Order</p>
            <small>WO-2024-0891</small>

            <button className="btn btn-primary w-100 mt-3">View Details</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-4">
          <div className="machine-card">
            <div className="d-flex justify-content-between">
              <h5>DCM-02</h5>
              <span className="status gray">● Idle</span>
            </div>

            <p className="text-muted">Die Casting Machine #2</p>

            <p>Capacity</p>
            <h6>400T Clamping</h6>

            <p className="mt-3">OEE <span className="float-end text-warning">78%</span></p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "78%" }}></div>
            </div>

            <p className="mt-3">Temperature <span className="float-end">0°C / 220°C</span></p>
            <div className="progress">
              <div className="progress-bar bg-secondary" style={{ width: "0%" }}></div>
            </div>

            <p className="mt-3">Current Work Order</p>
            <small>—</small>

            <button className="btn btn-primary w-100 mt-3">View Details</button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-md-4">
          <div className="machine-card">
            <div className="d-flex justify-content-between">
              <h5>DCM-03</h5>
              <span className="status green">● Running</span>
            </div>

            <p className="text-muted">Die Casting Machine #3</p>

            <p>Capacity</p>
            <h6>800T Clamping</h6>

            <p className="mt-3">OEE <span className="float-end text-success">88%</span></p>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "88%" }}></div>
            </div>

            <p className="mt-3">Temperature <span className="float-end text-warning">218°C / 220°C</span></p>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "98%" }}></div>
            </div>

            <p className="mt-3">Current Work Order</p>
            <small>Completed</small>

            <button className="btn btn-primary w-100 mt-3">View Details</button>
          </div>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="row g-4">

        {/* ALERT CARD */}
        <div className="col-md-4">
          <div className="machine-card alert-card">
            <div className="d-flex justify-content-between">
              <h5>DCM-04</h5>
              <span className="status red">● Alarm</span>
            </div>

            <p className="text-muted">Die Casting Machine #4</p>

            <p>Capacity</p>
            <h6>280T Clamping</h6>

            <p className="mt-3">OEE <span className="float-end text-danger">61%</span></p>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: "61%" }}></div>
            </div>

            <p className="mt-3">Temperature <span className="float-end text-danger">234°C / 220°C</span></p>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: "100%" }}></div>
            </div>

            <p className="mt-3">Current Work Order</p>
            <small>WO-2024-0895</small>

            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-primary w-50">View Details</button>
              <button className="btn btn-danger w-50">Acknowledge</button>
            </div>
          </div>
        </div>

        {/* CARD */}
        <div className="col-md-4">
          <div className="machine-card">
            <div className="d-flex justify-content-between">
              <h5>DCM-05</h5>
              <span className="status orange">● Maintenance</span>
            </div>

            <p className="text-muted">Trim Press #1</p>

            <p>Capacity</p>
            <h6>50T</h6>

            <p className="mt-3">OEE <span className="float-end text-danger">0%</span></p>
            <div className="progress">
              <div className="progress-bar bg-secondary" style={{ width: "0%" }}></div>
            </div>

            <p className="mt-3">Current Work Order</p>
            <small>—</small>

            <button className="btn btn-primary w-100 mt-3">View Details</button>
          </div>
        </div>

        {/* CARD */}
        <div className="col-md-4">
          <div className="machine-card">
            <div className="d-flex justify-content-between">
              <h5>DCM-06</h5>
              <span className="status green">● Running</span>
            </div>

            <p className="text-muted">Shot Blast Machine</p>

            <p>Capacity</p>
            <h6>—</h6>

            <p className="mt-3">OEE <span className="float-end text-success">91%</span></p>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "91%" }}></div>
            </div>

            <p className="mt-3">Current Work Order</p>
            <small>Batch: SB-0048</small>

            <button className="btn btn-primary w-100 mt-3">View Details</button>
          </div>
        </div>
<div className="oee-table mb-4">
  <h5 className="mb-3">Machine OEE Breakdown</h5>

  <table className="table align-middle">
    <thead>
      <tr>
        <th>MACHINE</th>
        <th>OVERALL OEE</th>
        <th>AVAILABILITY</th>
        <th>PERFORMANCE</th>
        <th>QUALITY</th>
        <th>STATUS</th>
        <th>TOP LOSS</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>DCM-01</td>
        <td className="text-success fw-semibold">82%</td>
        <td>88%</td>
        <td>93%</td>
        <td>99.5%</td>
        <td><span className="dot green"></span></td>
        <td>Reduced Speed</td>
      </tr>

      <tr>
        <td>DCM-02</td>
        <td className="text-warning fw-semibold">78%</td>
        <td>85%</td>
        <td>92%</td>
        <td>99.4%</td>
        <td><span className="dot yellow"></span></td>
        <td>Setup Time</td>
      </tr>

      <tr>
        <td>DCM-03</td>
        <td className="text-success fw-semibold">88%</td>
        <td>93%</td>
        <td>95%</td>
        <td>99.7%</td>
        <td><span className="dot green"></span></td>
        <td>Minor Stops</td>
      </tr>

      <tr className="table-danger-light">
        <td>DCM-04</td>
        <td className="text-danger fw-semibold">61%</td>
        <td>71%</td>
        <td>87%</td>
        <td>98.9%</td>
        <td><span className="dot red"></span></td>
        <td className="text-danger">Breakdowns ← Needs attention</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>

    </div>
  );
}