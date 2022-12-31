import { useSelector } from "react-redux";

// custom component
import Segment from "./Segment";

const ShopSegments = () => {
  const categories = useSelector((state) => state.category.categoryList);

  return categories.map((category, index) => {
    return category.slug === "neutral" ? (
      <div className="row mb-5" key={index}>
        <h3 className="fw-light">{category.title}</h3>
        <hr className="hr mt-1" />
        <Segment sub_cates={category.sub_cates} />
      </div>
    ) : category.slug === "womanly" ? (
      <div className="row mb-5" key={index}>
        <h3 className="fw-light">{category.title}</h3>
        <hr className="hr mt-1" />
        <Segment sub_cates={category.sub_cates} />
      </div>
    ) : (
      <div className="row mb-5" key={index}>
        <h3 className="fw-light">{category.title}</h3>
        <hr className="hr mt-1" />
        <Segment sub_cates={category.sub_cates} />
      </div>
    );
  });
};

export default ShopSegments;
