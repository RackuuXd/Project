import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import heroFishVideo from "@/assets/hero-fish.mp4";

const HeroFish = () => {
  const navigate = useNavigate();
  const [rippling, setRippling] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  const fishY = useTransform(scrollY, [0, 3000], [0, 500]);
  const fishRotate = useTransform(scrollY, [0, 3000], [0, 3]);
  const smoothY = useSpring(fishY, { stiffness: 40, damping: 20 });
  const smoothRotate = useSpring(fishRotate, { stiffness: 40, damping: 20 });

  const handleClick = () => {
    setRippling(true);
    setTimeout(() => navigate("/featured"), 600);
    setTimeout(() => setRippling(false), 800);
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ willChange: "transform" }}>
      <motion.div
        className={`absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer ripple-effect ${rippling ? "rippling" : ""}`}
        style={{ y: smoothY, rotate: smoothRotate }}
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          src={heroFishVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-[80vw] md:w-[55vw] lg:w-[45vw] max-w-[850px] opacity-45 select-none object-cover"
          style={{ filter: "brightness(0.65) contrast(1.1)" }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
};

export default HeroFish;
