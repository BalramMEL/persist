import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import fitness1 from "../../public/Images/fitness1.png";
import fitness2 from "../../public/Images/fitness2.png";
import fitness3 from "../../public/Images/fitness3.png";

const FitnessHub = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    const images = Array.from(container.children); // Get all child elements (images)

    // Position images vertically
    images.forEach((image, i) => {
      gsap.set(image, {
        y: `${-i * 100}%`, // Stack images vertically, moving upward initially
      });
    });

    // Infinite scroll animation
    const timeline = gsap.timeline({
      repeat: -1,
      defaults: { duration: 4, ease: "power2.inOut" }, // Increase duration for smoother animation
    });

    timeline
      .to(images, {
        y: "+=100%", // Move each image down by 100%
        stagger: 0, // No delay between image movements
      })
      .add(() => {
        // Reset position only after the third image has fully shown
        const firstImage = images.shift(); // Take the first image
        images.push(firstImage); // Move it to the end
        gsap.set(firstImage, { y: `${-100 * (images.length - 1)}%` }); // Reset its position to the top
      }, "+=0"); // Ensure no abrupt jumps during animation
  }, []);

  return (
    <div className="bg-[url('./Images/personalise.png')] bg-cover bg-center text-white font-orbitron min-h-screen flex flex-col items-center justify-center">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-start justify-between p-6 max-w-7xl w-full">
        {/* Left Section */}
        <div className="lg:w-[448px] min-w-auto min-h-auto text-center lg:text-left">
          <h1 className="text-4xl font-bold text-red-600 mb-10">
            YOUR <br />PERSONALIZED <br /> FITNESS HUB
          </h1>
          <p className="text-base mb-10 text-gray-300">
            Personalized workout routines tailored to your goals and preferences
          </p>
          <p className="text-base mb-10 text-gray-300">
            Get expert guidance with virtual coaching sessions, available
            anytime, anywhere.
          </p>
          <p className="text-base text-gray-300">
            Track your fitness journey with detailed analytics, goal setting,
            and achievements.
          </p>
        </div>

        {/* Right Section: Vertical Scroller */}
        <div
          ref={imageContainerRef}
          className="relative w-full lg:w-1/2 h-96 overflow-hidden flex flex-col items-center"
        >
          {/* Images */}
          <div className="absolute w-full h-full">
            <img
              src={fitness1}
              alt="Image 1"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute w-full h-full">
            <img
              src={fitness2}
              alt="Image 2"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute w-full h-full">
            <img
              src={fitness3}
              alt="Image 3"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessHub;
