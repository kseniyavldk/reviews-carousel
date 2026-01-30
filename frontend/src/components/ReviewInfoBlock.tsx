import FeaturedL from "../assets/featured-l.png";
import FeaturedR from "../assets/featured-r.png";
import Rating from "../assets/rating.png";
import "./ReviewInfoBlock.css";

const ReviewInfoBlock = () => {
  return (
    <section className="review-info">
      <div className="review-info__item review-info__item--left">
        <p>
          More than 53k positive reviews
          <br />
          and ratings in the App Store
        </p>
      </div>

      <div className="review-info__item review-info__item--center">
        <img src={FeaturedL} alt="" />
        <div>
          <div className="title">Featured App</div>
          <div className="subtitle">in 100+ countries</div>
        </div>
        <img src={FeaturedR} alt="" />
      </div>

      <div className="review-info__item review-info__item--right">
        <div className="rating-left">
          <img src={Rating} alt="Rating stars" />
          <span className="total">53k total ratings</span>
        </div>

        <div className="rating-right">
          <div className="score">4.9</div>
          <span className="out-of">out of 5</span>
        </div>
      </div>
    </section>
  );
};

export default ReviewInfoBlock;
