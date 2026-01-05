import "./Card.css";
import { FaCheck } from "react-icons/fa";

const Card = ({
  title = 0,
  price,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  isPopular = false,
}) => {
  return (
    <div className={`card ${isPopular ? "card-popular" : ""}`}>
      <div className={`card-header ${isPopular ? "card-popular" : ""}`}>
        <h3>
          {title}{" "}
          <span className={`${isPopular ? "badge-popular" : ""}`}>
            {isPopular ? "Popular" : ""}
          </span>
        </h3>
        <h1>
          Rp{price}
          <small>/Month</small>
        </h1>
      </div>
      <div className="card-body">
        <ul>
          <li><FaCheck/> {benefit1}</li>
          <li><FaCheck/> {benefit2}</li>
          <li><FaCheck/> {benefit3}</li>
          <li><FaCheck/> {benefit4}</li>
        </ul>
        <button className={`btn ${isPopular ? "btn-popular" : ""}`}>
          Purchase Plan
        </button>
      </div>
    </div>
  );
};

export default Card;