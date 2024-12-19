import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import mission from "../../public/Images/mission.png";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtextRef = useRef();
  const statsRef = useRef();

  const [animateCountUp, setAnimateCountUp] = useState(false);
  
   const [showVideo, setShowVideo] = useState(false);
  const [transformStyle, setTransformStyle] = useState("");
  const posterRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!posterRef.current) return;

    const { left, top, width, height } = posterRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 3;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle(""); // Reset the transform style on mouse leave
  };

  useEffect(() => {
    // ScrollTrigger for the whole section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%", // Trigger when top of section is at 80% of viewport
        end: "bottom 60%", // Optional end trigger
        toggleActions: "play none none none", // Animation plays only once
        markers: false, // Set to true to visualize trigger points
      },
      defaults: { ease: "power2.out", duration: 1 },
    });

    // Initial GSAP setup
    gsap.set([titleRef.current, subtextRef.current], {
      opacity: 0,
      y: 50,
    });

    // GSAP Animation Sequence
    tl.to(titleRef.current, { y: 0, opacity: 1 })
      .to(subtextRef.current, { y: 0, opacity: 1 }, "-=0.7");

    // Trigger CountUp animation with ScrollTrigger
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 90%",
      onEnter: () => setAnimateCountUp(true), // Enable CountUp when scrolled into view
    });
  }, []);

  return (
    <section ref={heroRef} className="bg-black text-white py-16 px-8">
      {/* Main Title */}
      <div className="text-center mb-12">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-red-500">
          YOUR FITNESS.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-red-500 mt-2">
          OUR MISSION.
        </h2>
      </div>

      {/* Mission Statement */}
      <div ref={subtextRef} className="max-w-4xl mx-auto text-center text-[#EFEFEF] mb-16">
        <p className="text-lg leading-relaxed">
          At GymFluencer, our mission is simple: to provide the tools and support
          you need to reach your fitness goals. We combine innovative technology
          with personalized guidance to make fitness easier, more accessible,
          and more motivating. Join us as we help you transform your fitness
          journey, one workout at a time.
        </p>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0"
      >
        {/* Stat 1 */}
        <div className="text-center px-8">
          <h3 className="text-4xl font-bold text-[#FFFFFF]">
            {animateCountUp && <CountUp start={100} end={463} duration={3} />}k+
          </h3>
          <p className="text-gray-400 mt-2">
            Workouts logged and progress tracked every month
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-gray-800 h-24"></div>
        <div className="block md:hidden border-t border-gray-800 w-48 my-4"></div>

        {/* Stat 2 */}
        <div className="text-center px-8">
          <h3 className="text-4xl font-bold text-[#FFFFFF]">
            {animateCountUp && <CountUp start={0} end={163} duration={3} />}k+
          </h3>
          <p className="text-gray-400 mt-2">
            Fitness enthusiasts connected through our platform
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-gray-800 h-24"></div>
        <div className="block md:hidden border-t border-gray-800 w-48 my-4"></div>

        {/* Stat 3 */}
        <div className="text-center px-8">
          <h3 className="text-4xl font-bold text-[#FFFFFF]">
            {animateCountUp && <CountUp start={0} end={13} duration={2} />}+
          </h3>
          <p className="text-gray-400 mt-2">
            Countries where GymFluencer is making an impact
          </p>
        </div>
      </div>

      {/* Video Section */}
     <div className="flex justify-center items-center mt-16">
      {showVideo ? (
        <div className="w-full max-w-3xl">
          <iframe
            className="rounded-lg shadow-lg"
            width="756.16px"
            height="452.53px"
            src="https://www.youtube.com/embed/pznrAWMhahA?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div
          ref={posterRef}
          className="relative w-full max-w-3xl cursor-pointer rounded-lg shadow-lg"
          onClick={() => setShowVideo(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: transformStyle }}
        >
          <img
            src={mission}
            alt="Video Poster"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-opacity duration-300 rounded-lg"></div>
        </div>
      )}
    </div>
    </section>
  );
};

export default MissionSection;
