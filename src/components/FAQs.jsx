import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

const FAQs = [
  {
    question: "How do I log my workouts?",
    answer:
      "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.",
  },
  {
    question: "Can I track my calories burned?",
    answer: "Yes, you can track your calories burned through the app.",
  },
  {
    question: "Is this application suitable for beginners?",
    answer:
      "Absolutely! The app is designed to accommodate users of all levels, including beginners.",
  },
  {
    question: "What features does the application offer?",
    answer:
      "The app includes workout tracking, calorie monitoring, progress analytics, and more.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "You can reset your password by going to the settings section and selecting 'Reset Password'.",
  },
];

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
  const faqContainerRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const faqs = faqContainerRef.current.querySelectorAll(".faq-item");

    gsap.fromTo(
      faqs,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: "top 80%", // Trigger animation when FAQ section is near the viewport
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);



  return (
    <div className="bg-red-800 text-white flex justify-center items-center font-orbitron">
      <div className="w-full max-w-2xl my-12" ref={faqContainerRef}>
        <h1 className="text-center text-4xl font-bold tracking-wider mb-8 uppercase">
          Frequently <br /> Asked Questions
        </h1>
        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-gray-200 rounded-lg opacity-0"
            >
              {/* Question Section */}
              <div
                className="flex justify-start gap-5 items-center rounded-lg bg-transparent px-4 py-5 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                 <span
              className={`text-xl transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
                <span className="font-medium">{faq.question}</span>
              </div>
              {/* Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 py-3 px-4" : "max-h-0"
                }`}
              >
                <p className="text-white ml-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
