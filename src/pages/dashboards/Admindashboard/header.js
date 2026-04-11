import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 

const Header = ({ setCollapsed, collapsed }) => {
  const [open, setOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

const cancelLogout = () => setShowConfirm(false);

const confirmLogout = () => {
  console.log("Logged out");
  setShowConfirm(false);
  navigate("/"); 
};

  const userOptions = [
    "⚙️ Profile Settings",
    "🗝️ Change Password",
    "🌙 Toggle Dark Mode",
    "⏻ Logout",
  ];

 const getTitle = () => {
  switch (location.pathname.toLowerCase()) {
    case "/dashboard":
      return "Dashboard";
    case "/usermanagement":
      return "User Management"; 
    case "/itembom":
      return "Item & BOM";
    case "/procurement":
      return "Procurement";
    case "/production":
      return "Production";
    case "/quality":
      return "Quality";
    case "/sales":
      return "Sales";
    case "/settings":
      return "System Settings";
    default:
      return "Dashboard";
  }
};

  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm"
      style={{
        position: "fixed",
        top: 0,
        left: collapsed ? "80px" : "250px",
        right: 0,
        transition: "left 0.3s",
        zIndex: 999,
      }}
    >
      {/* LEFT */}
      <div className="d-flex align-items-center gap-3">
        <span
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </span>

        {/* Dynamic Title */}
        <p className="mt-3 mb-0">🏠 / {getTitle()}</p>
      </div>

      {/* RIGHT */}
      <div className="d-flex align-items-center gap-3">

        {/* Search */}
        <input
          type="text"
          className="form-control"
          placeholder="⌕ Search items, work orders, customers.."
          style={{ width: "320px" }}
        />

        {/* 🔔 Notification */} 
        <div className="position-relative"> 
          <div style={{ cursor: "pointer", fontSize: "15px", marginLeft: "10px" }} 
          onClick={() => setShowNotif(!showNotif)} > 
          🔔 
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 
            4 
          </span> 
          </div> 
        {/* 🔔 Notification Dropdown */} 
      {showNotif && 
      ( <div className="dropdown-menu show shadow p-2" 
      style={{ width: "400px", right: 0, left: "auto", marginTop: "10px", }} > 

      {/* Heading */} 
      <div className="px-2 py-2 border-bottom mb-2"> 
      <b>Recent Notifications (4 unread)</b> 
      </div> 

      {/* Scrollable List */} 
      <div style={{ maxHeight: "350px", overflowY: "auto", overflowX: "hidden", width: "100%", paddingRight: "5px", }} > 
        
        {/* Notification Items */} 
        {[ { icon: "🔴", text: "DCM-04 temperature alarm — Die temperature exceeded 220°C threshold", small: "2 mins ago", }, 
          { icon: "🟡", text: "Die DM-001 approaching maintenance — 42,800 / 45,000 shots", small: "15 mins ago", }, 
          { icon: "🟡", text: "Stock Alert — RM-003 — Below reorder level", small:"1 hr ago", }, 
          { icon: "🟢", text: "WO-2024-0893 completed — 1,200 pcs produced", small:"2 hr ago", }, 
          { icon: "🟢", text: "PO-2024-1101 fully received — 10,000 kg — Aluminum A380 accepted", small: "Yesterday", }, 
          { icon: "🔵", text: "New quotation received from Kirloskar — RFQ-2024-0112", small: "Yesterday", }, 
          { icon: "🔵", text: "NCR-004 assigned — Assigned to Priya Sharma", small: "3 hrs ago", },
           ].map((item, index) => ( <div key={index} className="dropdown-item mb-1" 
           style={{ background: "rgba(173, 216, 230, 0.2)", borderRadius: "5px", padding: "8px", whiteSpace: "normal", wordBreak: "break-word", }} > 
           {item.icon} {item.text} {item.small && ( <div className="small text-muted"> 
            {item.small}
          </div> )}
           </div> ))} 
           </div> 
           
           {/* Footer: All Notifications */} 
           <div className="text-center mt-2 pt-2 border-top" style={{ fontSize: "14px", color: "blue", fontWeight: "bold" }} > 
            View All Notifications → 
           </div> 
        </div> )} 
     </div>

        {/* Profile */}
        <div className="dropdown">
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          >
            <div
              className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2"
              style={{ width: "25px", height: "25px", fontWeight: "bold" }}
            >
              VS
            </div>
            <div>
              <div className="fw-bold" style={{ fontSize: "14px" }}>
                Vikram Singh
              </div>
              <small className="text-muted">Admin ⮟</small>
            </div>
          </div>

          {open && (
            <div
              className="dropdown-menu show mt-3 p-0 shadow"
              style={{ minWidth: "260px", right: 0, left: "auto" }}
            >
              <div className="px-3 py-2 border-bottom">
                <div className="fw-bold">Vikram Singh</div>
                <small className="d-block text-muted">
                  vikram.singh@precisioncast.com
                </small>
                <small className="text-muted">Role: Admin</small>
              </div>

              {userOptions.map((item, index) => (
  <button
    key={index}
    className="dropdown-item"
    style={{
      padding: "10px 15px",
      color: item.toLowerCase().includes("logout")
        ? "red"
        : "black",
    }}
    onClick={() => {
      if (item.toLowerCase().includes("logout")) {
        setShowConfirm(true); // modal open
      } else {
        console.log(item);
      }
    }}
  >
    {item}
  </button>
))}
            </div>
          )}
        </div>
      </div>
    
     {showConfirm && (
  <>
    {/* Backdrop */}
    <div className="modal-backdrop fade show"></div>

    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">

          <div className="modal-header">
            <h5 className="modal-title">
              Confirm Logout
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={cancelLogout}
            ></button>
          </div>

          <div className="modal-body">
            Are you sure you want to logout?
            <br />
            <small>Any unsaved changes will be lost.</small>
          </div>

          <div className="modal-footer justify-content-center gap-3">
            <button
              className="btn btn-secondary"
              onClick={cancelLogout}
            >
              Cancel
            </button>

            <button
              className="btn btn-danger"
              onClick={confirmLogout}
            >
              Yes, Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  </>
)}
</div>
  );
};

export default Header;