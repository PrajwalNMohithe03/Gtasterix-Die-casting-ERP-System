import React, { useState, useEffect } from "react";

export default function ViewEditUserForm({ onClose, user, mode }) {

  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    id: "",
    role: "",
    phone: "",
    department: "",
    status: "Active",
  });

  // Fill data when user comes
  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.name || "",
        email: user?.email || "",
        id: user?.id || user?.employeeId || user?.empId || "",
        role: user?.role || "",
        phone: user?.phone || "",
        department: user?.department || "",
        status: user?.status || "Active",
      });
    }
  }, [user]);

  const isView = mode === "view";

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
          height: "600px",
          borderRadius: "10px",
        }}
      >

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <h5 className="fw-bold mb-0">
            {mode === "view"
              ? `Edit User: ${formData.name}`
              : `Edit User: ${formData.name}`}
          </h5>

          <span
            onClick={onClose}
            style={{ cursor: "pointer", fontSize: "20px" }}
          >
            𐤕
          </span>
        </div>

        {/* TABS */}
        <div className="d-flex gap-4 border-bottom mb-3 pb-2">
          {["personal", "permissions", "activity"].map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                cursor: "pointer",
                paddingBottom: "5px",
                borderBottom: activeTab === tab ? "2px solid #0d6efd" : "none",
                fontWeight: activeTab === tab ? "600" : "500",
                color: activeTab === tab ? "#0d6efd" : "#6c757d",
              }}
            >
              {tab === "personal" && "Personal Info"}
              {tab === "permissions" && "Permissions"}
              {tab === "activity" && "Activity Log"}
            </span>
          ))}
        </div>

        {/* SCROLLABLE CONTENT */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingRight: "5px",
          }}
          className="custom-scroll"
        >
          {/* PERSONAL TAB */}
          {activeTab === "personal" && (
            <div>
              {/* PROFILE / AVATAR */}
              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-light d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    fontSize: "30px",
                    color: "#6c757d",
                  }}
                >
                  NA
                </div>


<div className="ms-3 d-flex flex-column">
  <button
    style={{
      backgroundColor: "#ffffff",
      color: "#111315",
      border: "1px solid #ccc",
      padding: "5px 12px",
      borderRadius: "6px",
      fontWeight: "500",
      cursor: "pointer",
      fontSize: "0.85rem",
      width: "fit-content"
    }}
  >
    Change Avatar
  </button>

  <small className="text-muted mt-1" style={{ fontSize: "0.75rem" }}>
    JPG, PNG or GIF (Max 2MB)
  </small>
