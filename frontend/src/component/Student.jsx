import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="container-fluid">
      <div 
        className="bg-dark text-white p-3 vh-100 position-fixed"
        style={{ width: "250px" }}
      >
        <h4 className="text-center">Student Dashboard</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/viewstudents">Manage Student</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">LOGOUT</Link>
          </li>
        </ul>
      </div>
      <div 
        className="p-4"
        style={{ marginLeft: "250px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}
      >
        <h2 className="mb-4">Welcome Back!</h2>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title"> STUDENT</h5>
                <p className="card-text">Add new students to the system</p>
                <Link to="/register" className="btn btn-primary">Add</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">MANAGE STUDENT</h5>
                <p className="card-text">Manage student details</p>
                <Link to="/viewstudents" className="btn btn-secondary">Manage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
