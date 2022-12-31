import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  storeProductsToState,
  storeTotalItems,
} from "../redux/slices/product-slice";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

// custom component
import ProductsCard from "../components/product/ProductsCard";

const Products = () => {
  // getting active category from store, selected by user
  const { cate_title, cate_slug } = useSelector(
    (state) => state.category.activeCategory
  );

  // getting initial states
  const { products, totalItems } = useSelector((state) => state.products);

  // initializing dispatching to mutate redux state
  const dispatch = useDispatch();

  // function accepts two arguments i.e. API route and category slug
  // in order to fetch the products of that category
  const fetchProducts = async (category) => {
    const url = `https://dummyjson.com/products/category/${category}`;

    // since its an asynchronous call therefore using try-catch to
    // catch the errors
    try {
      // fetching response/products from API
      const response = await axios.get(url);

      // dispatching actions to mutate state using reducers
      // 1. dispatching "storeTotalItems"
      dispatch(storeTotalItems(response.data.total));

      // 2. dispatching "storeProductsToState"
      dispatch(storeProductsToState(response.data.products));

      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // executing fetch product function
    fetchProducts(cate_slug);
  }, [cate_slug]);

  return (
    <div className="container my-3">
      <h3 className="fw-bold text-muted">{cate_title}</h3>
      <h6 className="fw-thin text-muted">{totalItems} items found</h6>
      <hr className="hr mt-1" />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1044: 4 }}
      >
        <Masonry columnsCount={4} gutter="25px">
          {products &&
            products.map((product, index) => (
              <ProductsCard key={index} product={product} />
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Products;
