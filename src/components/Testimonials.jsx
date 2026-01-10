import React from "react";
import userImg from "../assets/images/girlpic.png"; // तुझी image

function Testimonial() {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-16">

      {/* HEADING */}
      <div className="max-w-6xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b4d]">
          Customer Testimonials
        </h2>
        <p className="mt-3 text-[#0b1b4d]">
          This tool has transformed my productivity and organization!
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT BOX */}
        {/* LEFT TESTIMONIAL BOX */}
        <div className="relative">

          {/* RED FRAME */}
          <div className="absolute pointer-events-none w-[380px] h-[500px]">
            <span className="absolute top-0 left-2 w-90 h-3 bg-[#ff4d5a]" />
            <span className="absolute top-0 left-2 w-3 h-full bg-[#ff4d5a]" />
            <span className="absolute top-0 right-2 w-3 h-full bg-[#ff4d5a]" />
            <span className="absolute bottom-0 left-2 w-90 h-3 bg-[#ff4d5a]" />
          </div>

          {/* WHITE BOX */}
          <div className="relative bg-white p-8 md:p-12 ml-15 mt-20 mb-4">
            <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
              “Using this website has made my tasks so much easier! I can't imagine my
              day without it.”
            </p>

            <div className="mt-8 flex items-start gap-0  pr-2">
  {/* RED SQUARE */}
  <span className="w-5 h-5 bg-[#ff4d5a] mt-1" />

  {/* BLACK LINE */}
  <span className="w-12 h-[1px] bg-[#202020] mt-3 ml-0  " />

  {/* TEXT */}
  <div>
    <p className="font-bold text-gray-900 pl-3 mt-0">Sherri Cronin</p>
    <p className="text-sm text-gray-500 pl-3">
      Project Manager, TechCorp
    </p>
  </div>
</div>


            {/* ARROWS */}
            <div className="mt-8 flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#ff4d5a] text-[#ff4d5a] text-black text-3xl  ">
                ‹
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff4d5a] text-white text-3xl">
                ›
              </button>
            </div>
          </div>
        </div>


        {/* RIGHT IMAGE BOX */}
        {/* RIGHT IMAGE BOX */}
        <div className="relative w-fit mx-auto">

          {/* RED FRAME */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-0 right-0 w-85 h-3 bg-[#ff4d5a]" />
            <span className="absolute top-0 right-0 w-3 h-full bg-[#ff4d5a]" />
            <span className="absolute bottom-0 right-0 w-85 h-3 bg-[#ff4d5a]" />
          </div>

          {/* WHITE IMAGE BOX */}
          <div className="relative bg-white p-1 mr-4 mt-4 mb-4">
            <img
              src={userImg}
              alt="testimonial"
              className="w-72 md:w-80 object-cover"
            />
          </div>
        </div>
     </div>
    </section>
  );
}

export default Testimonial;
