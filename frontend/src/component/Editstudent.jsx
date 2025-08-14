import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditStu() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stu, setStu] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  // 1️⃣ Move fetch function above useEffect
  const fetchStu = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/getbyid/${id}`);
      setStu(res.data[0]);
      console.log(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStu();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStu((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/update/${id}`,stu);
      alert("Student updated successfully!");
      navigate("/viewstudents");
    } catch (error) {
      console.log(error);
      alert("Failed to update student.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h3>Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={stu.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={stu.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={stu.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={stu.age}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditStu;
