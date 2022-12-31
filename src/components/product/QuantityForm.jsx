import { useState } from "react";

const QuantityForm = ({ product }) => {
  const [qty, setQty] = useState(1);

  // decrement no of products
  const qtyDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
    console.log("decrement no of products", qty);
  };

  // increment no of products
  const qtyIncrement = (stock) => {
    if (qty < stock) {
      setQty(qty + 1);
    }
    console.log("increment no of products", qty);
  };

  return (
    <div className="productQtyHandleForm">
      <div className="d-flex">
        <div className="flex">
          <button
            type="button"
            className="btn btn-floating btn-info"
            disabled={qty <= 1 ? "disabled" : ""}
            onClick={() => {
              qtyDecrement();
            }}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
        <div className="flex mx-3">
          <input
            type="number"
            className="form-control"
            min={1}
            max={product.stock}
            placeholder="Qty"
            value={qty}
            onChange={(event) => setQty(event.target.value)}
            step="1"
          />
        </div>
        <div className="flex">
          <button
            type="button"
            className="btn btn-floating btn-primary"
            disabled={qty === product.stock ? "disabled" : ""}
            onClick={() => {
              qtyIncrement(product.stock);
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="d-flex my-3">
        <div className="flex flex-grow-1">
          <button type="button" className="btn btn-secondary">
            Add to Cart
          </button>
          <button type="button" className="btn btn-floating rounded-1 btn-danger ms-3">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityForm;
