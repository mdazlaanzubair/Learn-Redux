import ShopSegments from "../components/shop/ShopSegments";
import React from "react";

const Shop = () => {
  return (
    <div className="container my-3">
      <h1 className="fw-bold">Shop Segments</h1>
      <hr className="hr mb-5" />
      <ShopSegments />
    </div>
  );
};

export default Shop;
