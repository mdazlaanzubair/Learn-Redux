import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import React from "react";
import Welcome from "./pages/Welcome";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Footer from "./components/common/Footer";
import SingleProduct from "./components/product/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route
            exact
            path="/products/:category_slug/:category_title"
            element={<Products />}
          />
          <Route
            exact
            path="/products/:product_id"
            element={<SingleProduct />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
