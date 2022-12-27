import React from "react";

const QuantityForm = ({ product }) => {
  return (
    <form>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            min={1}
            max={product.stock}
            placeholder="Qty"
            defaultValue={1}
            step="1"
          />
        </div>
        <div className="col-md">
          <button type="submit" className="btn btn-secondary">
            Add to Cart
          </button>
        </div>
        <div className="col-md-12 my-3">
          <button type="submit" className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuantityForm;
