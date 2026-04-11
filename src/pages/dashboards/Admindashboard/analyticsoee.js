import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFileImport, FaFileExport, FaPrint, FaEye } from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function AnalyticsOEE() {
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState(""); 
  const [showExport, setShowExport] = useState(false);
  const [showPrint, setShowPrint] = useState(false);

  const reportData = "";
  const exportPDF = () => {
  const doc = new jsPDF();
  doc.text("OEE Report", 10, 10);

  autoTable(doc, {
    head: [["Machine", "OEE", "Status"]],
    body: reportData.map(i => [i.machine, i.oee, i.status])
  });

  doc.save("oee-report.pdf");
};
const exportExcel = () => {
  const ws = XLSX.utils.json_to_sheet(reportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "OEE");

  XLSX.writeFile(wb, "oee-report.xlsx");
};
const exportCSV = () => {
  const ws = XLSX.utils.json_to_sheet(reportData);
  const csv = XLSX.utils.sheet_to_csv(ws);

  const blob = new Blob([csv], { type: "text/csv" });
  saveAs(blob, "oee-report.csv");
};
const exportJSON = () => {
  const blob = new Blob(
    [JSON.stringify(reportData, null, 2)],
    { type: "application/json" }
  );

  saveAs(blob, "oee-report.json");
};

const handlePrint = () => {
  window.print();
};

const [showPreview, setShowPreview] = useState(false);

  return (
    <div style={{ marginLeft: "250px", paddingTop: "80px" }}>
      <div className="container-fluid">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="fw-bold">OEE Analytics Dashboard</h3>
            <p className="text-muted mb-0">
              Overall Equipment Effectiveness monitoring and analysis
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex gap-2">
            {/* Import Button */}
            <button onClick={() => { setMode("add"); setShowForm(true); }} 
            className="btn btn-light border d-flex align-items-center gap-2" > 
              <FaFileImport />
               Import 
            </button>

             <button className="btn btn-light border d-flex align-items-center gap-2"
                    onClick={() => setShowExport(true)} >
             <FaFileExport /> 
                 Export
             </button>

            <button className="btn btn-light border d-flex align-items-center gap-2"
                    onClick={() => setShowPrint(true)}>
             <FaPrint /> 
               Print
            </button>

            <button className="btn btn-primary d-flex align-items-center gap-2"
                    onClick={() => setShowPreview(true)}>
              <FaEye />
                Preview
            </button>
          </div>
        </div>

        {/* Import Modal/Form */}
{showForm && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
  >
    <div
      className="card p-4 d-flex flex-column"
      style={{ width: "500px", minHeight: "420px", borderRadius: "12px" }}
    >

      {/* TITLE */}
      <h5 className="fw-bold mb-2">Import OEE Data</h5>
      <p className="text-muted mb-3">
        Upload a file to import analytics data
      </p>

      {/* UPLOAD BOX */}
      <div
  className="mb-3 p-3 border rounded text-center"
  style={{ cursor: "pointer", minHeight: "200px" }}
>
  <i
    className="bi bi-cloud-upload"
    style={{ fontSize: "52px", color: "#6c757d" }}
  ></i>

  <p className="small text-muted mt-3 mb-0">
    Drag and drop your file here, or click to browse
  </p>

   {/* BLUE CHOOSE FILE BUTTON */}
<div className="mt-3 d-flex justify-content-center">
  <label
    className="btn btn-primary d-flex flex-column align-items-center justify-content-center text-center"
    style={{ padding: "6px 15px", fontSize: "16px", width: "130px" }}
  >
    <span className="w-100 text-center">➜] Select File</span>
    <input type="file" className="d-none" />
  </label>
</div>
</div>

      {/* FOOTER SECTION (PUSHED DOWN) */}
      <div className="mt-auto d-flex justify-content-between align-items-end pt-3">

        {/* LEFT SIDE */}
        <div>
          <p className="small text-muted mb-1">
            Supported formats:
          </p>

          <ul className="small text-muted mb-0 ps-3">
            <li>CSV (.csv)</li>
            <li>Excel (.xls, .xlsx)</li>
            <li>JSON (.json)</li>
          </ul>
        </div>

        {/* RIGHT SIDE BUTTON */}
       <div>
  <button
    className="btn btn-secondary px-4"
    onClick={() => setShowForm(false)}>
    Cancel
  </button>
</div>

      </div>
    </div>
  </div>
)}

