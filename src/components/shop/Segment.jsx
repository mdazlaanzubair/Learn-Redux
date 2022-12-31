import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { storeActiveCategory } from "../../redux/slices/category-slice";

const Segment = ({ sub_cates }) => {
  // dispatching "storeActiveCategory" to set active category in state when clicked
  const dispatch = useDispatch();

  return (
    <div className="row justify-content-start">
      {sub_cates &&
        sub_cates.map((sub_cate, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <Link
              to={`/products/${sub_cate.title}`}
              onClick={() => {
                dispatch(
                  storeActiveCategory({
                    cate_title: sub_cate.title,
                    cate_slug: sub_cate.slug,
                  })
                );
              }}
            >
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
