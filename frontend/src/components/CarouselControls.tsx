import { useState } from "react";

import btnL from "../assets/btn-l.png";
import btnL2x from "../assets/btn-l@2x.png";
import btnL3x from "../assets/btn-l@3x.png";
import btnLHover from "../assets/btn-l-h.png";
import btnLHover2x from "../assets/btn-l-h@2x.png";
import btnLHover3x from "../assets/btn-l-h@3x.png";

import btnR from "../assets/btn-r.png";
import btnR2x from "../assets/btn-r@2x.png";
import btnR3x from "../assets/btn-r@3x.png";
import btnRHover from "../assets/btn-r-h.png";
import btnRHover2x from "../assets/btn-r-h@2x.png";
import btnRHover3x from "../assets/btn-r-h@3x.png";

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
        <img
          src={hovered === "left" ? btnLHover : btnL}
          srcSet={
            hovered === "left"
              ? `${btnLHover2x} 2x, ${btnLHover3x} 3x`
              : `${btnL2x} 2x, ${btnL3x} 3x`
          }
          alt="Previous"
        />
      </button>

      <button
        className="carousel-control"
        onClick={onNext}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          src={hovered === "right" ? btnRHover : btnR}
          srcSet={
            hovered === "right"
              ? `${btnRHover2x} 2x, ${btnRHover3x} 3x`
              : `${btnR2x} 2x, ${btnR3x} 3x`
          }
          alt="Next"
        />
      </button>
    </div>
  );
};

export default CarouselControls;
