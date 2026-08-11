import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("login");

    const handleLogout = () => {
        localStorage.removeItem("login");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

                <Link to="/" className="navbar-brand">
                    Student Management
                </Link>

                <div>
                    {isLoggedIn ? (
                        <>
                            <Link to="/" className="btn btn-success me-2">
                                Student List
                            </Link>

                            <Link to="/add" className="btn btn-primary me-2">
                                Add Student
                            </Link>

                            <button
                                className="btn btn-danger"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="btn btn-success">
                            Login
                        </Link>
                    )}
                    
                </div>

            </div>
        </nav>
    );
}

export default Navbar;