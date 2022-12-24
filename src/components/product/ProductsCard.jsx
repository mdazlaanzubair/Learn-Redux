import React from "react";
const ProductsCard = ({ product }) => {
  return (
    <div className="card shadow-0">
      <div className="card-header p-0 bg-light">
        <img
          src={product.thumbnail}
          className="card-img rounded shadow"
          alt={`${product.title}`}
        />
      </div>
      <div className="card-body shadow rounded mx-1">
        <h5 className="card-title fw-bold mb-0">{product.title}</h5>
        <div className="d-flex justify-content-between my-3">
          <h6 className="mb-2 text-warning">
            <i className="fas fa-star fa-xs"></i> ({product.rating})
          </h6>
          <h6 className="">
            $ <span className="fw-bold">{product.price}</span>
            <sup className="mx-2 text-danger fw-thin">
              <s className="small">{product.discountPercentage}</s>
            </sup>
          </h6>
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
          <a href="#!" className="btn btn-link btn-block" title="Add to cart">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
