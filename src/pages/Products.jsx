import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import ProductsCard from "../components/product/ProductsCard";
import Masonry from "react-responsive-masonry";

const Products = () => {
  const { category_slug, category_title } = useParams();
  const [products, setProducts] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    const products_URL = `https://dummyjson.com/products/category/${category_slug}`;

    // function accepts two arguments i.e. API route and category slug
    // in order to fetch the products of that category
    const getProducts = async (url) => {
      // since its an asynchronous call therefore using try-catch to
      // catch the errors
      try {
        // fetching response/products from API
        const response = await axios.get(url);

        // returning fetched products in the state variable
        setProducts(response.data.products);

        // setting total no. of products
        setItemsCount(response.data.total);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts(products_URL);
  }, []);

  return (
    <div className="container my-3">
      <h3 className="fw-bold text-muted">{category_title}</h3>
      <h6 className="fw-thin text-muted">{itemsCount} items found</h6>
      <hr className="hr mt-1" />
      <Masonry
        columnsCount={3}
        gutter="25px"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        {/* <Masonry> */}
        {products.map((product, index) => (
          <ProductsCard key={index} product={product} />
        ))}
        {/* </Masonry> */}
      </Masonry>
    </div>
  );
};

export default Products;
