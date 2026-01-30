import { useEffect, useRef, useState } from "react";
import { Review } from "../types/review";
import { fetchReviews } from "../api/reviews";

import starsImg from "../assets/stars.png";
import CarouselControls from "./CarouselControls";

import "./ReviewsCarousel.css";

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchReviews()
      .then((data) => {
        if (data?.reviews) setReviews(data.reviews);
      })
      .catch(console.error);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!reviews.length) return;

    intervalRef.current = setInterval(next, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [reviews]);

  if (!reviews.length) return null;

  const visibleCount = 3;
  const totalVisible = visibleCount + 2;

  const getVisibleReviews = () => {
    return Array.from({ length: totalVisible }).map((_, i) => {
      const index = (currentIndex - 1 + i + reviews.length) % reviews.length;
      return reviews[index];
    });
  };

  return (
    <div className="carousel">
      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          {getVisibleReviews().map((review, i) => {
            const isSide = i === 0 || i === totalVisible - 1;
            if (!isSide) {
              return (
                <div
                  key={review.id}
                  className="carousel-card carousel-card-main"
                >
                  <h3>{review.title}</h3>
                  <div className="rating-stars">
                    <img src={starsImg} alt="rating stars" />
                  </div>
                  <p>{review.text}</p>
                </div>
              );
            }
            return (
              <div
                key={review.id}
                className="carousel-card carousel-card--side"
              >
                <h3>{review.title}</h3>
                <div className="rating-stars">
                  <img src={starsImg} alt="rating stars" />
                </div>
                <p>{review.text}</p>
              </div>
            );
          })}
        </div>

        <div className="carousel-controls-wrapper">
          <CarouselControls onPrev={prev} onNext={next} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
