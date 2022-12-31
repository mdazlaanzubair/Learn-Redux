// library stuff and functions
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

// custom components
import Navigation from "./components/common/Navigation";
import Welcome from "./pages/Welcome";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Footer from "./components/common/Footer";
import SingleProduct from "./components/product/SingleProduct";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route
              exact
              path="/products/:category/"
              element={<Products />}
            />
            <Route
              exact
              path="/products/:product_id"
              element={<SingleProduct />}
            />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
