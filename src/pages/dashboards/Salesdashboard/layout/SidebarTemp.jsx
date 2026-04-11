import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./sidebar.css";

export default function Sidebar({ collapsed }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // ✅ LOGOUT STATE
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    navigate("/");
  };

  // ✅ MENU ITEM
  const Item = ({ icon, label, path }) => {
    let active = false;

    if (path === "/sales") {
      active = pathname === path;
    } else {
      active = pathname.startsWith(path);
    }

    return (
      <li
        onClick={() => navigate(path)}
        className={`menu-item d-flex align-items-center px-3 py-2 mb-2 rounded ${
          active ? "active-item" : ""
        }`}
        style={{ cursor: "pointer" }}
      >
        <i className={`bi ${icon}`} style={{ fontSize: "18px" }}></i>
        {!collapsed && <span className="ms-3">{label}</span>}
      </li>
    );
  };

  return (
    <>
      <div
        className="text-white d-flex flex-column justify-content-between"
        style={{
          width: collapsed ? 80 : 240,
          height: "100vh",
          backgroundColor: "#1f3c88",
          position: "sticky",
          top: 0,
          transition: "0.3s",
          padding: "15px 10px",
        }}
      >
        {/* 🔥 HEADER */}
        <div>
          <div className="px-2 mb-4">
            <h6 className="mb-0">{collapsed ? "PC" : "Precision Cast"}</h6>
            {!collapsed && (
              <small style={{ opacity: 0.7 }}>ERP System</small>
            )}
          </div>

          {/* 🔥 MENU */}
          <ul className="list-unstyled mt-3">
            <Item icon="bi-speedometer2" label="Dashboard" path="/sales" />
            <Item icon="bi-box" label="Sales & Orders" path="/sales/workorders" />
            <Item icon="bi-graph-up" label="Analytics & OEE" path="/sales/analytics" />
          </ul>
        </div>

        {/* 🔥 FOOTER PROFILE + LOGOUT */}
        <div className="px-2">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#2d5bff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
              
            >
              SM
            </div>

            {!collapsed && (
              <div>
                <div style={{ fontSize: "14px" }}>Sneha Mehta</div>
                <small style={{ opacity: 0.7 }}>Sales Manager</small>
              </div>
            )}
          </div>

          {/* 🔥 LOGOUT BUTTON */}
          <div
            className="menu-item d-flex align-items-center px-2 py-2 rounded text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => setShowLogoutModal(true)}
          >
            <i className="bi bi-box-arrow-right"></i>
            {!collapsed && <span className="ms-2">Logout</span>}
          </div>
        </div>
      </div>

      {/* 🚪 LOGOUT MODAL */}
      {showLogoutModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.4)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content p-3"
              style={{ borderRadius: "12px" }}
            >
              <h5>Confirm Logout</h5>
              <p className="text-muted small">
                Are you sure you want to logout?
              </p>

              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-light"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>

                <button className="btn btn-danger" onClick={handleLogout}>
                  Yes, Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}