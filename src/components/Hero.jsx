import React, { useEffect, useRef } from 'react'
import TrustedUsers from './Avatar'
import gsap from 'gsap';

const Hero = () => {

const heroRef = useRef();
  const titleRef = useRef();
  const subtextRef = useRef();
  const trustedUsersRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    // Set initial state
    gsap.set([trustedUsersRef.current, titleRef.current, subtextRef.current], {
      opacity: 0,
      y: -50,
    });

    // GSAP Animation Sequence
    tl.to(trustedUsersRef.current, { y: 0, opacity: 1 })
      .to(titleRef.current, { y: 0, opacity: 1 }, "-=0.7")
      .to(subtextRef.current, { y: 0, opacity: 1 }, "-=0.7");
  }, []);
    
  return (
      <div
        ref={heroRef}
      className="relative font-orbitron h-dvh w-screen overflow-x-hidden bg-[#000000]"
      style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 1, 0.8)), url('./Images/poster.jpg')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    >
          <div
              ref={trustedUsersRef}
              className="absolute top-[29%] left-1/2 -translate-x-1/2">
            <TrustedUsers />
          </div>
          
        {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-end w-full h-full text-center pb-44 px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
              <h1
                  ref={titleRef}
                  className="sm:text-7xl md:text-[85px] font-bold font-orbitron text-red-500 leading-tight">
          Track Your Fitness <br /> Journey
        </h1>

        {/* Subtext */}
        <p ref={subtextRef} className="mt-6 max-w-4xl text-lg sm:text-lg text-gray-300">
          Discover the ultimate fitness companion with GymFluencer.
          Effortlessly log your workouts, <br /> count reps, and track calories burned.
          Stay motivated and achieve your goals with ease.
        </p>
      </div>
    </div>
      
  )
}

export default Hero