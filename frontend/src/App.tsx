import ReviewsCarousel from "./components/ReviewsCarousel";
import ReviewInfoBlock from "./components/ReviewInfoBlock";
import "./App.css";

function App() {
  return (
    <div className="reviews-section">
      <h1>Ratings & Reviews</h1>
      <ReviewInfoBlock />
      <ReviewsCarousel />
    </div>
  );
}

export default App;
