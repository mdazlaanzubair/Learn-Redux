import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/slices/cart-slice";

// custom component
import ProductSlider from "./ProductSlider";

const SingleProduct = () => {
  // initializing dispatching to mutate redux state
  const dispatch = useDispatch();

  // getting product from store
  // getting product ID from router parameters
  const { product_id } = useParams();
  const product = useSelector((state) => state.products);
  console.log(product);

  return (
    <div className="container my-3 px-0">
      <div className="card mb-3 mx-0">
        <div className="row g-0">
          <div className="col-md-4">
            <ProductSlider
              productImgs={product.images}
              productTitle={product.title}
            />
          </div>
          <div className="col-md">
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className="card- mb-0">{product.description}</p>
              <span className="badge badge-primary me-2">{product.brand}</span>
              <span className="badge badge-primary me-2">
                {product.category}
              </span>
              <h4 className="mt-3 mb-0">$ {product.price}</h4>
              <p className="card-text">
                <s className="text-danger">
                  ${" "}
                  {Math.round(
                    product.price / (1 - product.discountPercentage / 100)
                  )}
                  .00
                </s>{" "}
                <sup className="text-success">
                  {product.discountPercentage}% OFF
                </sup>
              </p>
              <hr className="hr" />
              <div className="d-flex my-3 justify-content-between">
                <div className="flex">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
