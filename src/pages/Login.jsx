import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

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

    // already exists
    localStorage.setItem("userRole", user.role);

    navigate(user.route);
  } else {
    setError("invalid");
  }
};

  return (
    <div
      className="container-fluid min-vh-100"
      style={{
        background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
      }}
    >
      <div className="row min-vh-100">

        {/* LEFT SIDE */}
        <div className="col-md-6 d-flex flex-column justify-content-center text-white p-5">

          <div className="d-flex align-items-center mb-4">
            <div className="bg-white text-primary rounded-3 p-3 fs-3">
              🏭
            </div>
            <div className="ms-3">
              <h3 className="fw-bold mb-1">Precision Cast Industries</h3>
              <small>Excellence in Die Casting Since 1998</small>
            </div>
          </div>

          <h5 className="fw-bold">🏭 Die Casting ERP System</h5>

          <p className="mt-2">
            Comprehensive enterprise resource planning for manufacturing excellence
          </p>

          <div className="mt-3">
            <p className="fw-bold">Key Features:</p>
            <p>✓ Production Planning & Work Orders</p>
            <p>✓ Quality Control & NCR Management</p>
            <p>✓ AI-Powered Camera Detection</p>
            <p>✓ Real-time OEE Analytics</p>
            <p>✓ Procurement & Supplier Management</p>
            <p>✓ Sales & Customer Orders</p>
          </div>
          {/* Footer Info (LEFT SIDE) */}
<div className="mt-5 small text-white">
  Pune, Maharashtra, India <br />
  GST: 27AABCP1234F1Z5 <br />
  Certifications: ISO 9001:2015, IATF 16949:2016
</div>
        </div>

  {/* RIGHT SIDE */}
<div className="col-md-6 d-flex flex-column min-vh-100">

  {/* CENTER LOGIN */}
  <div className="d-flex flex-grow-1 justify-content-center align-items-center">

    <div
      className="card shadow p-3"
      style={{
        width: "450px",
        borderRadius: "16px"
      }}
    >
      <h5 className="fw-bold mb-1">Welcome Back</h5>
      <p className="text-muted mb-2 small">
        Sign in to access your dashboard
      </p>

      <div className="alert alert-primary py-1 small mb-2">
        Demo accounts available
      </div>

      {submitted && error === "invalid" && (
        <div className="alert alert-danger py-1 small">
          ❌ Invalid Email or Password
        </div>
      )}

      {/* EMAIL */}
      <label className="small">Email</label>
      <div className="input-group mb-2">
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

      {/* PASSWORD */}
      <label className="small">Password</label>
      <div className="input-group mb-2">
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

      {/* BUTTON */}
      <button
        className="btn w-100 mb-2 py-1"
        style={{ background: "#1e3a8a", color: "white" }}
        onClick={handleLogin}
      >
        Sign In
      </button>

      <hr className="my-2" />

      {/* DEMO */}
      <p className="small fw-bold mb-1">Demo:</p>

      {users.slice(0, 5).map((u, i) => (
        <button
          key={i}
          className="btn btn-light w-100 mb-1 text-start"
          style={{ padding: "6px", fontSize: "12px" }}
          onClick={() => {
  localStorage.setItem("auth", "true");
  localStorage.setItem("userRole", u.role);
  navigate(u.route);
}}
        >
          <b>{u.role.toUpperCase()}</b><br />
          {u.email}
        </button>
      ))}
    </div>

  </div>

  {/* FOOTER (ALWAYS VISIBLE) */}
  <div className="text-center text-white small mb-3">
    © 2026 Precision Cast Industries Pvt. Ltd.
  </div>

</div>
      </div>
    </div>
  );
}