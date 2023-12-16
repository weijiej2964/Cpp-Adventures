import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            C++ Adventures
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/episode/1">
                Episode Ver. Prototype
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episode/2">
                Episode Ver. Basic Setup
              </Link>
            </li>
            {/* Add more nav-item elements for additional episodes */}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-3 d-flex justify-content-around">
        {/* Episode Cards */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Episode Ver. Prototype</h5>
            <p className="card-text">
              This is a Prototype episode during development, feel free to
              visit.
            </p>
            <Link to="/episode/1" className="btn btn-primary">
              Start Episode
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Episode Ver. Basic Setup</h5>
            <p className="card-text">
              Explore the basics of C++ setup with George in this episode.
            </p>
            <Link to="/episode/2" className="btn btn-primary">
              Start Episode
            </Link>
          </div>
        </div>
        {/* Add more card elements for additional episodes */}
      </div>
    </div>
  );
};

export default Menu;
