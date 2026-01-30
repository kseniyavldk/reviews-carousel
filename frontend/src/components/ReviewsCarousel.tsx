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
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (deltaX > minSwipeDistance) {
      next();
    } else if (deltaX < -minSwipeDistance) {
      prev();
    }
  };

  useEffect(() => {
    fetchReviews()
      .then((data) => {
        if (data?.reviews) setReviews(data.reviews);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    if (isMobile) {
      return [reviews[currentIndex]];
    }
    if (isTablet) {
      return Array.from({ length: 3 }).map((_, i) => {
        const index = (currentIndex - 1 + i + reviews.length) % reviews.length;
        return reviews[index];
      });
    }

    return Array.from({ length: totalVisible }).map((_, i) => {
      const index = (currentIndex - 1 + i + reviews.length) % reviews.length;
      return reviews[index];
    });
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          {getVisibleReviews().map((review, i) => {
            const isSide =
              !isTablet && !isMobile && (i === 0 || i === totalVisible - 1);
            return (
              <div
                key={review.id}
                className={`carousel-card ${
                  isSide ? "carousel-card--side" : "carousel-card-main"
                }`}
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
