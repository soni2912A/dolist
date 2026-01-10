import React from "react";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const features = [
  {
    id: "01",
    title: "User-Friendly Interface",
    desc: "Our platform offers seamless task management to boost your efficiency.",
    img: img1,
  },
  {
    id: "02",
    title: "Collaborate & Share Effortlessly",
    desc: "Invite team members to work together and achieve your goals faster.",
    img: img2,
  },
  {
    id: "03",
    title: "Effortless Collaboration",
    desc: "Invite team members to work together and achieve your goals faster.",
    img: img3,
  },
  {
    id: "04",
    title: "Seamless Access",
    desc: "Stay connected and manage your tasks on the go with ease.",
    img: img4,
  },
];

function Features() {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-16">
      
      {/* HEADING */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#0b1b4d] mb-5">
          Transform Your Productivity with Our <br className="hidden md:block" />
          Innovative To-Do List Features
        </h2>
      </div>

      {/* CARDS */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
        {features.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#fafafa] rounded-2xl p-8 hover:shadow-lg transition"
          >
            {/* NUMBER */}
            <span className="absolute top-6 right-6 text-4xl font-bold text-gray-200">
              {item.id}
            </span>

            {/* IMAGE ICON */}
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20
                bg-white rounded-2xl
                flex items-center justify-center shadow">
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-35 object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="mt-6 text-lg font-bold text-[#0b1b4d] mb-4 flex-grow">
              {item.title}
            </h3>

            {/* RED LINE */}
            <div className="flex gap-2 mb-4">
              <span className="w-12 h-1 bg-[#ff4d5a] rounded-full"></span>
              <span className="w-4 h-1 bg-[#ff4d5a] rounded-full"></span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 text-black font-semibold text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Features;
