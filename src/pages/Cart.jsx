import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateCartSummary } from "../redux/slices/cart-slice";

// custom component
import QuantityForm from "../components/cart/QuantityForm";

const Cart = () => {
  // initializing dispatch
  const dispatch = useDispatch();
  const { cartProducts, cartSummary } = useSelector((state) => state.cart);

  useEffect(() => {
    try {
      dispatch(updateCartSummary());
    } catch (error) {
      console.error(error);
    }
  }, [cartProducts]);

  return (
    <div className="container my-3">
      {cartProducts.length === 0 ? (
        <div className="row justify-content-start">
          <div className="col-md">
            <h3 className="mt-3 display-4 text-muted fw-light">
              You haven't shop anything ???{" "}
            </h3>
            <Link className="btn btn-success btn-lg mb-3" to="/shop">
              Shop Now
            </Link>
          </div>
        </div>
      ) : (
        <div className="row justify-content-start">
          <h3 className="fw-bold text-muted">Shopping Cart</h3>
          <h4 className="fw-light text-muted">List of item(s)</h4>

          <div className="col-md">
            {cartProducts &&
              cartProducts.map((product, index) => (
                <div
                  className="d-flex bg-white hover-shadow mb-3 p-3 rounded-3"
                  key={index}
                >
                  <div className="flex flex-shrink-1 me-3">
                    <img
                      src={product.thumbnail}
                      className="img-fluid border-0 rounded shadow-0"
                      style={{
                        cursor: "pointer",
                        width: "100px",
                        height: "75px",
                      }}
                      alt="{productTitle}"
                    />
                  </div>
                  <div className="flex ms-3 flex-grow-1">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card- mb-0">{product.description}</p>
                    <span className="badge badge-primary me-2">
                      {product.brand}
                    </span>

                    <h4 className="my-3 mb-0">$ {product.price}</h4>
                    <hr className="hr" />
                    <QuantityForm product={product} />
                  </div>
                </div>
              ))}
          </div>

          <div className="col-md-4 p-3">
            <h3 className="fw-bold text-muted">Summary</h3>
            <ul className="list-group list-group-light">
              <li className="list-group-item d-flex justify-content-start align-items-start hover-shadow rounded-3 p-3 mb-3">
                <div className="ms-2 flex-grow-1">
                  <div className="fw-bold">Products Purchased</div>
                  <small>{cartSummary.totalItems}x item(s) procured</small>
                </div>
                <p className="fw-bold">{cartSummary.productsPurchased}</p>
              </li>
              <li className="list-group-item d-flex justify-content-start align-items-start hover-shadow rounded-3 p-3 mb-3">
                <div className="ms-2 flex-grow-1">
                  <div className="fw-bold">Total</div>
                  <small>Price without discount</small>
                </div>
                <p className="fw-bold">{cartSummary.discountTotal}</p>
              </li>
              <li className="list-group-item d-flex justify-content-start align-items-start hover-shadow rounded-3 p-3 mb-3">
                <div className="ms-2 flex-grow-1">
                  <div className="fw-bold">Discounted Total</div>
                  <small className="d-block">
                    After having{" "}
                    <span className="badge bg-primary mx-1">
                      {cartSummary.saving.percentage}% discount
                    </span>
                    , you've saved
                    <span className="badge bg-success mx-1">
                      $ {cartSummary.saving.amount}
                    </span>
                  </small>
                </div>
                <p className="fw-bold">{cartSummary.discountTotal}</p>
              </li>
            </ul>

            <Link to="/" className="btn btn-dark btn-block ms-auto">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
