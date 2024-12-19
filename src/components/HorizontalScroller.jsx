import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HorizontalScroller = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      x: "-100%", // Moves the text out of view horizontally
      duration: 20, // Adjust duration for speed
      ease: "linear",
      repeat: -1, // Infinite repeat
    });
  }, []);

  return (
    <div className="bg-red-600 overflow-hidden whitespace-nowrap h-[45px] flex items-center">
      <div
        ref={marqueeRef}
        className="text-white uppercase text-sm tracking-wide font-bold flex gap-8"
      >
        <span>Progress Tracking</span>
        <span >.</span>
        <span>Fitness Plans</span>
        <span>.</span>
        <span>Workout Routines</span>
        <span>.</span>
        <span>Progress Tracking</span>
        <span>.</span>
        <span>Fitness Plans</span>
        <span>.</span>
        <span>Workout Routines</span>
        <span>.</span>
        <span>Progress Tracking</span>
        <span>.</span>
        <span>Fitness Plans</span>
        <span>.</span>
        <span>Workout Routines</span>
        <span>.</span>
        <span>Progress Tracking</span>
        <span>.</span>
        <span>Fitness Plans</span>
        <span>.</span>
        <span>Workout Routines</span>
        <span>.</span>
        <span>Progress Tracking</span>
        <span>.</span>
        <span>Fitness Plans</span>
        <span>.</span>
        <span>Workout Routines</span>
        <span>.</span>
        <span>Progress Tracking</span>
        <span>.</span>
        <span>Fitness Plans</span>
        <span>.</span>
        <span>Workout Routines</span>
        <span>.</span>
        <span>Progress Tracking</span>
        <span>.</span>
        <span>Fitness Plans</span>
        <span>.</span>
        <span>Workout Routines</span>
        <span>.</span>
        <span>Progress Tracking</span>
        <span>.</span>
        <span>Fitness Plans</span>
        <span>.</span>
        <span>Workout Routines</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default HorizontalScroller;