{/* EXPORT MODAL */}
{showExport && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
  >
    <div
      className="card p-4"
      style={{ width: "480px", borderRadius: "12px" }}
    >

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-2">

        <div>
          <h5 className="fw-bold mb-0">Export OEE Report</h5>
          <small className="text-muted">
            Choose format to download data
          </small>
        </div>
      </div>

      <hr />

      {/* OPTIONS */}

     {/* PDF */}
<button
  onClick={exportPDF}
  className="btn text-start d-flex align-items-center justify-content-between mb-3 border w-100 px-3 py-3"
  style={{ minHeight: "70px", borderRadius: "10px" }}
>
  <div className="d-flex align-items-center gap-3">
    <i className="bi bi-file-earmark-pdf-fill text-danger fs-3"></i>

    <div>
      <div className="fw-semibold">Export as PDF</div>
      <small className="text-muted">
        Formatted report with charts and tables
      </small>
    </div>
  </div>

  <i className="bi bi-download text-primary fs-5"></i>
</button>

{/* EXCEL */}
<button
  onClick={exportExcel}
  className="btn text-start d-flex align-items-center justify-content-between mb-3 border w-100 px-3 py-3"
  style={{ minHeight: "70px", borderRadius: "10px" }}
>
  <div className="d-flex align-items-center gap-3">
    <i className="bi bi-file-earmark-excel-fill text-success fs-3"></i>

    <div>
      <div className="fw-semibold">Export as Excel</div>
      <small className="text-muted">
        Spreadsheet format (.xlsx)
      </small>
    </div>
  </div>

  <i className="bi bi-download text-primary fs-5"></i>
</button>

{/* CSV */}
<button
  onClick={exportCSV}
  className="btn text-start d-flex align-items-center justify-content-between mb-3 border w-100 px-3 py-3"
  style={{ minHeight: "70px", borderRadius: "10px" }}
>
  <div className="d-flex align-items-center gap-3">
    <i className="bi bi-filetype-csv text-warning fs-3"></i>

    <div>
      <div className="fw-semibold">Export as CSV</div>
      <small className="text-muted">
        Comma-separated values
      </small>
    </div>
  </div>

  <i className="bi bi-download text-primary fs-5"></i>
</button>

{/* JSON */}
<button
  onClick={exportJSON}
  className="btn text-start d-flex align-items-center justify-content-between mb-3 border w-100 px-3 py-3"
  style={{ minHeight: "70px", borderRadius: "10px" }}
>
  <div className="d-flex align-items-center gap-3">
    <i className="bi bi-filetype-json text-primary fs-3"></i>

    <div>
      <div className="fw-semibold">Export as JSON</div>
      <small className="text-muted">
        Structured data format
      </small>
    </div>
  </div>

  <i className="bi bi-download text-primary fs-5"></i>
</button>

      {/* FOOTER */}
      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-secondary px-4"
          onClick={() => setShowExport(false)}
        >
          Cancel
        </button>
      </div>

    </div>
  </div>
)}

{/* PRINT MODAL */}
{showPrint && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
  >
    <div
      className="card p-4 d-flex flex-column"
      style={{
        width: "520px",
        minHeight: "420px",
        borderRadius: "12px"
      }}
    >

      {/* HEADER */}
      <div className="mb-3">
        <h5 className="fw-bold mb-1">Print OEE Report</h5>
        <p className="text-muted mb-0">
          Print the current analytics dashboard
        </p>
      </div>

      {/* PREVIEW BOX */}
      <div
        className="mb-4 p-3 rounded"
        style={{
          backgroundColor: "#e7f1ff",
          border: "1px solid #0d6efd",
          borderLeft: "4px solid #0d6efd"
        }}
      >
        <p className="small mb-0">
          <strong>Print Preview:</strong> The report will include all OEE metrics,
          Six Big Losses analysis, and production statistics.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mb-4">
        <p className="small fw-semibold mb-2">What will be printed:</p>

        <ul className="small text-muted ps-3 mb-0">
          <li className="mb-1">OEE Gauges (Overall, Availability, Performance, Quality)</li>
          <li className="mb-1">Six Big Losses Analysis Table</li>
          <li className="mb-1">Production, Procurement, and Sales Metrics</li>
          <li>Generated timestamp and company information</li>
        </ul>
      </div>

      {/* FOOTER (BOTTOM FIXED) */}
      <div className="mt-auto d-flex justify-content-end gap-2 pt-3 border-top">

        <button
          className="btn btn-secondary px-4"
          onClick={() => setShowPrint(false)}
        >
          Cancel
        </button>

        <button
          className="btn btn-primary px-4 d-flex align-items-center gap-2"
          onClick={handlePrint}
        >
          <FaPrint /> Print Now
        </button>

      </div>

    </div>
  </div>
)}


