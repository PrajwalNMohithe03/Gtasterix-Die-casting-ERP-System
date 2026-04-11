import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./topbar.css";
export default function Topbar({ toggleSidebar, openMobileSidebar }) {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const t = localStorage.getItem("theme");
    if (t === "dark") {
      setDark(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 bg-white border-bottom shadow-sm position-sticky top-0 z-3">

      {/* LEFT */}
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-light d-md-none" onClick={openMobileSidebar}>
          <i className="bi bi-list fs-5"></i>
        </button>
      <button
        className="btn btn-light d-none d-md-inline"
        onClick={toggleSidebar}
      >
        <i className="bi bi-list fs-5"></i>
      </button>


        <div className="fw-semibold">Dashboard</div>
      </div>

      {/* SEARCH */}
      <div className="position-relative w-50 d-none d-md-block" style={{ width: "250px" }}>
  
     <div className="input-group input-group-sm">
    <span className="input-group-text bg-light border-0">
      <i className="bi bi-search"></i>
    </span>
    
        <input
      type="text"
      className="form-control bg-light border-0"
          placeholder="Search items, work orders, customers"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
  {/* SEARCH RESULT */}
  {search && (
    <div className="dropdown-menu show w-100 mt-1 p-2 shadow">
      <div className="small text-muted">
        No results found for "<b>{search}</b>"
      </div>
    </div>
  )}

</div>

      {/* RIGHT */}
      <div className="d-flex align-items-center gap-4 position-relative">

        {/* 🔔 NOTIFICATIONS */}
        <div className="position-relative">
          <i
            className="bi bi-bell fs-5"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowNotif(!showNotif);
              setShowProfile(false);
            }}
          />
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
            4
          </span>

          {showNotif && (
            <div
              className="shadow"
              style={{
                position: "absolute",
                top: 45,
                right: 0,
                width: 340,
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                zIndex: 999,
              }}
            >
              <div className="px-3 py-2 border-bottom fw-semibold">
                Recent Notifications (4 unread)
              </div>

             <div className="overflow-auto" style={{ maxHeight: "250px" }}>
  
  {[
    { color: "danger", text: "Temperature exceeded 220°C", time: "2 mins ago" },
    { color: "warning", text: "Maintenance approaching", time: "15 mins ago" },
    { color: "warning", text: "Stock below reorder level", time: "1 hr ago" },
    { color: "success", text: "Work completed", time: "2 hrs ago" },
    { color: "danger", text: "Machine overheating", time: "3 hrs ago" },
    { color: "success", text: "Order completed", time: "5 hrs ago" }
  ].map((n, i) => (
    <div key={i} className="d-flex gap-2 px-3 py-2 border-bottom align-items-start item-highlight">
      
      <span className={`bg-${n.color} rounded-circle mt-1`} style={{ width: 10, height: 10 }}></span>
      
      <div>
        <div className="small">{n.text}</div>
        <div className="text-muted small">{n.time}</div>
      </div>

    </div>
  ))}

</div>

              <div
                className="text-center py-2 border-top text-primary small"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowNotif(false);
                  navigate("/notifications");
                }}
              >
                View All Notifications →
              </div>
            </div>
          )}
        </div>

        {/* 👤 PROFILE */}
        <div className="position-relative">
          <div
            className="d-flex align-items-center gap-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotif(false);
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#2563eb",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              SM
            </div>

            <div className="d-none d-md-block">
              <div className="fw-semibold small">Sneha Mehta</div>
              <div className="text-muted small">Sales Manager</div>
            </div>
          </div>

          {showProfile && (
            <div
              className="shadow"
              style={{
                position: "absolute",
                top: 50,
                right: 0,
                width: 260,
                background: "#fff",
                borderRadius: "12px",
              }}
            >
              <div className="px-3 py-3 border-bottom">
                <div className="fw-semibold">Sneha Mehta</div>
                <div className="text-muted small">sneha.mehta@precisioncast.com</div>
                <div className="text-muted small">Role: Sales Manager</div>
              </div>

              <div className="item-highlight d-flex gap-2">
                <i className="bi bi-gear"></i> Profile Settings
              </div>

              <div className="item-highlight d-flex gap-2">
                <i className="bi bi-key"></i> Change Password
              </div>

              <div className="item-highlight d-flex gap-2" onClick={toggleTheme}>
                <i className="bi bi-moon"></i> Toggle Dark Mode
              </div>

              <div
                className="item-highlight d-flex gap-2 border-top text-danger"
                onClick={() => {
                  setShowProfile(false);
                  setShowLogoutModal(true);
                }}
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🚪 LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.4)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3" style={{ borderRadius: "12px" }}>
              <h5>Confirm Logout</h5>
              <p className="text-muted small">
                Are you sure you want to logout?
              </p>
              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-light" onClick={() => setShowLogoutModal(false)}>
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
    </div>
  );
}