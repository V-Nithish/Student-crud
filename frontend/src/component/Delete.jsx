import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DeleteStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteStudent = async () => {
      try {
        await axios.delete(`http://localhost:4000/delete/${id}`);
        alert("Deleted successfully");
        navigate("/viewstudents");
      } catch (error) {
        console.log(error);
        alert("Failed to delete");
      }
    };

    deleteStudent();
  }, [id, navigate]);

  return <div>Deleting student...</div>;
}

export default DeleteStudent;

