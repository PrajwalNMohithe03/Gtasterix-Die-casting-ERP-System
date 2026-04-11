import React, { useState, useEffect, useRef } from "react";
import AddUserForm from "./AddUserForm";
import ViewEditUserForm from "./ViewEditUserForm";
import { FaEye, FaEdit, FaEllipsisV } from "react-icons/fa";

export default function UserManagement() {
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedUser, setSelectedUser] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const dropdownRef = useRef(null);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [mode, setMode] = useState("add");

  const users = [
    { initials: "VS", name: "Vikram Singh", email: "vikram.singh@precisioncast.com", role: "Admin", lastLogin: "Today 09:15 AM", status: "Online", color: "#7c3aed" },
    { initials: "RK", name: "Rajesh Kumar", email: "rajesh.kumar@precisioncast.com", role: "Production Manager", lastLogin: "Today 08:30 AM", status: "Online", color: "#2563eb" },
    { initials: "PS", name: "Priya Sharma", email: "priya.sharma@precisioncast.com", role: "Quality Manager", lastLogin: "Today 10:00 AM", status: "Online", color: "#059669" },
    { initials: "AP", name: "Amit Patel", email: "amit.patel@precisioncast.com", role: "Procurement Manager", lastLogin: "Yesterday 06:00 PM", status: "Offline", color: "#ea580c" },
    { initials: "SM", name: "Sneha Mehta", email: "sneha.mehta@precisioncast.com", role: "Sales Manager", lastLogin: "Today 09:45 AM", status: "Online", color: "#f925bd" },
    { initials: "SN", name: "Suresh Nair", email: "suresh.nair@precisioncast.com", role: "Production Manager", lastLogin: "2 days ago", status: "Offline", color: "#2563eb" },
    { initials: "KJ", name: "Kavita Joshi", email: "kavita.joshi@precisioncast.com", role: "Quality Manager", lastLogin: "Today 07:50 AM", status: "Online", color: "#059669" },
  ];

  const filteredUsers = users.filter((user) => {
    return (
      (selectedRole === "All Roles" || user.role === selectedRole) &&
      (selectedStatus === "All Status" || user.status === selectedStatus)
    );
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenuIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ marginLeft: "250px", paddingTop: "80px" }}>
      <div className="container-fluid">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
          <div>
            <h3 className="fw-bold">User Management</h3>
            <p className="text-muted">Manage system users, roles, and permissions</p>
          </div>
          <button onClick={() =>{setMode("add"); setShowForm(true);} }
          className="btn btn-primary" style={{padding: "10px 35px", background: "#17039d", color: "#fff"}}>
            + Add New User
          </button>
        </div>

        {showForm && mode === "add" && (
  <AddUserForm
    onClose={() => setShowForm(false)}
  />
)}

{showForm && (mode === "view" || mode === "edit") && (
  <ViewEditUserForm
    user={selectedUser}
    mode={mode}
    onClose={() => setShowForm(false)}
  />
)}

        {/* FILTER BAR */}
        <div className="card p-3 mb-3">
          <div className="d-flex align-items-center gap-3 flex-nowrap">
            <input
              className="form-control form-control-lg"
              placeholder="⌕ Search by name or email..."
              style={{ flex: 1, fontSize: "18px" }}
            />
            <select className="form-select form-select-lg" style={{ width: "200px", fontSize: "16px" }} value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
              <option>All Roles</option>
              <option>Admin</option>
              <option>Production Manager</option>
              <option>Quality Manager</option>
              <option>Procurement Manager</option>
              <option>Sales Manager</option>
            </select>
            <select className="form-select form-select-lg" style={{ width: "160px", fontSize: "16px" }} value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option>All Status</option>
              <option>Online</option>
              <option>Offline</option>
            </select>
           {/* THE THREE BUTTONS NEXT TO STATUS */}
    <div className="d-flex gap-2">
      <button className="btn btn-light border rounded" style={{ width: "42px", height: "42px" }}><i className="bi bi-upload"></i></button>
      <button className="btn btn-light border rounded" style={{ width: "42px", height: "42px" }}><i className="bi bi-download"></i></button>
      <button className="btn btn-light border rounded" style={{ width: "42px", height: "42px" }}><i className="bi bi-printer"></i></button>
    </div>
    </div>
          <p className="text-muted mt-2 mb-0 small">Showing {filteredUsers.length} of {users.length} users</p>
        </div>
        

        {/* TABLE */}
        <div className="card p-3">
          <table className="text-muted table align-middle table-sm mb-3 small">
            <thead className="text-muted" 
            style={{
                   fontSize: "12px",
                   color: "#6c757d",  
                   textTransform: "uppercase",
                   letterSpacing: "0.5px"
                 }}>
              <tr>
                <th>USER</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>LAST LOGIN</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u, i) => (
                <tr key={i}>
                  <td>
                    <div className="d-flex align-items-center mt-3">
                      <div
                        className="rounded-circle text-white d-flex align-items-center justify-content-center me-2"
                        style={{ width: "40px", height: "40px", backgroundColor: u.color, fontWeight: "bold" }}
                      >
                        {u.initials}
                      </div>
                      <div>
                        <div className="fw-bold">{u.name}</div>
                        <small>ID: {i + 1}</small>
                      </div>
                    </div>
                  </td>
                  <td>{u.email}</td>
                  <td>
                    <span
                      className="px-3 py-1"
                      style={{
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "500",
                        backgroundColor:
                          u.role === "Admin" ? "#ede7f6" :
                          u.role === "Production Manager" ? "#e3f2fd" :
                          u.role === "Quality Manager" ? "#e0f2f1" :
                          u.role === "Procurement Manager" ? "#fff3e0" : "#fce4ec",
                        color:
                          u.role === "Admin" ? "#6f42c1" :
                          u.role === "Production Manager" ? "#0d6efd" :
                          u.role === "Quality Manager" ? "#198754" :
                          u.role === "Procurement Manager" ? "#fd7e14" : "#d63384",
                      }}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td>{u.lastLogin}</td>
                  <td>
                   <span
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    color: "#fff",
    backgroundColor: u.status === "Online" ? "#54ad69" : "#abb6c0",
  }}
