import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/student")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log(error));
  }, []);

  const deleteStudent = (id) => {
    fetch(`http://localhost:3000/student/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setStudents(
          students.filter((student) => student.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Student List
      </h2>
      <div className="mb-3 mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search student by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table table-bordered table-striped table-hover bg-white">

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Class</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>

              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>{student.grade}</td>

              <td>
                <Link
                  to={`/edit/${student.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default StudentList;