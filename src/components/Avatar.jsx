import React from "react";

const TrustedUsers = () => {
  return (
    <div className="flex items-center  bg-[#1A1A1A] backdrop-blur-[100px] border border-gray-800 text-white rounded-full px-4 py-2 w-fit">
      {/* Avatars */}
      <div className="flex -space-x-3">
        <img
          src="/Images/profile-1.png"
          alt="User 1"
          className="w-7 h-7 rounded-full border-2 border-gray-800"
        />
        <img
          src="/Images/profile-2.png"
          alt="User 2"
          className="w-7 h-7 rounded-full border-2 border-gray-800"
        />
        <img
          src="/Images/profile-3.png"
          alt="User 3"
          className="w-7 h-7 rounded-full border-2 border-gray-800"
        />
      </div>

      {/* Text */}
      <div className="ml-4 text-lg text-[#96979C] font-medium">
        Trusted by 3+ million users
          </div>
      </div>
  );
};

export default TrustedUsers;