>
  {/*STATUS DOT */}
  <span
    style={{
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: u.status === "Online" ? "#079027" : "#5a5c5d",
      display: "inline-block"
    }}
  ></span>

  {u.status}
</span>
 </td>


  {/* ACTIONS */}
  <td style={{ position: "relative" }}>
  <FaEye
  className="me-2 text-primary"
  style={{ cursor: "pointer" }}
  title="View User"
  onClick={() => {
    setSelectedUser(u);
    setMode("view");       
    setShowForm(true);
  }}
/>

<FaEdit
  className="me-2"
  style={{ cursor: "pointer" }}
  title="Edit User"
  onClick={() => {
    setSelectedUser(u);
    setMode("edit");        
    setShowForm(true);
  }}
/>

  <div style={{ display: "inline-block", position: "relative" }}>
    <FaEllipsisV
      style={{ cursor: "pointer" }}
      onClick={() => setOpenMenuIndex(openMenuIndex === i ? null : i)}
    />
    {openMenuIndex === i && (
      <div className="dropdown-menu show position-absolute" style={{ right: 0, top: "28px", minWidth: "200px" }}>
        <button className="dropdown-item d-flex align-items-center" onClick={() => console.log("Edit Permissions", u)}>
          <i className="bi bi-shield-lock me-2"></i>Edit Permissions
        </button>
        <button className="dropdown-item d-flex align-items-center" onClick={() => console.log("Reset Password", u)}>
          <i className="bi bi-key me-2"></i>Reset Password
        </button>
        <button className="dropdown-item d-flex align-items-center" onClick={() => console.log("Send Reset Email", u)}>
          <i className="bi bi-envelope me-2"></i>Send Password Reset Email
        </button>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item d-flex align-items-center" onClick={() => console.log("Activity Log", u)}>
          <i className="bi bi-activity me-2"></i>View Activity Log
        </button>
        <button className="dropdown-item d-flex align-items-center" onClick={() => console.log("Login History", u)}>
          <i className="bi bi-clock-history me-2"></i>Login History
        </button>
        <div className="dropdown-divider"></div>
        <button
          className="dropdown-item text-danger d-flex align-items-center"
          onClick={() => { setSelectedUser(u); setShowDeactivateModal(true); setOpenMenuIndex(null); }}
        >
          <i className="bi bi-person-x me-2"></i>Deactivate User
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

        {/* ✅ DEACTIVATE MODAL */}
{showDeactivateModal && selectedUser && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{
      backgroundColor: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(3px)",
      zIndex: 2000
    }}
  >
    <div
      className="card shadow-lg"
      style={{
        width: "420px",
        borderRadius: "16px",
        zIndex: 2001,
        border: "none",
        overflow: "hidden"
      }}
    >
      
      {/* HEADER */}
      <div
        style={{
          background: "#f5f5f7",
          color: "#0a0606",
          padding: "15px 20px",
          fontSize: "19px",
          fontWeight: "600"
        }}
      >
        <i className="bi bi-person-x me-2" style={{ fontSize: "22px" }}></i> Deactivate User
      </div>

      {/* BODY */}
      <div style={{ padding: "20px" }}>
        <p style={{ fontSize: "17px", color: "#555" }}>
          Are you sure you want to deactivate {" "} 
          <strong style={{ color: "#000" }}>{selectedUser.name}</strong>?
          They will lose access to the system immediately.
        </p>

        {/* BUTTONS */}
        <div className="d-flex justify-content-end gap-3 mt-4">
          <button
            className="btn btn-light"
            style={{
              padding: "12px 22px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontWeight: "500",
              color: "black",
              minWidth: "180px",
            }}
            onClick={() => setShowDeactivateModal(false)}
          >
            Cancel
          </button>

          <button
            className="btn btn-danger"
            style={{
              padding: "12px 22px",
              fontSize: "16px",
              borderRadius: "8px",
              fontWeight: "500",
              minWidth: "180px",
            }}
            onClick={() => {
              console.log("User Deactivated:", selectedUser);
              setShowDeactivateModal(false);
              setSelectedUser(null);
            }}
          >
           Deactivate
          </button>
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}