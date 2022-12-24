import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState();

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
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductDetails(products_URL);
  }, []);


  return (
    <div className="container my-3">
      <div className="card mb-3">
        <div className="card-header">
          <div className="row justify-content-center">
            <div className="col-md">
              <img src={product.thumbnail} alt="product images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
