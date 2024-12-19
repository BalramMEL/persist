import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import earth from "../../public/svg/earth.svg";
import profile from "../../public/svg/profile.svg";
import smile from "../../public/svg/smile.svg";
import start2 from "../../public/svg/star2.svg";
import star from "../../public/svg/star.svg";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Title Animation (Split text into characters and animate)
    const animateText = (ref, delay = 0) => {
      const text = ref.current;
      const chars = text.textContent.split("").map((char) => {
        return char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`;
      });
      text.innerHTML = chars.join("");
      gsap.fromTo(
        text.querySelectorAll("span"),
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.03,
          duration: 0.8,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          },
        }
      );
    };

    animateText(titleRef);
    animateText(subtitleRef, 0.1);
    animateText(descriptionRef, 0.2);

    // Left Content Animation
    const leftItems = leftRef.current.children;
    gsap.fromTo(
      leftItems,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      }
    );

    // Right Content Animation
    const rightItems = rightRef.current.children;
    gsap.fromTo(
      rightItems,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      }
    );

    // Central Image Animation (Faster)
    gsap.fromTo(
      imageRef.current,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-black text-white min-h-screen py-16 px-6">
      {/* Title Section */}
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center justify-center px-4 py-2 mb-3 bg-[#131315] border border-gray-800 rounded-full"
          ref={titleRef}
        >
          <span className="text-sm flex items-center gap-1.5">
            <svg width="18" height="17" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7481 7.54395C18.653 7.25273 18.4745 6.99586 18.2346 6.80527C17.9948 6.61468 17.7042 6.49877 17.3991 6.47195L12.9461 6.08695L11.2041 1.93495C11.0844 1.65231 10.8842 1.41117 10.6284 1.24163C10.3726 1.0721 10.0725 0.981689 9.76555 0.981689C9.45865 0.981689 9.15854 1.0721 8.90271 1.24163C8.64688 1.41117 8.44666 1.65231 8.32706 1.93495L6.58306 6.08695L2.13006 6.47195C1.82318 6.49713 1.5306 6.61243 1.28906 6.80339C1.04752 6.99434 0.867804 7.25242 0.77249 7.54519C0.677177 7.83797 0.670519 8.15239 0.753353 8.44894C0.836186 8.74549 1.00482 9.01095 1.23805 9.21195L4.62205 12.165L3.60606 16.559C3.53651 16.8582 3.55671 17.1714 3.66414 17.4592C3.77157 17.7471 3.96146 17.9969 4.21008 18.1775C4.4587 18.358 4.75501 18.4613 5.06199 18.4743C5.36897 18.4874 5.67299 18.4097 5.93606 18.251L9.76305 15.926L13.5911 18.251C13.8541 18.4094 14.158 18.4868 14.4648 18.4736C14.7716 18.4604 15.0677 18.3571 15.3161 18.1766C15.5646 17.9961 15.7543 17.7464 15.8617 17.4587C15.9691 17.171 15.9894 16.8581 15.9201 16.559L14.9041 12.165L18.2881 9.21195C18.5205 9.01011 18.6881 8.74415 18.7699 8.44741C18.8518 8.15067 18.8441 7.83638 18.7481 7.54395ZM13.5331 10.874C13.319 11.0603 13.1597 11.3015 13.0723 11.5716C12.9849 11.8417 12.9727 12.1305 13.0371 12.407L13.9271 16.26L10.5721 14.223C10.3284 14.0747 10.0487 13.9962 9.76355 13.9962C9.47836 13.9962 9.19867 14.0747 8.95505 14.223L5.60006 16.26L6.49006 12.407C6.55449 12.1305 6.54236 11.8417 6.45497 11.5716C6.36758 11.3015 6.20823 11.0603 5.99406 10.874L3.01805 8.27795L6.93506 7.93795C7.2187 7.91374 7.49027 7.81217 7.72019 7.64431C7.95011 7.47646 8.12958 7.24874 8.23906 6.98595L9.76305 3.35395L11.2871 6.98595C11.3966 7.24867 11.5761 7.47633 11.806 7.64418C12.0359 7.81202 12.3074 7.91363 12.5911 7.93795L16.5091 8.27795L13.5331 10.874Z" fill="white"/>
            </svg>
            Our Benefits
          </span>
        </div>
        <h2
          className="text-5xl font-bold text-red-500 mb-4 uppercase tracking-wider"
          ref={subtitleRef}
        >
          Discover GymFluencer Benefits
        </h2>
        <p ref={descriptionRef} className="text-gray-300 text-lg max-w-2xl mx-auto">
  Unlock your full potential with GymFluencer, your personal fitness partner.
</p>
<p ref={descriptionRef} className="text-gray-300 text-lg max-w-2xl mx-auto">
  Progress and motivation made simple.
</p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Benefits Section */}
        <div className="space-y-8" ref={leftRef}>
          {/* Effortless Workout Logging */}
          <div className="bg-[#09090A] p-6 rounded-xl flex flex-col items-start gap-4 shadow-md border border-gray-900 w-[426.4px]">
            <div className="bg-[#18181A] p-3 rounded-2xl flex items-center justify-center w-12 h-12 border border-gray-800">
              <img src={profile} alt="Profile" />
            </div>
            <div>
              <h3 className="text-[#FF3C3C] text-2xl font-semibold mb-1">
                Effortless Workout Logging
              </h3>
              <p className="text-[#96979C] text-lg">
                Easily log your workouts and monitor your progress over time
                with our intuitive logging feature.
              </p>
            </div>
          </div>

          {/* Accurate Rep Counting */}
          <div className="bg-[#09090A] p-6 rounded-xl flex flex-col items-start gap-4 shadow-md border border-gray-900 w-[426.4px]">
            <div className="bg-[#18181A] p-3 rounded-2xl flex items-center justify-center w-12 h-12 border border-gray-800">
              <img src={earth} alt="Earth" />
            </div>
            <div>
              <h3 className="text-[#FF3C3C] text-2xl font-semibold mb-1">
                Accurate Rep Counting
              </h3>
              <p className="text-[#96979C] text-lg">
                Count your reps accurately with our app, ensuring consistency
                and improved performance.
              </p>
            </div>
          </div>
        </div>

        {/* Central Smartphone Image */}
        <div className="flex justify-center" ref={imageRef}>
          <div className="relative w-[300px] h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="../Images/benefits.png"
              alt="App Mockup"
              className="w-full h-full object-cover mt-10"
            />
          </div>
        </div>

        {/* Right Benefits Section */}
        <div className="space-y-8" ref={rightRef}>
          {/* Personalized Workout Plans */}
          <div className="bg-[#09090A] p-6 rounded-xl flex flex-col items-start gap-4 shadow-md border border-gray-900 w-[426.4px]">
            <div className="bg-[#18181A] p-3 rounded-2xl flex items-center justify-center w-12 h-12 border border-gray-800">
              <img src={start2} alt="Star" />
            </div>
            <div>
              <h3 className="text-[#FF3C3C] text-2xl font-semibold mb-1">
                Personalized Workout Plans
              </h3>
              <p className="text-[#96979C] text-lg">
                AI-powered workout plans tailored to your fitness level, goals,
                and progress.
              </p>
            </div>
          </div>

          {/* Calorie Calculation & Diet Plans */}
          <div className="bg-[#09090A] p-6 rounded-xl flex flex-col items-start gap-4 shadow-md border border-gray-900 w-[426.4px]">
            <div className="bg-[#18181A] p-3 rounded-2xl flex items-center justify-center w-12 h-12 border border-gray-800">
              <img src={smile} alt="Smile" />
            </div>
            <div>
              <h3 className="text-[#FF3C3C] text-2xl font-semibold mb-1">
                Calorie Calculation & Personalized Diet Plans
              </h3>
              <p className="text-[#96979C] text-lg">
                Calculate calories burned during workouts and AI-customized
                meal plans for optimal nutrition and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
