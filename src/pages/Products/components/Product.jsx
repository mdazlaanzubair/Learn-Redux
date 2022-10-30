import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const truncate = (string, size) => {
    return string.length > size ? string.substring(0, size) + "..." : string;
  };

  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="d-flex align-items-center justify-content-center">
          <img
            className="img-fluid m-3 w-25"
            src={product.image}
            alt={product.category}
          />
          <div className="card-body">
            <span className="badge badge-primary float-end ms-2 mb-2">
              {product.category}
            </span>
            <h4 className="fw-bold">{product.title}</h4>
            <p>{truncate(product.description, 100)}</p>
            <h4>${product.price}</h4>
            <p className="small">
              <i className="far fa-star me-2"></i>
              {product.rating.rate} ({product.rating.count})
            </p>
            <Link to="/view" className="btn btn-sm me-2 btn-primary">
              Add to cart
            </Link>
            <Link to={`/products/view/${product.id}`} className="btn btn-sm me-2 btn-link">
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
