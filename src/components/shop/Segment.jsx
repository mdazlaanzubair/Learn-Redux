import { Link } from "react-router-dom";

const Segment = ({ sub_cates }) => {
  return (
    <div className="row justify-content-start">
      {sub_cates.map((sub_cate) => (
        <div className="col-md-3 mb-3" key={sub_cate.slug}>
          <Link to={`/products/${sub_cate.slug}/${sub_cate.title}`}>
            <div className="bg-image hover-overlay">
              <img
                src={sub_cate.url}
                className="img-fluid"
                alt="Category Images"
                style={{
                  width: "870px",
                  height: "150px",
                }}
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 1)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <h4 className="fw-bold mb-0">{sub_cate.title}</h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Segment;
