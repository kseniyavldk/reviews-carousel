import FeaturedL from "../assets/featured-l.png";
import FeaturedR from "../assets/featured-r.png";
import Rating from "../assets/rating.png";
import "./ReviewInfoBlock.css";

const ReviewInfoBlock = () => {
  return (
    <section className="review-info">
      <div className="review-info__left">
        <p>
          More than <strong>53k</strong> positive reviews and ratings in App
          Store
        </p>
      </div>

      <div className="review-info__center">
        <img src={FeaturedL} alt="" className="review-info__icon" />

        <div className="review-info__text">
          <span className="review-info__title">Featured App</span>
          <span className="review-info__subtitle">in 100+ countries</span>
        </div>

        <img src={FeaturedR} alt="" className="review-info__icon" />
      </div>

      <div className="review-info__right">
        <img src={Rating} alt="Rating stars" className="review-info__rating" />
        <span className="review-info__score">4.9</span>
      </div>
    </section>
  );
};

export default ReviewInfoBlock;
