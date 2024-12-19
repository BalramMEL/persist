import React from "react";
import logo from "../../public/Images/logo.png";
import mail from "../../public/svg/mail.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center space-y-6">
        {/* Logo and Tagline */}
        <div>
                  <img
                      src={logo}
            alt="GymFluencer Logo"
            className="mx-auto mb-4 w-[197px] h-[50px]"
          />
          <p className="text-[#BDBDBD] text-xl">Where Fitness Meets Social <br /> Connection!</p>
        </div>

        {/* Contact Email */}
        <div>
          <button className="flex items-center gap-2 mx-auto py-2 px-4 bg-[#1A1A1A] rounded-xl">
                      <img src={mail } alt="Mail Icon" className="w-5 h-5" />
            <a href="mailto:hello@gym.birlaventures.com" className="text-gray-200">
              hello@gym.birlaventures.com
            </a>
          </button>
        </div>

        {/* Navigation Links */}
            <div className="flex justify-center items-center space-x-6 text-gray-400 ">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <span>·</span>
          <a href="#workout" className="hover:text-gray-200">Workout Plan</a>
          <span>·</span>
          <a href="#diet" className="hover:text-gray-200">Diet Plan</a>
          <span>·</span>
          <a href="#faqs" className="hover:text-gray-200">FAQ's</a>
        </div>

              {/* Footer Bottom */}
              <hr className=" mx-auto w-[85%] border-gray-700" />
              
      </div>
              <div className="flex items-center justify-between mx-auto w-[85%] my-10">
                <div>
                <p className="text-gray-100 text-lg">
                    © 2024 GymFluencer. All rights reserved.
                </p>
                </div>

            {/* Social Icons */}
        <div className="mt-4 flex justify-center space-x-4 mr-5">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transform transition-transform hover:-translate-y-1 p-2 bg-[#18181A] rounded-md"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transform transition-transform hover:-translate-y-1 p-2 bg-[#18181A] rounded-md"
          >
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transform transition-transform hover:-translate-y-1 p-2 bg-[#18181A] rounded-md"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