{/* PREVIEW MODAL */}
{showPreview && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
  >
    <div
      className="card"
      style={{
        width: "750px",
        height: "90vh",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column"
      }}
    >

      {/*  HEADER (FIXED) */}
      <div
        className="p-3 border-bottom bg-white"
        style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
      >
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="fw-bold mb-1">OEE Analytics Report Preview</h5>
            <p className="text-muted mb-0">Preview before export or print</p>
          </div>

          <button
            className="btn-close"
            onClick={() => setShowPreview(false)}
          ></button>
        </div>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div
        className="p-4"
        style={{
          overflowY: "auto",
          flex: 1
        }}
      >

        {/* COMPANY INFO */}
<div className="mb-4 text-center">

  {/* MAIN TITLE */}
  <h4
    className="fw-bold mb-1"
    style={{ color: "#17026c" }}
  >
    OEE Analytics Report
  </h4>

  {/* COMPANY NAME */}
  <div className="fw-semibold" style={{ fontSize: "18px" }}>
    Precision Cast Industries
  </div>

  {/* DATE */}
  <div className="text-muted pb-2" style={{ fontSize: "16px", borderBottom: "1px solid #dee2e6" }}>
    Generated on: {new Date().toLocaleString()}
  </div>

</div>

{/* OEE METRICS */}
<div className="mb-4">
  <h5 className="fw-semibold mb-3">OEE Metrics Summary</h5>

  <div className="row g-3">

    {/* Overall OEE */}
    <div className="col-md-6">
      <div
        className="border rounded p-4 shadow-sm text-start"
        style={{ height: "120px" }}
      >
        <div className="text-muted mb-1">Overall OEE</div>

        <div
          className="fw-bold"
          style={{ fontSize: "26px", color: "#0d6efd" }}
        >
          79.4%
        </div>

        <small className="text-muted">Good</small>
      </div>
    </div>

    {/* Availability */}
    <div className="col-md-6">
      <div
        className="border rounded p-4 shadow-sm text-start"
        style={{ height: "120px" }}
      >
        <div className="text-muted mb-1">Availability</div>

        <div
          className="fw-bold"
          style={{ fontSize: "26px", color: "green" }}
        >
          87.2%
        </div>
      </div>
    </div>

    {/* Performance */}
    <div className="col-md-6">
      <div
        className="border rounded p-4 shadow-sm text-start"
        style={{ height: "120px" }}
      >
        <div className="text-muted mb-1">Performance</div>

        <div
          className="fw-bold"
          style={{ fontSize: "26px", color: "green" }}
        >
          91.5%
        </div>
      </div>
    </div>

    {/* Quality */}
    <div className="col-md-6">
      <div
        className="border rounded p-4 shadow-sm text-start"
        style={{ height: "120px" }}
      >
        <div className="text-muted mb-1">Quality (FPY)</div>

        <div
          className="fw-bold"
          style={{ fontSize: "26px", color: "green" }}
        >
          99.6%
        </div>
      </div>
    </div>

  </div>
</div>
{/* SIX BIG LOSSES */}
<div className="mb-4">
  <h6 className="fw-semibold mb-3">Six Big Losses Analysis</h6>

  <div className="table-responsive">
    <table
      className="table align-middle"
      style={{
        borderCollapse: "collapse",
        fontSize: "13px"   // 🔽 full table small
      }}
    >

      {/* HEADER */}
      <thead>
        <tr style={{ backgroundColor: "#e9ecef" }}>
          <th className="fw-semibold text-start p-2">Loss Category</th>
          <th className="fw-semibold text-start p-2">Hours/Day</th>
          <th className="fw-semibold text-start p-2">Impact</th>
          <th className="fw-semibold text-start p-2">Previous</th>
          <th className="fw-semibold text-start p-2">Trend</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody>

        <tr style={{ borderBottom: "1px solid #dee2e6" }}>
          <td className="p-2">Breakdowns</td>
          <td className="p-2">2.8 hrs</td>
          <td className="p-2 text-danger fw-semibold">4.2%</td>
          <td className="p-2">5.1%</td>
          <td className="p-2">Improving</td>
        </tr>

        <tr style={{ borderBottom: "1px solid #dee2e6" }}>
          <td className="p-2">Setup & Adjustments</td>
          <td className="p-2">1.5 hrs</td>
          <td className="p-2 text-danger fw-semibold">2.3%</td>
          <td className="p-2">2.3%</td>
          <td className="p-2">Stable</td>
        </tr>

        <tr style={{ borderBottom: "1px solid #dee2e6" }}>
          <td className="p-2">Small Stops</td>
          <td className="p-2">0.9 hrs</td>
          <td className="p-2 text-danger fw-semibold">1.1%</td>
          <td className="p-2">1.8%</td>
          <td className="p-2">Improving</td>
        </tr>

        <tr style={{ borderBottom: "1px solid #dee2e6" }}>
          <td className="p-2">Reduced Speed</td>
          <td className="p-2">—</td>
          <td className="p-2 text-danger fw-semibold">2.1%</td>
          <td className="p-2">1.5%</td>
          <td className="p-2">Worsening</td>
        </tr>

        <tr style={{ borderBottom: "1px solid #dee2e6" }}>
          <td className="p-2">Startup Rejects</td>
          <td className="p-2">—</td>
          <td className="p-2 text-danger fw-semibold">0.2%</td>
          <td className="p-2">0.2%</td>
          <td className="p-2">Stable</td>
        </tr>

        <tr>
          <td className="p-2">Production Rejects</td>
          <td className="p-2">—</td>
          <td className="p-2 text-danger fw-semibold">0.8%</td>
          <td className="p-2">1.2%</td>
          <td className="p-2">Improving</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
{/* PRODUCTION METRICS */}
<div className="mb-4">
  <h6 className="fw-semibold mb-3">Production Metrics (March 2026)</h6>

  <div className="card p-4 shadow-sm">

    {/* ROW 1 */}
    <div className="d-flex justify-content-between mb-3">
      <span className="text-muted">Total Parts Produced:</span>
      <span className="fw-semibold">28,450 pcs</span>
    </div>

    {/* ROW 2 */}
    <div className="d-flex justify-content-between mb-3">
      <span className="text-muted">Scrap:</span>
      <span className="fw-semibold">
      <span style={{ color: "red" }}>285 pcs (1.0%)</span>
      </span>
    </div>

    {/* ROW 3 */}
    <div className="d-flex justify-content-between mb-3">
      <span className="text-muted">Rework:</span>
      <span className="fw-semibold">
      <span style={{ color: "#fd7e14" }}>142 pcs (0.5%)</span>
      </span>
    </div>

     <hr className="my-2 text-muted" />

    {/* ROW 4 */}
    <div className="d-flex justify-content-between">
      <span className="text-muted">On-Time Delivery:</span>
      <span className="fw-semibold" style={{ color: "green" }}>
        94.2%
      </span>
    </div>

  </div>
</div>

</div>
      {/* 🔹 FOOTER (FIXED) */}
      <div className="p-3 border-top bg-white d-flex justify-content-end gap-2">

        <button
          className="btn btn-secondary"
          onClick={() => setShowPreview(false)}
        >
          Close
        </button>

        <button
          className="btn btn-primary"
          onClick={() => {
            setShowPreview(false);
            setShowExport(true);
          }}
        >
          Export Report
        </button>

      </div>

    </div>
  </div>
)}

        {/* CARDS */}
        <div className="row g-4">
          {[
            { title: "Overall OEE", value: "79.4%", color: "#f59e0b", sub: "Target: 85%" },
            { title: "Availability", value: "87.2%", color: "#10b981", sub: "Uptime vs Planned Time" },
            { title: "Performance", value: "91.5%", color: "#10b981", sub: "Speed vs Ideal Cycle Time" },
            { title: "Quality (FPY)", value: "99.6%", color: "#10b981", sub: "Good Parts / Total Parts" },
          ].map((item, i) => {
            const valueNum = parseFloat(item.value); 

            return (
              <div className="col-md-3" key={i}>
                <div className="card p-4 text-center shadow-sm" style={{ borderRadius: "12px" }}>
                  
                  <h6 className="text-muted">{item.title}</h6>

                  {/* Circle */}
                  <div
                    className="mx-auto my-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      background: `conic-gradient(${item.color} ${valueNum}%, #e9ecef ${valueNum}%)`,
                      position: "relative",
                    }}
                  >
                    {/* Inner White Circle */}
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: "#fff",
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h5 className="fw-bold m-0" style={{ color: item.color }}>
                         {item.value}
                      </h5> 
                    </div>
                  </div>
                   <p className="text-muted small mb-0">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

{/* SIX BIG LOSSES */}
<div className="card mt-4 p-4 shadow-sm" style={{ borderRadius: "12px" }}>
  <h5 className="fw-bold">Six Big Losses Analysis</h5>
  <p className="text-muted">
    Breakdown of production losses impacting OEE
  </p>

  <div className="table-responsive">
    <table className="table mt-3" style={{ borderCollapse: "collapse", borderSpacing: "0 10px" }}>
      <thead className="table-light" style={{background: "#bdbcbc", borderBottom: "1px solid #dee2e6"}}>
        <tr>
          <th></th>
          <th>Loss Category</th>
          <th>Hours/Day</th>
          <th>OEE Impact</th>
          <th>Previous</th>
          <th>Trend</th>
        </tr>
      </thead>

      <tbody>
 <tr className="shadow-sm" style={{ backgroundColor: "#fff",}}>

    <td>
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "#87CEEB",
          color: "black",
          fontWeight: "600",
        }}
      >
        1
      </div>
    </td>
    <td>Breakdowns</td>
    <td>2.8 hrs/day</td>
    <td className="text-danger fw-bold">4.2%</td>
    <td>5.1%</td>
    <td className="text-success">↑ Improving</td>
  </tr>

  <tr>
    <td>
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "#87CEEB",
          color: "black",
          fontWeight: "600",
        }}
      >
        2
      </div>
    </td>
    <td>Setup & Adjustments</td>
    <td>1.5 hrs/day</td>
    <td className="text-danger fw-bold">2.3%</td>
    <td>2.3%</td>
    <td className="text-warning">→ Stable</td>
  </tr>

  <tr>
    <td>
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "#87CEEB",
          color: "black",
          fontWeight: "600",
        }}
      >
        3
      </div>
    </td>
    <td>Small Stops</td>
    <td>0.9 hrs/day</td>
    <td className="text-danger fw-bold">1.1%</td>
    <td>1.8%</td>
    <td className="text-success">↑ Improving</td>
  </tr>

  <tr>
    <td>
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "#87CEEB",
          color: "black",
          fontWeight: "600",
        }}
      >
        4
      </div>
    </td>
    <td>Reduced Speed</td>
    <td>—</td>
    <td className="text-danger fw-bold">2.1%</td>
    <td>1.5%</td>
    <td className="text-danger">↓ Worsening</td>
  </tr>

  <tr>
    <td>
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "#87CEEB",
          color: "black",
          fontWeight: "600",
        }}
      >
        5
      </div>
    </td>
    <td>Startup Rejects</td>
    <td>—</td>
    <td className="text-danger fw-bold">0.2%</td>
    <td>0.2%</td>
    <td className="text-warning">→ Stable</td>
  </tr>

  <tr>
    <td>
      <div
        className="d-flex align-items-center justify-content-center rounded-circle"
        style={{
          width: "28px",
          height: "28px",
          backgroundColor: "#87CEEB",
          color: "black",
          fontWeight: "600",
        }}
      >
        6
      </div>
    </td>
    <td>Production Rejects</td>
    <td>—</td>
    <td className="text-danger fw-bold">0.8%</td>
    <td>1.2%</td>
    <td className="text-success">↑ Improving</td>
  </tr>
