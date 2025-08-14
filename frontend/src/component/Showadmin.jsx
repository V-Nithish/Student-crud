import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminsView() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const result = await axios.get("http://localhost:4000/getalladmin");
      setStudents(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
  try {
    await axios.delete(`http://localhost:4000/delete/${id}`);
    alert("Deleted successfully");
    setStudents(students.filter((s) => s.id !== id)); 
  } catch (error) {
    console.log(error);
    alert("Failed to delete");
  }
};
  return (
    <div className="container mt-4">
      <h2>Students List</h2>

      <div className="table-responsive">
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id || index}>
                  <td>{student.id || index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.password}</td>
                  <td>{student.age}</td>
                  <td>
                    <Link className="btn btn-sm btn-primary" to={`/editstudent/${student.id}`}>Edit</Link>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminsView;
