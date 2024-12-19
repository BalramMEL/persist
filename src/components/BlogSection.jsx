import React, { useEffect } from "react";
import blog1 from "../../public/Images/blog1.jpg";
import blog3 from "../../public/Images/blog3.jpg";
import blog2 from "../../public/Images/blog2.webp";
import profile1 from "../../public/Images/profile-1.png";
import profile2 from "../../public/Images/profile-2.png";
import profile3 from "../../public/Images/profile-3.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Conquering Consistency: How to Make Exercise a Habit You Love",
      category: "Exercise",
      date: "Jun 28, 2024",
      author: "Benjamin",
          image: blog1,
      avatar: profile1
    },
    {
      id: 2,
      title: "Weight Loss: A Sustainable Approach for a Healthier You",
      category: "Weight Loss",
      date: "Jun 26, 2024",
      author: "Jessica",
        image: blog2,
      avatar: profile2
    },
    {
      id: 3,
      title: "Fuel Your Fitness: A Guide to Nutrition for Peak Performance",
      category: "Nutrition",
      date: "Jun 23, 2024",
      author: "David",
        image: blog3,
      avatar: profile3
    },
  ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const blogCards = document.querySelectorAll(".blog-card");

        blogCards.forEach((card, index) => {
        gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            }
        );
        });
    }, []);

  return (
   <div className="bg-black text-white py-12">
      {/* Section Heading */}
      <h2 className="text-center text-red-500 text-4xl font-bold mb-8">
        OUR LATEST BLOGS
      </h2>

      {/* Blog Container */}
      <div className="w-[1400px] flex flex-col md:flex-row gap-6 px-4">
        {/* Large Blog Card - Left Side */}
        <div
          className="md:w-2/3 relative overflow-hidden rounded-lg blog-card"
          style={{
            backgroundImage: `url(${blogs[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full">
            <span className="bg-red-500 rounded-md flex items-center justify-center mb-3 w-[97px] h-[32px]">
              {blogs[0].category}
            </span>
            <h3 className="text-2xl font-bold mb-2">{blogs[0].title}</h3>
            <div className="flex items-center text-sm text-gray-300">
              <span className="mr-4">{blogs[0].date}</span>
              <div className="w-[1px] h-4 bg-gray-400 mr-3"></div>
              <span className="flex items-center">
                <img
                  src={blogs[0].avatar}
                  alt={blogs[0].author}
                  className="w-6 h-6 rounded-full mr-2"
                />
                {blogs[0].author}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Blogs */}
        <div className="md:w-1/3 flex flex-col gap-6 overflow-hidden">
          {blogs.slice(1).map((blog) => (
            <div
              key={blog.id}
              className="relative overflow-hidden rounded-lg h-[240px] blog-card hover:scale-105 transition-all duration-500"
              style={{
                backgroundImage: `url(${blog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <span
                  className={`bg-orange-500 rounded-md flex items-center justify-center mb-3 w-[97px] h-[32px]`}
                >
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="mr-4">{blog.date}</span>
                  <div className="w-[1px] h-4 bg-gray-400 mr-3"></div>
                  <span className="flex items-center">
                    <img
                      src={blog.avatar}
                      alt={blog.author}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    {blog.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
