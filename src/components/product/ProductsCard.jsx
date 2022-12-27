import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  return (
    <div className="card shadow-0">
      <div className="card-header p-0 bg-light">
        <strong className="badge badge-primary my-3 float-end">
          {product.discountPercentage}% off
        </strong>
        <img
          src={product.thumbnail}
          className="card-img rounded hover-shadow"
          alt={`${product.title}`}
        />
      </div>
      <div className="card-body shadow-sm rounded mx-1">
        <h5 className="card-title fw-bold mb-0">{product.title}</h5>
        <div className="my-3">
          <h6 className="text-warning">
            <i className="fas fa-star fa-xs"></i> ({product.rating})
          </h6>
          <h4>$ {product.price}</h4>
          <p className="small">
            <s
              className="text-danger"
              title={`Save upto $${Math.round(
                product.price / (1 - product.discountPercentage / 100) -
                  product.price
              )}`}
            >
              ${" "}
              {Math.round(
                product.price / (1 - product.discountPercentage / 100)
              )}
              .00
            </s>
          </p>
        </div>
        <div className="action-center">
          <a
            href="#!"
            className="btn btn-primary btn-block mb-3"
            title="Add to cart"
          >
            <i className="fas fa-cart-plus me-2"></i>
            Add to Cart
          </a>
          <Link
            to={`/products/${product.id}`}
            className="btn btn-link btn-block"
            title="Add to cart"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
