import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import addressIcon from "../../public/svg/address.svg";
import phoneIcon from "../../public/svg/phone.svg";

gsap.registerPlugin(ScrollTrigger);

const GymFinder = () => {
  const gyms = [
    {
      name: "Physc Gym Nerul 24/7",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai, Maharashtra, 400706",
      isActive: true,
      image: "/Images/gym1.png",
    },
    {
      name: "Iron Fitness",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
      isActive: false,
      image: "/Images/gym2.png",
    },
    {
      name: "Hydropower Fitness & Gym",
      phone: "+91 22-0001-0211",
      address: "Nerul, Navi Mumbai",
      isActive: false,
      image: "/Images/gym3.png",
    },
    {
      name: "Yuva Fitness",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
      isActive: false,
      image: "/Images/gym3.png",
    },
    {
      name: "Gold's Gym",
      phone: "+91 9876543210",
      address: "Vashi, Navi Mumbai",
      isActive: false,
      image: "/Images/gym1.png",
    },
    {
      name: "The Fitness Hub",
      phone: "+91 9876543211",
      address: "Belapur, Navi Mumbai",
      isActive: false,
      image: "/Images/gym1.png",
    },
    {
      name: "Muscle Mania Gym",
      phone: "+91 9876543212",
      address: "Kharghar, Navi Mumbai",
      isActive: false,
      image: "/Images/gym1.png",
    },
    {
      name: "24/7 Gym",
      phone: "+91 9876543213",
      address: "Panvel, Navi Mumbai",
      isActive: false,
      image: "/Images/gym1.png",
    },
    {
      name: "Hydropower Fitness & Gym",
      phone: "+91 22-0001-0211",
      address: "Nerul, Navi Mumbai",
      isActive: false,
      image: "/Images/gym3.png",
    },
    {
      name: "Yuva Fitness",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
      isActive: false,
      image: "/Images/gym3.png",
    },
    {
      name: "Gold's Gym",
      phone: "+91 9876543210",
      address: "Vashi, Navi Mumbai",
      isActive: false,
      image: "/Images/gym1.png",
    },
  ];

  const [selectedGym, setSelectedGym] = useState(0);

  const containerRef = useRef(null);
  const gymsRef = useRef([]);
  const mapRef = useRef(null);

  const handleGymClick = (index) => {
    setSelectedGym(index === selectedGym ? null : index); // Toggle selection
  };

  useEffect(() => {
    // Animate main title
    gsap.fromTo(
      containerRef.current.querySelector("h1"),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current.querySelector("h1"),
          start: "top 80%",
        },
      }
    );

    // Animate subheading
    gsap.fromTo(
      containerRef.current.querySelector("p"),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current.querySelector("p"),
          start: "top 80%",
        },
      }
    );

    // Animate gym list
    gymsRef.current.forEach((gym, index) => {
      gsap.fromTo(
        gym,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: gym,
            start: "top 90%",
          },
        }
      );
    });

    // Animate map
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="bg-black text-white w-screen min-h-screen flex flex-col my-3"
      ref={containerRef}
    >
      <div>
        <h1 className="text-center text-red-500 text-4xl font-bold mb-4">
          FIND YOUR NEAREST GYM
        </h1>
        <p className="text-center text-lg text-[#EFEFEF] mb-6">
          Easily discover gyms near your location to kickstart <br /> your fitness
          journey today!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex md:flex-row flex-col justify-center pl-3 mt-3 h-[656px]">
        {/* Left Side: Gym List */}
        <div className="w-[40%] p-6 bg-[#121212] overflow-y-auto rounded-xl">
          <div className="space-y-6">
            {gyms.map((gym, index) => (
              <div
                key={index}
                onClick={() => handleGymClick(index)}
                className={`gym-card flex items-center gap-4 rounded-lg overflow-hidden ${
                  selectedGym === index ? "bg-red-500 border border-red-500" : "bg-[#1A1A1A]"
                } cursor-pointer`}
                ref={(el) => (gymsRef.current[index] = el)}
              >
                <img
                  src={gym.image}
                  alt={gym.name}
                  className="w-[192px] h-[160px] object-cover rounded-md hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <div className="">
                  <h2 className="text-2xl mb-4 font-bold">{gym.name}</h2>
                  <p className="text-sm mb-3">
                    <img
                      src={phoneIcon }
                      alt="Phone Icon"
                      className="w-4 h-4 inline mr-2"
                    />
                    {gym.phone}
                  </p>
                  <p className="text-sm mt-3">
                    <img
                      src={addressIcon }
                      alt="Address Icon"
                      className="w-4 h-4 inline mr-2"
                    />
                    {gym.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Google Map */}
        <div className="w-[608px]" ref={mapRef}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.456144927029!2d73.02777917531616!3d19.032435382178555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795dd979e6c3d%3A0x5f6df5f470a3b021!2sNerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e0!3m2!1sen!2sin!4v1689179615000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GymFinder;
