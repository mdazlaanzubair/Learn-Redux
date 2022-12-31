import React from "react";
import QuantityForm from "../components/product/QuantityForm";

const Cart = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
  ];

  return (
    <div className="container my-3">
      <h3 className="fw-bold text-muted">Shopping Cart</h3>
      <h6 className="fw-thin text-muted">List of items</h6>
      <div className="row justify-content-start">
        <div className="col-md-6">
          {products &&
            products.map((product, index) => (
              <div
                className="d-flex bg-white hover-shadow mb-3 p-3 rounded-3"
                key={index}
              >
                <div className="flex flex-shrink-1 me-3">
                  <img
                    src={product.thumbnail}
                    className="img-fluid border-0 rounded shadow-0"
                    style={{
                      cursor: "pointer",
                      width: "100px",
                      height: "75px",
                    }}
                    alt="{productTitle}"
                  />
                </div>
                <div className="flex ms-3 flex-grow-1">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card- mb-0">{product.description}</p>
                  <span className="badge badge-primary me-2">
                    {product.brand}
                  </span>

                  <h4 className="my-3 mb-0">$ {product.price}</h4>
                  <hr className="hr" />
                  <QuantityForm product={product} />
                </div>
              </div>
            ))}
        </div>

        <div className="col-md-6 p-3">
          <h3 className="fw-bold text-muted">Summary</h3>
          <div className="table-responsive">
            <table class="table table-hover m-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{product.title}</td>
                      <td>$ {product.price}</td>
                      <td>{index + 2}</td>
                      <td>$ {product.id * product.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
