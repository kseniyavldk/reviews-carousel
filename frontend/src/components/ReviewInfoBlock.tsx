const ReviewInfoBlock = () => {
  return (
    <div className="review-info-block">
      <div className="info-left">
        <p>More than 53k positive reviews and ratings in App Store</p>
      </div>

      <div className="info-center">
        <p>Featured App</p>
      </div>

      <div className="info-right">
        <p>4.9</p>
        <div className="stars">
          {"★ ★ ★ ★ ★".split(" ").map((star, i) => (
            <span key={i}>{star}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewInfoBlock;
