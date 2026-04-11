import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddNewItemForm from "./AddNewItemForm";
import { FaEye, FaEdit, FaEllipsisV } from "react-icons/fa";

export default function ItemsBOM() {

const [showForm, setShowForm] = useState(false);
const [mode, setMode] = useState("add");

  const items = [
    { code: "RM-001", name: "Aluminum Alloy A380 Ingot", category: "Raw Material", type: "Metal", stock: "4,250", unit: "kg", status: "Active" },
    { code: "RM-002", name: "Zinc Alloy ZA-8 Ingot", category: "Raw Material", type: "Metal", stock: "1,800", unit: "kg", status: "Active" },
    { code: "RM-003", name: "Magnesium Alloy AZ91D", category: "Raw Material", type: "Metal", stock: "620", unit: "kg", status: "Low Stock" },
    { code: "RM-004", name: "Aluminum Alloy ADC12 Ingot", category: "Raw Material", type: "Metal", stock: "3,100", unit: "kg", status: "Active" },
    { code: "RM-005", name: "Die Release Agent (Lubricant)", category: "Raw Material", type: "Chemical", stock: "85", unit: "liters", status: "Active" },
    { code: "RM-006", name: "Shot Sleeve Lubricant", category: "Raw Material", type: "Chemical", stock: "40", unit: "liters", status: "Active" },

    { code: "FG-001", name: "Automotive Gearbox Housing", category: "Finished Good", type: "Automotive", stock: "320", unit: "pcs", status: "Active" },
    { code: "FG-002", name: "Engine Bracket - Left Side", category: "Finished Good", type: "Automotive", stock: "480", unit: "pcs", status: "Active" },
    { code: "FG-003", name: "Compressor Body Shell", category: "Finished Good", type: "Industrial", stock: "210", unit: "pcs", status: "Active" },
    { code: "FG-004", name: "Valve Cover Die Cast", category: "Finished Good", type: "Automotive", stock: "750", unit: "pcs", status: "Active" },
    { code: "FG-005", name: "Motorcycle Crankcase Cover", category: "Finished Good", type: "Automotive", stock: "1200", unit: "pcs", status: "Active" },
    { code: "FG-006", name: "LED Housing - Street Light", category: "Finished Good", type: "Electrical", stock: "560", unit: "pcs", status: "Active" },
    { code: "FG-007", name: "Water Pump Impeller Housing", category: "Finished Good", type: "Industrial", stock: "190", unit: "pcs", status: "Active" },

    { code: "DM-001", name: "Die - Gearbox Housing (2-Cav)", category: "Die/Mold", type: "Tooling", stock: "— (42,800 / 80,000)", unit: "—", status: "Active" },
    { code: "DM-002", name: "Die - Engine Bracket", category: "Die/Mold", type: "Tooling", stock: "— (15,200 / 50,000)", unit: "—", status: "Active" },
    { code: "DM-003", name: "Die - Compressor Body", category: "Die/Mold", type: "Tooling", stock: "— (61,400 / 80,000)", unit: "—", status: "Maintenance Due" },
    { code: "DM-004", name: "Die - Valve Cover (4-Cav)", category: "Die/Mold", type: "Tooling", stock: "— (8,500 / 60,000)", unit: "—", status: "Active" },

    { code: "CP-001", name: "Steel Insert - M8 Thread", category: "Component", type: "Hardware", stock: "12,400", unit: "pcs", status: "Active" },
    { code: "CP-002", name: "Brass Insert - M6 Thread", category: "Component", type: "Hardware", stock: "8,600", unit: "pcs", status: "Active" },
    { code: "CP-003", name: "Dowel Pin - 6mm dia", category: "Component", type: "Hardware", stock: "25,000", unit: "pcs", status: "Active" },
    { code: "CP-004", name: "O-Ring - Viton 45mm", category: "Component", type: "Seal", stock: "3,200", unit: "pcs", status: "Active" },
  ];

  // FILTER STATES
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  // FILTERED ITEMS
  const filteredItems = items.filter(item => {
    const categoryMatch = selectedCategory === "All Categories" || item.category === selectedCategory;
    const typeMatch = selectedType === "All Types" || item.type === selectedType;
    const statusMatch = selectedStatus === "All Status" || item.status === selectedStatus;
    return categoryMatch && typeMatch && statusMatch;
  });

const [openMenuIndex, setOpenMenuIndex] = useState(null);

  return (
    <div style={{ marginLeft: "250px", paddingTop: "80px" }}>
      <div className="container-fluid">

        {/* HEADER */} 
        <div className="d-flex justify-content-between align-items-center mb-3"> 
          <div> 
          <h2 className="fw-bold">
            Item Master
          </h2> 
        <p className="text-muted">Manage items, raw materials, finished goods, and components</p> 
        </div> 
      <button onClick={() =>{setMode("add"); setShowForm(true);} }
                className="btn btn-primary" style={{padding: "10px 35px", background: "#17039d", color: "#fff"}}>
                  + Add New Item
                </button>
              </div>
      
              {showForm && mode === "add" && (
        <AddNewItemForm
          onClose={() => setShowForm(false)}
        />
      )}

        {/* FILTER BAR */}
        <div className="card p-3 mb-3">
          <div className="d-flex align-items-center gap-3 flex-nowrap">
            <input
              className="form-control"
              placeholder="⌕ Search by item code or name..."
              style={{ maxWidth: "450px" }}
            />

            {/* Category Filter */}
            <select
              className="form-select form-select-lg"
              style={{ width: "180px", fontSize: "16px" }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Raw Material</option>
              <option>Finished Good</option>
              <option>Component</option>
              <option>Die/Mold</option>
            </select>

            {/* Type Filter */}
            <select
              className="form-select form-select-lg"
              style={{ width: "160px", fontSize: "16px" }}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option>All Types</option>
              <option>Metal</option>
              <option>Chemical</option>
              <option>Automotive</option>
              <option>Industrial</option>
              <option>Electrical</option>
              <option>Hardware</option>
              <option>Seal</option>
              <option>Tooling</option>
            </select>

            {/* Status Filter */}
            <select
              className="form-select form-select-lg"
              style={{ width: "150px", fontSize: "16px" }}
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Low Stock</option>
              <option>Maintenance Due</option>
            </select>

            {/* ICON BUTTONS */}
            <div className="d-flex gap-2 ms-auto mt-2 mt-md-0">
              <button className="btn btn-light border"><i className="bi bi-upload"></i></button>
              <button className="btn btn-light border"><i className="bi bi-download"></i></button>
              <button className="btn btn-light border"><i className="bi bi-printer"></i></button>
              <button className="btn btn-light border"><i className="bi bi-eye"></i></button>
            </div>
          </div>

          <p className="text-muted mt-2 mb-0 small">Showing {filteredItems.length} items</p>
        </div>

        {/* TABLE */}
        <div className="card p-3" style={{ borderRadius: "12px" }}>
          <table className="table align-middle">
            <thead className="text-muted small">
              <tr>
                <th>ITEM CODE</th>
                <th>ITEM NAME</th>
                <th>CATEGORY</th>
                <th>TYPE</th>
                <th>STOCK / SHOTS</th>
                <th>UNIT</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {filteredItems.map((item, i) => (
                <tr key={i} style={{ backgroundColor: item.status === "Low Stock" ? "#f8f3e7" : "transparent" }}>
                  <td style={{ color: "#1c1c1c", fontSize: "14px", fontWeight: "500" }}>{item.code}</td>
                  <td style={{ fontSize: "14px" }}>{item.name}</td>
                  <td className="text-muted" style={{ fontSize: "14px" }}>{item.category}</td>
                  <td className="text-muted" style={{ fontSize: "14px" }}>{item.type}</td>
                  <td style={{ fontSize: "14px" }}>{item.stock}</td>
                  <td className="text-muted" style={{ fontSize: "14px" }}>{item.unit}</td>

                  {/* STATUS */}
                  <td>
                    {(() => {
                      const status = item.status;

                      // RM-003 → Low Stock
                      if (item.code === "RM-003" && status === "Low Stock") {
                        return (
                          <span
                            className="badge"
                            style={{
                              backgroundColor: "#FFE5B4",
                              color: "#FF8C00",
                              cursor: "pointer",
                              transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#FF8C00")}
                          >
                            ⚠ Low Stock
                          </span>
                        );
                      }

                      // RM-006 → Active → same orange style
                      if (item.code === "RM-006" && status === "Active") {
                        return (
                          <span
                            className="badge"
                            style={{
                              backgroundColor: "#FFE5B4",
                              color: "#FF8C00",
                              cursor: "pointer",
                              transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#FF8C00")}
                          >
                            Active
                          </span>
                        );
                      }

                      // DM items → gray background + black text
                      if (["DM-001", "DM-002", "DM-003", "DM-004"].includes(item.code)) {
                        return (
                          <span className="badge" style={{ backgroundColor: "#d3d3d3", color: "#000000" }}>
                            {status}
                          </span>
                        );
                      }

                      // Default statuses
                      switch (status) {
                        case "Active":
                          return <span className="badge bg-success-subtle text-success">Active</span>;
                        case "Low Stock":
                          return <span className="badge bg-warning-subtle text-warning">⚠ Low Stock</span>;
                        case "Maintenance Due":
                          return <span className="badge bg-secondary-subtle text-secondary">Maintenance Due</span>;
                        default:
                          return <span className="badge bg-light text-dark">{status}</span>;
                      }
                    })()}
                  </td>

   {/* ACTIONS */}
<td>
  <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
  <FaEdit className="me-3" style={{ cursor: "pointer" }} />

  {/* Three dots dropdown */}
  <div style={{ display: "inline-block", position: "relative" }}>
    <FaEllipsisV
      style={{ cursor: "pointer" }}
      onClick={() => setOpenMenuIndex(openMenuIndex === i ? null : i)}
    />
    {openMenuIndex === i && (
      <div
        className="dropdown-menu show position-absolute"
        style={{ right: 0, top: "28px", minWidth: "200px", zIndex: 1000 }}
      >
        {/* Duplicate Item */}
        <button
          className="dropdown-item d-flex align-items-center"
          onClick={() => console.log("Duplicate Item", item)}
        >
          <i className="bi bi-files me-2"></i>Duplicate Item
        </button>

        {/* View BOM */}
        <button
          className="dropdown-item d-flex align-items-center"
          onClick={() => console.log("View BOM", item)}
        >
          <i className="bi bi-box-seam me-2"></i>View BOM
        </button>

        {/* Stock History */}
        <button
          className="dropdown-item d-flex align-items-center"
          onClick={() => console.log("Stock History", item)}
        >
          <i className="bi bi-clock-history me-2"></i>Stock History
        </button>

        <div className="dropdown-divider"></div>

        {/* Delete Item */}
        <button
          className="dropdown-item text-danger d-flex align-items-center">
          <i className="bi bi-trash me-2"></i>Delete Item
        </button>
      </div>
    )}
  </div>
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