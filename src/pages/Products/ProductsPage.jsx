import { useEffect, useState } from "react";
import Product from "./components/Product";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };

    getProducts("https://fakestoreapi.com/products/");
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center my-4">
        <h1 className="fw-bold mb-4">Products List</h1>
        <hr className="hr" />
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
