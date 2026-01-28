import { useEffect, useRef, useState } from "react";
import { Review } from "../types/review";
import { fetchReviews } from "../api/reviews";

import starsImg from "../assets/stars.png";

import "./ReviewsCarousel.css";

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchReviews()
      .then((data) => {
        if (data && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [reviews]);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(next, 3000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  if (!reviews.length) return <div>Loading...</div>;

  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const visibleCount = getVisibleCount();

  const getVisibleReviews = () => {
    const visible: Review[] = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div
      className="carousel"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={stopAutoplay}
      onTouchEnd={startAutoplay}
    >
      <button className="carousel-btn left" onClick={prev}>
        ◀
      </button>

      <div className="carousel-track">
        {getVisibleReviews().map((review) => (
          <div className="carousel-card" key={review.id}>
            <h3>{review.title}</h3>{" "}
            <div className="rating-stars">
              <img src={starsImg} alt="rating stars" />
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>

      <button className="carousel-btn right" onClick={next}>
        ▶
      </button>
    </div>
  );
};

export default ReviewsCarousel;
