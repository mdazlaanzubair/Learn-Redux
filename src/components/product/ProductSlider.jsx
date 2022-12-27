import { useEffect } from "react";
import { useState } from "react";

const ProductSlider = ({ productImgs, productTitle }) => {
  // setting image to be displayed
  const [focusedImg, setFocusedImg] = useState(
    productImgs ? productImgs[0] : null
  );

  //   useEffect(() => {
  //     setFocusedImg();
  //   }, []);

  console.log(productImgs);
  return (
    <div className="container p-3">
      <div className="row justify-content-center mb-3">
        <div className="col-md text-center">
          <img
            src={focusedImg}
            className="img-fluid border-0 rounded shadow-0"
            style={{ cursor: "pointer", width: "300px", height: "250px" }}
            alt={productTitle}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          {productImgs &&
            productImgs.map((img, index) => (
              <img
                key={index}
                src={img}
                className="img-thumbnail rounded d-inline mx-2 border-0 hover-shadow"
                alt={productTitle}
                style={{ cursor: "pointer", width: "65px", height: "65px" }}
                onMouseOver={() => {
                  setFocusedImg(img);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
