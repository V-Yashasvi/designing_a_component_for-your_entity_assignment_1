import React from "react";
import snoopy from "../assets/Snooooopy.jpg";

const Usercard = () => {
  const profilePhoto = snoopy;
  const name = "Snoopy";
  const email = "snoop@example.com";
  const phone = "+91 2345678901";
  const address = "Adi's heart, Dog House, Dog World";

  return (
    <div className="relative w-80 bg-white rounded-lg p-6 text-center">
      <div className="absolute inset-0 rounded-lg p-2 bg-gradient-to-r from-blue-400 to-pink-400"></div>
      <div className="relative bg-white rounded-lg p-6">
        <img
          src={profilePhoto}
          alt="Snooooooooooooooooooooooooooooooooopy"
          className="w-30 h-30 mx-auto rounded-full object-cover"
        />
        <h2 className="mt-4 text-lg font-bold text-gray-400">{name}</h2>
        <p className="text-sm text-gray-700">Email: {email}</p>
        <p className="text-sm text-gray-700">Contact: {phone}</p>
        <p className="text-sm text-gray-700">Address: {address}</p>
      </div>
    </div>
  );
};

export default Usercard;
