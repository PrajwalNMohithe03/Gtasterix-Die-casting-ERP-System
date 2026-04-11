import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AddNewItem({ onClose }) {
  const [activeTab, setActiveTab] = useState("basic");

  return (
   <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "rgba(0,0,0,0.3)",
        zIndex: 999,
      }}
    >
      {/* CARD */}
      <div
        className="card d-flex flex-column p-4 shadow"
        style={{
             width: "900px",
             borderRadius: "10px",
             }}
        >
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <h5 className="mb-0 fw-bold">Add New Item</h5>
          <span style={{ cursor: "pointer" }} onClick={onClose}>
            𐤕
          </span>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3">
          {["basic", "specs", "inventory", "pricing", "supplier", "attachments"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "basic" && "Basic Info"}
                {tab === "specs" && "Technical Specifications"}
                {tab === "inventory" && "Inventory"}
                {tab === "pricing" && "Pricing"}
                {tab === "supplier" && "Supplier"}
                {tab === "attachments" && "Attachments"}
              </button>
            </li>
          ))}
        </ul>

        {/* ====== BASIC INFO ====== */}
        {activeTab === "basic" && (
          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Item Code *</label>
              <input className="form-control" placeholder="e.g., RM-001" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Item Name *</label>
              <input className="form-control" placeholder="Enter item name" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Category *</label>
              <select className="form-control">
                <option>Raw Material</option>
                <option>Finished Goods</option>
                <option>Component</option>
                <option>Die/Mold</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Type</label>
              <select className="form-control">
                <option>Select Type</option>
                <option>Metal</option>
                <option>Chemical</option>
                <option>Automotive</option>
                <option>Industrial</option>
                <option>Electrical</option>
                <option>Hardware</option>
                <option>Seal</option>
                <option>Tooling</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Unit of Measurement *</label>
              <select className="form-control">
                <option>Kilogram (kg)</option>
                <option>Pieces (pcs)</option>
                <option>Liters</option>
                <option>Meters</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Status</label>
              <select className="form-control">
                <option>Active</option>
                <option>Inactive</option>
                <option>Discontinued</option>
              </select>
            </div>

            <div className="col-md-12 mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" placeholder="Enter item description"></textarea>
            </div>

          </div>
        )}

        {activeTab === "specs" && (
  <div className="row">

    <div className="col-md-12 mb-3">
        <label className="form-label">Technical Specifications</label>
        <textarea className="form-control" placeholder="Enter technical specifications, material properties, dimensions, etc." 
        style={{ height: "150px" }}></textarea>
    </div>

    {/* Weight */}
    <div className="col-md-6 mb-3">
      <label>Weight (kg)</label>
      <input
        type="number"
        className="form-control"
        placeholder="0.000"
        step="0.001"
      />
    </div>

    {/* Dimensions */}
    <div className="col-md-6 mb-3">
      <label>Dimensions (L x W x H)</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g., 150 x 80 x 45 mm"
      />
    </div>

    {/* Material Grade */}
    <div className="col-md-6 mb-3">
      <label>Material Grade</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g., A380, ADC12"
      />
    </div>

    {/* Color / Finish */}
    <div className="col-md-6 mb-3">
      <label>Color / Finish</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g., Natural, Anodized"
      />
    </div>

  </div>
)}
         
         {activeTab === "inventory" && (
  <div className="row">

    {/* Current Stock */}
    <div className="col-md-6 mb-3">
      <label>Current Stock</label>
      <input
        type="number"
        className="form-control"
        placeholder="0"
      />
    </div>

    {/* Reorder Level */}
    <div className="col-md-6 mb-3">
      <label>Reorder Level</label>
      <input
        type="number"
        className="form-control"
        placeholder="0"
      />
    </div>

    {/* Storage Location */}
    <div className="col-md-6 mb-3">
      <label>Storage Location</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g., Warehouse A - Bay 1"
      />
    </div>

    {/* Avg Consumption */}
    <div className="col-md-6 mb-3">
      <label>Avg. Consumption (per week)</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g., 850 kg/week"
      />
    </div>

    {/* Last Purchase Date */}
    <div className="col-md-6 mb-3">
      <label>Last Purchase Date</label>
      <input
        type="date"
        className="form-control"
      />
    </div>

    {/* Last Production Date */}
    <div className="col-md-6 mb-3">
      <label>Last Production Date</label>
      <input
        type="date"
        className="form-control"
      />
    </div>

  </div>
)}


     {activeTab === "pricing" && (
  <div className="row">

    {/* Unit Cost */}
    <div className="col-md-6 mb-3">
      <label>Unit Cost (₹)</label>
      <input
        type="number"
        className="form-control"
        placeholder="0.00"
        step="0.01"
      />
    </div>

    {/* Selling Price */}
    <div className="col-md-6 mb-3">
      <label>Selling Price (₹)</label>
      <input
        type="number"
        className="form-control"
        placeholder="0.00"
        step="0.01"
      />
    </div>

    {/* Currency */}
    <div className="col-md-6 mb-3">
      <label>Currency</label>
      <select className="form-control">
        <option>INR (₹)</option>
        <option>USD ($)</option>
        <option>EUR (€)</option>
      </select>
    </div>

    {/* Tax Rate */}
    <div className="col-md-6 mb-3">
      <label>Tax Rate (%)</label>
      <input
        type="number"
        className="form-control"
        placeholder="18.00"
        step="0.01"
      />
    </div>

  </div>
)}
        
