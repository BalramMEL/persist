import transformation1 from "../../public/Images/transformation1.png";
import transformation2 from "../../public/Images/transformation2.png";

import React, { useState, useEffect } from "react";

const TransformationSlide = () => {
  const slides = [
    {
      name: "Poovannan",
      age: 32,
      duration: "9 weeks",
      beforeWeight: "84 kg",
      afterWeight: "75 kg",
      beforeBodyFat: "27%",
      afterBodyFat: "15%",
      beforeImage: transformation1,
      afterImage: transformation2,
    },
    {
      name: "Kamal",
      age: 28,
      duration: "12 weeks",
      beforeWeight: "90 kg",
      afterWeight: "78 kg",
      beforeBodyFat: "30%",
      afterBodyFat: "18%",
      beforeImage: transformation1,
      afterImage: transformation2,
    },
    {
      name: "Rajesh",
      age: 28,
      duration: "15 weeks",
      beforeWeight: "100 kg",
      afterWeight: "70 kg",
      beforeBodyFat: "20%",
      afterBodyFat: "7%",
      beforeImage: transformation1,
      afterImage: transformation2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500); // Match the animation duration
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAnimating(false);
      }, 500); // Match the animation duration
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-screen flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500 mb-4 uppercase tracking-wide">
          transformations made <br /> possible with GymFluencer
        </h2>
      </div>

      {/* Main Slider Section */}
      <div className="relative w-[100%] bg-black flex items-center overflow-hidden">
        {/* Left Navigation Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-500 transition z-10"
        >
          <span className="text-4xl flex items-center justify-center leading-none pb-2">
            &#8249;
          </span>
        </button>

        {/* Slide Content */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center justify-around gap-10 p-6"
              style={{ flex: "0 0 100%" }}
            >
              {/* Slide Information */}
              <div className="flex flex-col text-white font-orbitron w-full lg:w-[30%]">
                <div className="border-l-4 border-red-600 pl-5">
                  <h2 className="text-2xl font-bold uppercase flex items-center gap-2">
                    <span>Name:</span>
                    <span className="font-semibold text-white">
                      {slide.name}
                    </span>
                  </h2>
                  <h2 className="text-2xl font-bold uppercase flex items-center gap-2 mt-2">
                    <span>Age:</span>
                    <span className="font-semibold text-white">
                      {slide.age}
                    </span>
                  </h2>
                </div>

                <div className="mt-14">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-sm font-bold px-2 py-1 border border-white">
                      <span>{slide.duration}</span>
                    </div>
                    <h2 className="text-gray-400 font-semibold">Before</h2>
                    <h2 className="text-gray-400 font-semibold">After</h2>
                  </div>

                  <div className="mt-4">
                    <hr className="border-gray-400 my-2" />

                    <div className="flex w-full gap-4 text-xl justify-between font-semibold items-center mt-8">
                      <span className="col-span-1 text-gray-400">Weight</span>
                      <span className="col-span-1 text-white text-center">
                        {slide.beforeWeight}
                      </span>
                      <span className="col-span-1 text-white text-center">
                        {slide.afterWeight}
                      </span>
                    </div>

                    <div className="flex w-full gap-4 text-xl justify-between font-semibold items-center mt-10">
                      <span className="col-span-1 text-gray-400">Body fat</span>
                      <span className="col-span-1 text-white text-center">
                        {slide.beforeBodyFat}
                      </span>
                      <span className="col-span-1 text-white text-center">
                        {slide.afterBodyFat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before & After Images */}
              <div className="flex items-center justify-center gap-6 lg:gap-12">
                <div className="text-center">
                  <img
                    src={slide.beforeImage}
                    alt="Before"
                    className="w-[296px] h-auto max-w-full rounded-md object-contain"
                  />
                  <h3 className="text-red-500 text-xl font-bold mt-2">
                    BEFORE
                  </h3>
                </div>
                <div className="text-center">
                  <img
                    src={slide.afterImage}
                    alt="After"
                    className="w-[296px] h-auto max-w-full rounded-md object-contain"
                  />
                  <h3 className="text-red-500 text-xl font-bold mt-2">AFTER</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-10 bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-500 transition z-10"
      >
        <span className="text-4xl flex items-center justify-center leading-none pb-2">&#8250;</span>
      </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TransformationSlide;
