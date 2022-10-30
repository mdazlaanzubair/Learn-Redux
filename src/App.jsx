import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import ProductsPage from "./pages/Products/ProductsPage";
import SingleProductPage from "./pages/Products/SingleProductPage";
import Navbar from "./pages/common_components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* COMMON COMPONENT LOADING */}
        <Navbar />

        {/* PAGES COMPONENT LOADING */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/view/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
