import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const productID = useParams().id;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    };

    getProduct(`https://fakestoreapi.com/products/${productID}/`);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center my-4">
        <h1 className="fw-bold mb-4">Products List</h1>
        <hr className="hr" />
        {product.title}
      </div>
    </div>
  );
};

export default SingleProductPage;
