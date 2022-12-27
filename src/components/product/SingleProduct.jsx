import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import QuantityForm from "./QuantityForm";
import ProductSlider from "./ProductSlider";

const SingleProduct = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const products_URL = `https://dummyjson.com/products/${product_id}`;

    // function accepts two arguments i.e. API route and category slug
    // in order to fetch the products of that category
    const getProductDetails = async (url) => {
      // since its an asynchronous call therefore using try-catch to
      // catch the errors
      try {
        // fetching response/products from API
        const response = await axios.get(url);

        // returning fetched products in the state variable
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductDetails(products_URL);
  }, [product_id]);

  return (
    <div className="container my-3 px-0">
      <div className="card mb-3 mx-0">
        <div className="row g-0">
          <div className="col-md-4">
            <ProductSlider productImgs={product.images} productTitle={product.title} />
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
              <QuantityForm product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
