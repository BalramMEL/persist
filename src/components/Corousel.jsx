import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const element = carouselRef.current;

    gsap.fromTo(
      element,
      { width: "0vw" },
      {
        width: "100vw",
        ease:"power2.inOut",
        scrollTrigger: {
          trigger: element,
          start: "bottom 100%",
          end: "5% 100%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      ref={carouselRef}
      className="flex flex-col bg-black font-orbitron text-[72px] text-white mx-auto overflow-hidden"
    >
      {/* Top Moving Line */}
      <div className="flex whitespace-nowrap text-white uppercase marquee-left">
        {/* Original Line */}
        <div>Motivation / Progress / Fitness / Transformation / Strength /</div>
        {/* Duplicate Line */}
        <div>Motivation / Progress / Fitness / Transformation / Strength /</div>
      </div>

      {/* Bottom Moving Line */}
      <div className="flex whitespace-nowrap text-red-900 uppercase marquee-right">
        {/* Original Line */}
        <div>Working / Community / Strength / Transformation / Motivation /</div>
        {/* Duplicate Line */}
        <div>Working / Community / Strength / Transformation / Motivation /</div>
      </div>
    </div>
  );
};

export default Carousel;