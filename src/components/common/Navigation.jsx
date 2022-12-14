import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../asset/logo/Logo.png";

const Navigation = () => {
  const cartItems = useSelector((state) => state.cart.cartProducts);

  return (
    <div className="container my-5 px-0">
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-3">
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <Link className="btn btn-link" to="/cart">
                <i className="fas fa-shopping-cart me-2"></i>
                Cart Items
                <span className="badge bg-primary ms-2">
                  {cartItems.length}
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
