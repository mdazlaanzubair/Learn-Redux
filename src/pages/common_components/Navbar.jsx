import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <!-- Container wrapper --> */}
      <div className="container">
        {/* <!-- Navbar brand --> */}
        <Link className="navbar-brand fw-bold" to="/">
          E-Shop
        </Link>

        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShowNav(!showNav)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div
          className={`collapse navbar-collapse ${showNav ? "show" : "hide"}`}
        >
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/products">
                Products
              </Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}

          {/* <!-- Right elements --> */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/cart">
                Cart <i className="fas fa-shopping-cart"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  12
                </span>
              </Link>
            </li>
          </ul>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    // <!-- Navbar -->
  );
};

export default Navbar;
