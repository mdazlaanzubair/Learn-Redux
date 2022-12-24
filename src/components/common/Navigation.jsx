import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/logo/Logo.png";

const Navigation = () => {
  return (
    <div className="container my-5 px-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              className="me-2"
              height="50"
              alt="Redux Online Store"
              title="Redux Online Store"
              loading="lazy"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
