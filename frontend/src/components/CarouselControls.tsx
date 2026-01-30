import { useState } from "react";

import btnL from "../assets/btn-l.png";
import btnLHover from "../assets/btn-l-h.png";
import btnR from "../assets/btn-r.png";
import btnRHover from "../assets/btn-r-h.png";

import "./CarouselControls.css";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

const CarouselControls = ({ onPrev, onNext }: Props) => {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <div className="carousel-controls">
      <button
        className="carousel-control"
        onClick={onPrev}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
      >
        <img src={hovered === "left" ? btnLHover : btnL} alt="Previous" />
      </button>

      <button
        className="carousel-control"
        onClick={onNext}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        <img src={hovered === "right" ? btnRHover : btnR} alt="Next" />
      </button>
    </div>
  );
};

export default CarouselControls;
