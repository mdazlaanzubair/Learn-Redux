import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/cart-slice";

const ProductsCard = ({ product }) => {
  // initializing dispatching to mutate redux state
  const dispatch = useDispatch();

  // since the "products prop" is a non-extensible object therefore new_object is being
  // created in order to avoid error this new object has two new keys for
  // cart product object i.e. "originalPrice" & "qty"
  const productForCart = {
    // adding whole product object as-it-is using "spread operator (...)"
    ...product,

    // calculating original price of the product from discounted percentage and storing
    // in the product object
    originalPrice: Math.round(
      product.price / (1 - product.discountPercentage / 100)
    ),

    // creating another key-value pair for product quantity
    qty: 1,
  };

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
          <button
            type="button"
            className="btn btn-primary btn-block mb-3"
            title="Add to cart"
            onClick={() => dispatch(addToCart(productForCart))}
          >
            <i className="fas fa-cart-plus me-2"></i>
            Add to Cart
          </button>
          <Link
            to={`/products/${product.id}`}
            className="btn btn-link btn-block"
            title="Add to cart"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
