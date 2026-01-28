import { Review } from "../types/review";

interface ReviewsResponse {
  reviews: Review[];
}

export const fetchReviews = async (): Promise<ReviewsResponse> => {
  const res = await fetch("http://localhost:4000/api/reviews");
  if (!res.ok) throw new Error("Failed to fetch reviews");
  return res.json();
};