</tbody>
    </table>
  </div>
</div>

<div className="row g-4 mt-3">

  {/* PRODUCTION */}
  <div className="col-md-4">
    <div className="card shadow-sm p-3 h-100" style={{ borderRadius: "12px" }}>
      
      <h6 className="fw-semibold text-secondary mb-3" style={{ fontSize: "14px" }}>
        Production (March 2026)
      </h6>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted" style={{ fontSize: "13px" }}>Total Parts Produced</span>
        <span className="fw-bold" style={{ fontSize: "18px" }}>28,450 pcs</span>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted" style={{ fontSize: "13px" }}>Scrap</span>
        <span className="text-danger fw-semibold" style={{ fontSize: "14px" }}>
          285 pcs (1.0%)
        </span>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <span className="text-muted" style={{ fontSize: "13px" }}>Rework</span>
        <span className="text-warning fw-semibold" style={{ fontSize: "14px" }}>
          142 pcs (0.5%)
        </span>
      </div>

      <hr />

      <div className="d-flex justify-content-between mt-2">
        <span className="fw-semibold text-secondary" style={{ fontSize: "14px" }}>
          On-Time Delivery
        </span>
        <span className="text-success fw-bold" style={{ fontSize: "18px" }}>
          94.2%
        </span>
      </div>

    </div>
  </div>


  {/* PROCUREMENT */}
  <div className="col-md-4">
    <div className="card shadow-sm p-3 h-100" style={{ borderRadius: "12px" }}>
      
      <h6 className="fw-semibold text-secondary mb-3" style={{ fontSize: "14px" }}>
        Procurement Status
      </h6>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted" style={{ fontSize: "13px" }}>Pending POs</span>
        <span className="fw-semibold" style={{ fontSize: "15px" }}>8 orders</span>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted" style={{ fontSize: "13px" }}>Value</span>
        <span className="fw-bold" style={{ fontSize: "15px" }}>₹24.5 L</span>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted" style={{ fontSize: "13px" }}>Awaiting Approval</span>
        <span className="text-warning fw-semibold" style={{ fontSize: "15px" }}>3</span>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <span className="text-muted" style={{ fontSize: "13px" }}>Overdue Deliveries</span>
        <span className="text-danger fw-semibold" style={{ fontSize: "15px" }}>1</span>
      </div>

      <hr />

      <div className="d-flex justify-content-between mt-2">
        <span className="fw-semibold text-secondary" style={{ fontSize: "14px" }}>
          Avg Supplier Rating
        </span>
        <span className="text-success fw-bold" style={{ fontSize: "18px" }}>
          4.2 / 5.0
        </span>
      </div>

    </div>
  </div>


  {/* SALES */}
  <div className="col-md-4">
    <div className="card shadow-sm p-3 h-100" style={{ borderRadius: "12px" }}>
      
      <h6 className="fw-semibold text-secondary mb-3" style={{ fontSize: "14px" }}>
        Sales (March 2026)
      </h6>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted" style={{ fontSize: "13px" }}>Total Orders</span>
        <span className="fw-bold" style={{ fontSize: "18px" }}>23 orders</span>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted" style={{ fontSize: "13px" }}>Order Value</span>
        <span className="fw-bold" style={{ fontSize: "15px" }}>₹62.5 L</span>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <span className="text-muted" style={{ fontSize: "13px" }}>Pending Quotations</span>
        <span className="text-warning fw-semibold" style={{ fontSize: "15px" }}>5</span>
      </div>

      <hr />

      <div className="d-flex justify-content-between mt-2">
        <span className="fw-semibold text-secondary" style={{ fontSize: "14px" }}>
          On-Time Delivery
        </span>
        <span className="text-success fw-bold" style={{ fontSize: "18px" }}>
          94.2%
        </span>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  );
}