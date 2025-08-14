import axios from "axios";
import { useState } from "react";

function Registration() {
  const [reg, setReg] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    role: ""
  });

  const handlechange = (e) => {
    setReg((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/add", reg);
      alert("Registered successfully");
      setReg({ name: "", email: "", password: "", age: "", role: "" });
    } catch (err) {
      console.error(err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg border-0"
        style={{ borderRadius: "15px", maxWidth: "500px", margin: "auto" }}
      >
        <div
          className="card-header text-white text-center"
          style={{
            background: "linear-gradient(90deg, #007bff, #00c6ff)",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px"
          }}
        >
          <h3 className="mb-0">Registration Form</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handlesubmit}>
            <div className="mb-4">
              <label className="form-label fw-bold">Enter Name</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-pill"
                name="name"
                value={reg.name}
                onChange={handlechange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Enter Email</label>
              <input
                type="email"
                className="form-control form-control-lg rounded-pill"
                name="email"
                value={reg.email}
                onChange={handlechange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Enter Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-pill"
                name="password"
                value={reg.password}
                onChange={handlechange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Enter Age</label>
              <input
                type="number"
                className="form-control form-control-lg rounded-pill"
                name="age"
                value={reg.age}
                onChange={handlechange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Select Role</label>
              <select
                className="form-select form-select-lg rounded-pill"
                name="role"
                value={reg.role}
                onChange={handlechange}
                required
              >
                <option value="">-- Select Role --</option>
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 rounded-pill btn-lg"
              style={{
                background: "linear-gradient(90deg, #28a745, #85d87b)",
                border: "none"
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
