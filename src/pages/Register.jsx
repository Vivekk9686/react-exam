import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <h2 className="text-center mb-4">
            Register
          </h2>

          <form onSubmit={handleRegister}>

            <div className="mb-3">
              <label className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Register
            </button>

          </form>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;