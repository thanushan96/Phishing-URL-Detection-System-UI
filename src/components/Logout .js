import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated, setUsername }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication status and username
    setIsAuthenticated(false);
    setUsername("");

    // Redirect to the login page or any other desired page
    navigate("/");
  };

  return (
    <div
      className="container justify-content-center align-items-center min-vh-100"
      style={{ margin: "6rem" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Logout</h2>
            </div>
            <div className="card-body">
              <p className="text-center">Are you sure you want to log out?</p>
              <div className="text-center">
                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-block mt-3"
                >
                  Logout
                </button>
              </div>
              <p className="text-center">
                Back to <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