</div>
</div>

        {/* FORM */}
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              className="form-control"
              value={formData.name}
              disabled={isView}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              value={formData.email}
              disabled={isView}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="col-md-6">
                  <label className="form-label">Role *</label>
                  <select className="form-select">
                    <option>Select Role</option>
                    <option>Admin</option>
                    <option>Production Manager</option>
                    <option>Quality Manager</option>
                    <option>Procurement Manager</option>
                    <option>Sales Manager</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Employee ID</label>
                  <input className="form-control" placeholder="EMP-001" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    className="form-control"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Department</label>
                  <select className="form-select">
                    <option>Select Department</option>
                    <option>Production</option>
                    <option>Quality</option>
                    <option>Procurement</option>
                    <option>Sales</option>
                    <option>Administration</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Date of Joining</label>
                  <input type="date" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                {/* PASSWORD */}
                <div className="col-12 mt-3">
                  <br></br>
                  <h6 className="fw-bold">Initial Password</h6>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Confirm Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Require password change on first login
                </label>
              </div>
            </div>
          )}

          {/* PERMISSIONS TAB */}
          {activeTab === "permissions" && (
            <div>
              <h6 className="fw-bold mb-1">Module Permissions</h6>
              <small className="text-muted">
                Configure access rights for each module
              </small>

              <table className="table table-bordered text-center mt-4">
                <thead className="table-light">
                  <tr>
                    <th className="text-start" style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>MODULE</th>
                    <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>VIEW</th>
                    <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>CREATE</th>
                    <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>EDIT</th>
                    <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>DELETE</th>
                    <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>SPECIAL</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dashboard */}
                  <tr>
                    <td className="text-start">Dashboard</td>
                    <td>
                      <input type="checkbox" defaultChecked />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  {/* Full Access Modules */}
                  {[
                    "User Management",
                    "Items & BOM",
                    "Procurement",
                    "Production",
                    "Quality Control",
                    "Sales & Orders",
                  ].map((mod, i) => (
                    <tr key={i}>
                      <td className="text-start">{mod}</td>
                      <td>
                        <input type="checkbox" defaultChecked />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td></td>
                    </tr>
                  ))}

                  {/* Analytics & Camera */}
                  {["Analytics & OEE", "Camera Detection"].map((mod, i) => (
                    <tr key={i}>
                      <td className="text-start">{mod}</td>
                      <td>
                        <input type="checkbox" defaultChecked />
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  ))}

                  {/* System Settings */}
                  <tr>
                    <td className="text-start">System Settings</td>
                    <td>
                      <input type="checkbox" defaultChecked />
                    </td>
                    <td></td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-primary">Apply Template</button>
                <button className="btn btn-outline-secondary">
                  Reset to Role Default
                </button>
              </div>
            </div>
          )}

          {/* ACTIVITY TAB */}
          {activeTab === "activity" && (
            <div>
              <h6 className="fw-bold mb-0">Recent Activity</h6>
              <small className="text-muted mb-5">
                User activity log for the last 7 days
              </small>
              <div className="custom-scroll" style={{ maxHeight: "300px" }}>
                <table className="table table-bordered mb-5 mt-4">
                  <thead className="table-light">
                     <tr>
                     <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>TIMESTAMP</th>
                     <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>ACTION</th>
                     <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>MODULE</th>
                     <th style={{ fontSize: "14px", color: "#6c757d", fontWeight: "500" }}>IP ADDRESS</th>
                    </tr>
                 </thead>
    <tbody>
  <tr>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350"}}>10-Mar-2026 09:15</td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>Logged in</td>
    <td
      style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "5px", 
        fontSize: "12px",
        fontWeight: "500",
        backgroundColor: "#cdcdf6", 
        color: "#34017a", 
        textAlign: "center",
        minWidth: "80px",
        marginTop: "5px",
        marginLeft: "4px",
      }}
    >
      Authentication
    </td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>192.168.1.45</td>
  </tr>

  <tr>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>10-Mar-2026 09:20</td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>Viewed Work Order WO-2024-0891</td>
    <td
      style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "5px",
        fontSize: "12px",
        fontWeight: "500",
        backgroundColor: "#cdcdf6", 
        color: "#34017a", 
        textAlign: "center",
        minWidth: "80px",
        marginTop: "5px",
        marginLeft: "4px",
      }}
    >
      Production
    </td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>192.168.1.45</td>
  </tr>

  <tr>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>10-Mar-2026 09:35</td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>Updated Machine DCM-01 status</td>
    <td
      style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "5px",
        fontSize: "12px",
        fontWeight: "500",
        backgroundColor: "#cdcdf6", 
        color: "#34017a", 
        textAlign: "center",
        minWidth: "80px",
        marginTop: "5px",
        marginLeft: "4px",
      }}
    >
      Production
    </td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>192.168.1.45</td>
  </tr>

  <tr>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>09-Mar-2026 16:40</td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>Created NCR-004</td>
    <td
      style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "5px",
        fontSize: "12px",
        fontWeight: "500",
        backgroundColor: "#cdcdf6", 
        color: "#34017a", 
        textAlign: "center",
        minWidth: "80px",
        marginTop: "5px",
        marginLeft: "4px",
      }}
    >
      Quality
    </td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>192.168.1.45</td>
  </tr>

  <tr>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>09-Mar-2026 14:20</td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>Exported Analytics Report</td>
    <td
      style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "5px",
        fontSize: "12px",
        fontWeight: "500",
        backgroundColor: "#cdcdf6", 
        color: "#34017a", 
        textAlign: "center",
        minWidth: "80px",
        marginTop: "5px",
        marginLeft: "4px",
      }}
    >
      Analytics
    </td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>192.168.1.45</td>
  </tr>

  <tr>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>09-Mar-2026 11:15</td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>Logged in</td>
    <td
      style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "5px",
        fontSize: "12px",
        fontWeight: "500",
        backgroundColor: "#cdcdf6", 
        color: "#34017a", 
        textAlign: "center",
        minWidth: "80px",
        marginTop: "5px",
        marginLeft: "4px",
      }}
    >
      Authentication
    </td>
    <td style={{ fontSize: "15px", color: "#090909", fontWeight: "350" }}>192.168.1.45</td>
  </tr>
</tbody>

                </table>
              </div>
            </div>
          )}
        </div>
        

        {/* FOOTER */}
        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>

          {(mode === "view" || mode === "edit") && (
           <button className="btn btn-primary">
              💾 Save Changes
           </button>
           )}
        </div>
          
          {/* Custom Scrollbar CSS */}
        <style jsx>{`
          .custom-scroll {
            overflow-x: hidden;
            overflow-y: auto;
          }

          .custom-scroll::-webkit-scrollbar {
            width: 6px;
          }

          .custom-scroll::-webkit-scrollbar-thumb {
            background: #464343;
            border-radius: 10px;
          }

          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: #797676;
          }
        `}</style>

      </div>
    </div>
  );
}