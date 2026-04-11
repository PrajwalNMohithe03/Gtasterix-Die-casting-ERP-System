import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function Mainapp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  // ✅ FIXED UNIQUE USERS
  const users = [
    {
      role: "admin",
      email: "vikram.singh@precisioncast.com",
      password: "123456",
      route: "/admin-dashboard",
    },
    {
      role: "production",
      email: "rajesh.kumar@precisioncast.com",
      password: "123456",
      route: "/production-dashboard",
    },
    {
      role: "quality",
      email: "priya.sharma@precisioncast.com",
      password: "123456",
      route: "/quality-dashboard",
    },
    {
      role: "procurement",
      email: "amit.patel@precisioncast.com",
      password: "123456",
      route: "/procurement-dashboard",
    },
    {
      role: "sales",
      email: "sneha.mehta@precisioncast.com",
      password: "123456",
      route: "/sales",
    },
  ];
  
  const validEmails = users.map(u => `${u.role.charAt(0).toUpperCase() + u.role.slice(1)}: ${u.email}`);

 const handleLogin = () => {
  setSubmitted(true);

  if (!email || !password) {
    setError("⚠️ Please fill all fields");
    return;
  }

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    // 🔥 ADD THIS LINE (MOST IMPORTANT)
    localStorage.setItem("auth", "true");
    localStorage.setItem("userRole", user.role);
    setError("");
    navigate(user.route);
  } else {
    setError("invalid");
  }
};



  const handleLogout = () => {
    setShowLogoutModal(false);
    alert("Logged out ✅");
    navigate("/"); 
  };

  

  return (
    <div
      className="container-fluid min-vh-100 text-white"
      style={{ backgroundColor: "#0436a3" }}>
      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-md-6 d-flex flex-column justify-content-start p-5" style={{ marginTop: 200, padding: '6rem 5rem' }}>
          
          <div className="d-flex align-items-center mb-4">
            <div className="bg-white text-primary rounded-3 d-flex justify-content-center align-items-center" style={{ width: 60, height: 60, fontSize: 32 }}>
              🏭
            </div>
            <div className="ms-3">
              <h1 className="mb-1" style={{ fontSize: 28 }}>Precision Cast Industries</h1>
              <p className="tagline" style={{ color: '#e0e7ff' }}>
                Excellence in Die Casting Since 1998
              </p>
            </div>
          </div>

          <h2 className="d-flex align-items-center mb-2" style={{ fontSize: 22 }}>🏭 Die Casting ERP System</h2>

          <p className="mb-3" style={{ maxWidth: 500, fontSize: 16, color: "#e0e7ff" }}>
            Comprehensive enterprise resource planning for manufacturing excellence
          </p>

          <div className="col-md-7 text-white p-3 rounded mb-3" style={{ maxWidth: 500 }}>
            <strong>Key Features:</strong>
            <ul className="mb-0" style={{ fontSize: 15 }}>
              <p>✓ Planning & Work Orders</p>
              <p>✓ Quality Control & NCR Management</p>
              <p>✓ AI-Powered Camera Detection</p>
              <p>✓ Real-time OEE Analytics</p>
              <p>✓ Procurement & Supplier Management</p>
              <p>✓ Sales & Customer Orders</p>
            </ul>
          </div>

          <p className="small mt-3" style={{ maxWidth: 500 }}>
            Pune, Maharashtra, India <br />
            GST: 27AABCP1234F1Z5<br /><br />
            Certifications: ISO 9001:2015, IATF 16949:2016
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-5">

          <div className="card shadow-lg p-4 rounded" style={{ width: 450 }}>
            
            <h1 className="fw-bold mb-1" style={{ fontSize: 24, color: "#0f172a", marginBottom: "2px" }}>
              Welcome Back
            </h1>

            <p className="mb-3 text-secondary" style={{ fontSize: 16, marginBottom: "5px" }}>
              Sign in to access your dashboard
            </p>

            <div className="bg-light border p-2 rounded mb-3 text-primary small">
              <strong>Demo System:</strong> Use the demo accounts below or scroll down to click "Quick Login" buttons.
            </div>

            {/* ERROR */}
            {submitted && error === "invalid" && (
              <div className="bg-danger bg-opacity-25 border border-danger rounded p-2 mb-3">
                <p className="text-danger fw-bold mb-1">
                  🚫 Invalid email or password
                </p>
                <p className="small mb-2">Please use one of the demo accounts below or check your credentials.</p>
                <ul className="mb-0">
                  {validEmails.map((mail, index) => (
                    <li key={index} className="small">{mail}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* EMAIL */}
            <label>Email Address</label>
            <div className="input-group mb-3">
              <span className="input-group-text">👤</span>
              <input
                type="email"
                className="form-control"
                placeholder="name@precisioncast.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>

            {/* ERROR (EMPTY FIELDS) */}
            {submitted && error && error !== "invalid" && (
              <div className="alert alert-dark py-1">{error}</div>
            )}

             {/* PASSWORD */}
             <label>Password</label>
             <div className="input-group mb-3">
               <span className="input-group-text">🔒</span>
               <input
                 type="password"
                 className="form-control"
                 placeholder="********"
                 value={password}
                 onChange={(e) => {
                   setPassword(e.target.value);
                   setError("");
                 }}
               />
             </div>

             {/* Remember Me + Forgot Password */}
             <div className="d-flex justify-content-between align-items-center mb-3">
               {/* Remember Me */}
               <div className="form-check">
                 <input
                   type="checkbox"
                   className="form-check-input"
                   id="rememberMe"
                 />
                 <label className="form-check-label" htmlFor="rememberMe">
                   Remember Me
                 </label>
               </div>

               {/* Forgot Password */}
               <span
                 style={{ cursor: "pointer", color: "#0436a3", fontSize: "14px" }}
                 onClick={() => alert("Forgot Password clicked")}
               >
                 Forgot Password?
               </span>
             </div>

            <button
              className="btn btn-primary w-100 mb-3"
              style={{ background: "#0436a3" }}
              onClick={handleLogin}
            >
              Sign In
            </button>

            <hr />

            {/* DEMO LOGIN */}
            <p className="mb-1">Demo Credentials (Click to Login):</p>

            <div className="d-grid gap-2">
              {users.map((u, i) => (
                <button
                  key={i}
                  className="btn btn-light text-start small"
                  onClick={() => {
                    localStorage.setItem("auth", "true");
                    localStorage.setItem("userRole", u.role);
                    navigate(u.route);
                  }}
                >
                  <b>{u.role.charAt(0).toUpperCase() + u.role.slice(1)}</b><br />
                  {u.email}
                </button>
              ))}
            </div>
          </div>

          <footer className="mt-4 text-white text-center" style={{fontSize: "14px"}}>
            © 2026 Precision Cast Industries Pvt. Ltd. All rights reserved.
          </footer>
        </div>
      </div>

    {/* ✅ Logout Confirmation Modal */}
      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to logout? Any unsaved changes will be lost.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Yes, Logout
          </Button>
        </Modal.Footer>
      </Modal>
</div>
  );
}