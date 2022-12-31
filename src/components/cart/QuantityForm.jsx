import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQty,
  increaseQty,
} from "../../redux/slices/cart-slice";

const QuantityForm = ({ product }) => {
  // initializing dispatch to mutate state using reducer
  const dispatch = useDispatch();

  return (
    <div className="productQtyHandleForm">
      <div className="d-flex">
        <div className="flex">
          <button
            type="button"
            className="btn btn-floating btn-info"
            disabled={product.qty <= 1 ? "disabled" : ""}
            onClick={() => {
              dispatch(decreaseQty(product.id));
            }}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
        <div className="flex mx-3 flex-grow-1">
          <input
            type="number"
            className="form-control"
            min={1}
            max={product.stock}
            placeholder="Qty"
            value={product.qty}
            onChange={(event) => (event.target.value = product.qty)}
            step="1"
          />
        </div>
        <div className="flex">
          <button
            type="button"
            className="btn btn-floating btn-primary"
            disabled={product.qty === product.stock ? "disabled" : ""}
            onClick={() => {
              dispatch(increaseQty(product.id));
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="d-flex my-3 justify-content-between">
        <div className="flex">
          <button type="button" className="btn btn-secondary">
            Add to Cart
          </button>
        </div>
        <div className="flex">
          <button
            type="button"
            className="btn btn-floating btn-danger ms-3"
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityForm;
