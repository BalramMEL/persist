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
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures this runs only once

  const current = slides[currentSlide];

  return (
    <div className="bg-black text-white min-h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500 mb-4 uppercase tracking-wide">
          transformations made <br /> possible with GymFluencer
        </h2>
      </div>

      <div className="relative w-[80%] bg-black flex items-center">
        {/* Left Navigation Arrow */}
        <button
          onClick={prevSlide}
          className="cursor-pointer absolute left-[-9%] -translate-y-1/2 bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <span className="text-4xl flex items-center justify-center leading-none pb-2 ">
            &#8249;
          </span>
        </button>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col text-white font-orbitron w-[338px]">
            <div className="border-l-4 border-red-600 pl-5">
              <h2 className="text-2xl font-bold uppercase flex items-center gap-2">
                <span>Name:</span>
                <span className="font-semibold text-white pl-10">
                  {current.name}
                </span>
              </h2>
              <h2 className="text-2xl font-bold uppercase flex items-center gap-2 mt-2">
                <span>Age:</span>
                <span className="font-semibold text-white pl-14">
                  {current.age}
                </span>
              </h2>
            </div>

            <div className="mt-14">
              <div className="flex justify-between items-center w-full">
                <div className="text-sm font-bold px-2 py-1 border border-white">
                  <span>{current.duration}</span>
                </div>
                <h2 className="text-gray-400 font-semibold">Before</h2>
                <h2 className="text-gray-400 font-semibold">After</h2>
              </div>

              <div className="mt-4">
                <hr className="border-gray-400 my-2" />

                <div className="flex w-full gap-4 text-lg justify-between font-semibold items-center mt-8">
                  <span className="col-span-1 text-gray-400">Weight</span>
                  <span className="col-span-1 text-white text-center">
                    {current.beforeWeight}
                  </span>
                  <span className="col-span-1 text-white text-center">
                    {current.afterWeight}
                  </span>
                </div>

                <div className="flex w-full gap-4 text-lg justify-between font-semibold items-center mt-10">
                  <span className="col-span-1 text-gray-400">Body fat</span>
                  <span className="col-span-1 text-white text-center">
                    {current.beforeBodyFat}
                  </span>
                  <span className="col-span-1 text-white text-center">
                    {current.afterBodyFat}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <img
                src={current.beforeImage}
                alt="Before"
                className="w-72 rounded-md"
              />
              <h3 className="text-red-500 text-xl font-bold mt-2">BEFORE</h3>
            </div>

            <div className="text-center">
              <img
                src={current.afterImage}
                alt="After"
                className="w-72 rounded-md"
              />
              <h3 className="text-red-500 text-xl font-bold mt-2">AFTER</h3>
            </div>
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-[-9%] -translate-y-1/2 bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <span className="text-4xl flex items-center justify-center leading-none pb-2 ">
            &#8250;
          </span>
        </button>

      </div>
        <div className="flex justify-center mt-10 gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
    </div>
  );
};

export default TransformationSlide;
