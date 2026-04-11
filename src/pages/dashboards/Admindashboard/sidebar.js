import React, { useState } from "react";
import {
  FaTachometerAlt, FaUserCog, FaBoxOpen, FaShoppingBag,
  FaIndustry, FaClipboardCheck, FaFileInvoiceDollar,
  FaChartLine, FaCameraRetro
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
  { name: "User Management", icon: <FaUserCog />, path: "/users" },
  { name: "Items & BOM", icon: <FaBoxOpen />, path: "/items-bom" },
  { name: "Procurement", icon: <FaShoppingBag />, path: "/procurement" },
  { name: "Production", icon: <FaIndustry />, path: "/production" },
  { name: "Quality Control", icon: <FaClipboardCheck />, path: "/quality" },
  { name: "Sales & Orders", icon: <FaFileInvoiceDollar />, path: "/sales" },
  { name: "Analytics & OEE", icon: <FaChartLine />, path: "/analyticsoee" }, 
  { name: "Camera Detection", icon: <FaCameraRetro />, path: "/camera" },
  { name: "System Settings", icon: <FiSettings />, path: "/settings" },
];

export default function Sidebar({ collapsed }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMobileToggle = () => setMobileOpen(!mobileOpen);

  const handleLogout = () => setShowConfirm(true);

  const confirmLogout = () => {
    setShowConfirm(false);
    navigate("/");
  };

  const cancelLogout = () => setShowConfirm(false);

  return (
    <>
      {/* MOBILE BUTTON */}
      <div className="d-lg-none position-fixed top-0 start-0 m-2 zindex-tooltip">
        <button className="btn btn-primary" onClick={handleMobileToggle}>
          ☰
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className="d-flex flex-column text-white"
        style={{
          width: collapsed ? "90px" : "250px",
          height: "100vh",
          backgroundColor: "#0436a3",
          transition: "all 0.3s",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        {/* LOGO */}
        <div className="py-3 px-3 border-bottom" style={{ borderBottom: "1px solid #5a7cff" }}>
          <h5 className="m-0">{collapsed ? "PC" : "Precision Cast"}</h5>
          {!collapsed && <small className="text-light">ERP System</small>}
        </div>

        {/* MENU */}
        <div
          className="flex-grow-1"
          style={{
            overflowY: "auto",
            paddingBottom: "10px",
            scrollbarWidth: "thin",
            scrollbarColor: "gray black",
          }}
        >
          <ul className="nav flex-column mt-2">
            {sidebarItems.map((item, idx) => {
              const isActive = location.pathname === item.path;

              return (
                <li
                  key={idx}
                  className="nav-item d-flex align-items-center px-3 py-3"
                  onClick={() => navigate(item.path)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: isActive ? "#0d6efd" : "transparent",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0d6efd")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = isActive ? "#0d6efd" : "transparent")
                  }
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>

                  {!collapsed && (
                    <span className="ms-3" style={{ fontSize: "16px" }}>
                      {item.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* USER + LOGOUT */}
        <div className="border-top" style={{ borderTop: "1px solid #4063f0" }}>
          <div className="d-flex align-items-center p-3">
            <div
              className="bg-light text-dark rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "30px", height: "30px", fontWeight: "bold" }}
            >
              VS
            </div>

            {!collapsed && (
              <div className="ms-2">
                <b className="d-block text-white">Vikram Singh</b>
                <small className="text-light">Admin</small>
              </div>
            )}
          </div>

          {/* LOGOUT BUTTON */}
          <div className="p-3 pt-0">
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "10px",
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "6px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#bb2d3b")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#dc3545")
              }
            >
            <h6 className="m-0">{collapsed ? "⏻" : "⏻ Logout"}</h6>
            </button>
          </div>
        </div>
      </div>

      {/* LOGOUT MODAL */}
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

      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: 999 }}
          onClick={handleMobileToggle}
        />
      )}
    </>
  );
}