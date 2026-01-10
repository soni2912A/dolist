import React from "react";
import mobile from "../assets/images/mobile.png";

const CTA = () => {
  return (
    <section className="w-full bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={mobile}
            alt="mobile"
            className="
              w-full
              max-w-md md:max-w-lg
              object-contain
              md:-ml-20
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left md:pl-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Start Organizing Your <br /> Life Today
          </h2>

          <p className="mt-4 text-[#202020] max-w-lg mx-auto md:mx-0">
            Join us now and transform your productivity with our intuitive
            to-do list platform!
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-[#ff4d5a] text-white hover:opacity-90 transition">
              Sign Up
            </button>

            <button className="px-6 py-3 border border-[#ff4d5a] text-[#202020] hover:bg-[#ff4d5a] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;

