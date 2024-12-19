import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const services = servicesRef.current.querySelectorAll(".service-item");

    gsap.fromTo(
      services,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3, // Delay between each animation
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top center", // Animation starts when section reaches center of viewport
          end: "bottom top", // Animation ends when section scrolls past top of viewport
          toggleActions: "play none none reverse", // Controls play/pause/reverse actions
        },
      }
    );
  }, []);

  return (
   <section
  ref={servicesRef}
  className="bg-black text-white min-h-screen px-8 py-16"
>
  {/* Title Section */}
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-red-500 uppercase mb-4">
      Our Services
    </h2>
    <p className="text-lg text-gray-300">
      GymFluencer offers 5 essential services to help you <br /> achieve your
      fitness goals with ease and flexibility.
    </p>
  </div>

  {/* Image Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
    {/* Images */}
    {["Train", "Analyze", "Track", "Connect", "Challenge"].map(
      (service, index) => (
        <div
          key={index}
          className="relative overflow-hidden w-[303.84px] h-[668px] service-item cursor-pointer"
        >
          <img
            src={`../Images/service-${index + 1}.png`}
            alt={`Service ${index + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-500 scale-100 hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl font-bold uppercase">
              {service}
            </span>
          </div>
        </div>
      )
    )}
  </div>
</section>

  );
};

export default Services;
