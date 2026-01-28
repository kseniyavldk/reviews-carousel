import ReviewsCarousel from "./components/ReviewsCarousel";
import ReviewInfoBlock from "./components/ReviewInfoBlock";
import "./App.css";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Ratings & Reviews</h1>
      <ReviewInfoBlock />
      <ReviewsCarousel />
    </div>
  );
}

export default App;
