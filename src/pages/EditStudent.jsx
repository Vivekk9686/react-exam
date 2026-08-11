import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    phone: "",
    email: "",
    age: "",
    class: "",
    grade: "",
    image: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/student/${id}`)
      .then((response) => response.json())
      .then((data) => setStudent(data));
  }, [id]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Student updated successfully!");
        navigate("/");
      });
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Edit Student
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={student.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            className="form-control"
            value={student.rollNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={student.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={student.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={student.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Class</label>
          <input
            type="text"
            name="class"
            className="form-control"
            value={student.class}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Grade</label>
          <input
            type="text"
            name="grade"
            className="form-control"
            value={student.grade}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success"
        >
          Update Student
        </button>

      </form>

    </div>
  );
}

export default EditStudent;