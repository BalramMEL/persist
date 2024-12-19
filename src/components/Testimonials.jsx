import React, { useEffect, useRef } from "react";
import "react-horizontal-scrolling-menu/dist/styles.css";
import testimonial1 from "../../public/Images/testimonial1.png";
import testimonial2 from "../../public/Images/testimonial2.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const testimonials = [
  {
    image: testimonial1, // Replace with actual image URLs
    text: "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    name: "Angelina Jolie",
    role: "Model",
  },
  {
    image: testimonial2,
    text: "I love how user-friendly the app is. Logging workouts has never been easier!",
    name: "Michael Field",
    role: "Software Engineer",
  },
  {
    image: testimonial1,
    text: "This app has completely changed the way I track my fitness progress!",
    name: "Sarah Connor",
    role: "Fitness Enthusiast",
  },
  {
    image: testimonial2,
    text: "A must-have app for anyone serious about their fitness journey.",
    name: "John Doe",
    role: "Personal Trainer",
  },
  {
    image: testimonial1,
    text: "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer! has transformed the way I work out",
    name: "Jane Smith",
    role: "Yoga Instructor",
  },
];


gsap.registerPlugin(ScrollTrigger);

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card flex flex-row bg-[#121212] text-white rounded-xl shadow-lg min-w-[688px] h-[296px] mx-4">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="rounded-lg h-[296px] w-[256px] object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="flex flex-col justify-between mx-6 w-full overflow-hidden">
        <div className="mt-10">
          {/* Star Rating */}
          <div className="flex gap-1 justify-start mb-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8 text-red-600"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.432l-6 5.857 1.417 8.283L12 18.896l-7.417 4.676L6 15.289 0 9.432l8.332-1.277z" />
              </svg>
            ))}
          </div>
          {/* Testimonial Text */}
          <p className="text-base leading-8 font-medium overflow-hidden whitespace-normal break-words line-clamp-3">
            {testimonial.text}
          </p>
        </div>
        {/* User Info */}
        <div className="my-6">
          <p className="font-bold text-lg mb-1">{testimonial.name}</p>
          <p className="text-sm text-gray-400">
            <span className="h-[2px] w-[20px] text-#BDBDBD">- </span>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialScroller = () => {
  const scrollContainerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".testimonial-card");

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: 100, y: -50 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate testimonial cards
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 100, y: 100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power4.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scrollInterval = setInterval(() => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth) {
          scrollAmount = 0;
        }
      }
    }, 16); // Approximately 60 FPS

    return () => clearInterval(scrollInterval);
  }, []);

  return (
   <div className="min-w-screen py-10 overflow-hidden font-orbitron">
      <div className="mb-10" ref={titleRef}>
        <h1 className="text-5xl tracking-wider font-bold mb-2 text-white text-center">
          What people say
        </h1>
      </div>
      <div
        className="flex overflow-x-hidden whitespace-nowrap"
        ref={scrollContainerRef}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard testimonial={testimonial} key={index} />
        ))}
        {testimonials.map((testimonial, index) => (
          // Duplicate testimonials for infinite effect
          <TestimonialCard testimonial={testimonial} key={`duplicate-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialScroller;