{activeTab === "supplier" && (
  <div className="row">

    {/* Primary Supplier */}
    <div className="col-md-6 mb-3">
      <label>Primary Supplier</label>
      <select className="form-control">
        <option>Select Supplier</option>
        <option>Hindalco Industries</option>
        <option>Vedanta Zinc</option>
        <option>Sundaram Fasteners</option>
        <option>Chem-Lube Technologies</option>
        <option>Bharat Toolings</option>
      </select>
    </div>

    {/* Supplier Part Number */}
    <div className="col-md-6 mb-3">
      <label>Supplier Part Number</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter supplier's part number"
      />
    </div>

    {/* Lead Time */}
    <div className="col-md-6 mb-3">
      <label>Lead Time (days)</label>
      <input
        type="number"
        className="form-control"
        placeholder="7"
      />
    </div>

    {/* Minimum Order Quantity */}
    <div className="col-md-6 mb-3">
      <label>Minimum Order Qty</label>
      <input
        type="number"
        className="form-control"
        placeholder="100"
      />
    </div>

  </div>
)}


{activeTab === "attachments" && (
  <div className="row">

    {/* Upload Box */}
    <div className="col-md-12 mb-3">
      <div
        className="border rounded p-4 text-center"
        style={{
          border: "3px dashed #adb5bd",
          borderRadius: "8px",
          backgroundColor: "#f8f9fa",
          cursor: "pointer",
          height: "250px" 
        }}
        onClick={() => document.getElementById("fileInput").click()}
      >

         <i className="bi bi-cloud-upload"
           style={{ fontSize: "32px", color: "#6c757d" }}
          ></i>
        <p className="mb-2 mt-3">
          Drag and drop files here, or click to browse
        </p>
        <p className="text-muted small">
          Supported: PDF, Images, CAD files (Max 10MB each)
        </p>

        <button className="btn btn-primary mt-2">
          Browse Files
        </button>

        {/* Hidden Input */}
        <input
          id="fileInput"
          type="file"
          multiple
          style={{ display: "none" }}
        />
      </div>
    </div>

    {/* Attached Files List */}
    <div className="col-md-12">
      <h6>Attached Files (0):</h6>
       <p className="text-muted small">No files attached yet</p>
    </div>

  </div>
)}


        {/* FOOTER - always visible */}
        <div className="d-flex justify-content-end gap-2 mt-4 border-top pt-3">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary">💾 Save Item</button>
        </div>

      </div>
    </div>
  );
}