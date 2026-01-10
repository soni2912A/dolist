import React from "react";
// import logo from "../assets/images/logowp.png";
import user from "../assets/images/manpic.png"
import logoipsum from "../assets/images/logoipsum.png"
import videologo from "../assets/images/videobutton.png"
import google from "../assets/images/google.png"
import fb from "../assets/images/fb.png"
import pin from "../assets/images/pin.png"
import twtich from "../assets/images/twtich.png"
import yt from "../assets/images/yt.png"


function Hero() {
  return (
    <section className="bg-[#F7F7FB] px-6 md:px-10 lg:px-16 py-16">
      
      {/* TOP CONTENT */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1b4c]">
          Simplify Your Life with Our <br />
          <span className="block">Todo App</span>
        </h1>

        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Stay organized and boost your productivity with our intuitive todo
          website. Experience a modern approach to task management that fits
          your lifestyle.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#ff4d5a] text-white px-8 py-3 rounded-full font-semibold">
            Get started
          </button>
          <button className="border-2 border-[#ff4d5a] text-[#ff4d5a] px-8 py-3 rounded-full font-semibold">
            Learn more
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* LEFT CARD */}
        <div className="lg:col-span-2 bg-[#ff4d5a] text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h2 className="lg:text-8xl md:text-5xl text-4xl leading-tight">
              Organize. <br />
              Achieve. <br />
              Relax.
            </h2>

            <p className="mt-8 text-white/90 max-w-lg">
              Turn clutter into clarity, chaos into control, and dreams into
              done. Bold visions into market success.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#ff4d5a] px-6 py-3 rounded-full font-semibold">
              Get Started Today
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold">
              Discover Features
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative rounded-2xl overflow-hidden h-[220px] sm:h-[300px] lg:h-[690px]">
          <img
            src={user}  alt="User"className="w-full h-full object-cover"
          />
          

          <div className="absolute top-4 left-4 text-white mt-1 ml-5">
            <p className="text-5xl opacity-50">Your Tasks.</p>
            <h3 className="text-4xl font-bold">Our Tools.</h3>
          </div>
          <div className="absolute bottom-4 mb-20 w-35 ml-8">
            <img src={logoipsum} alt="logo"  />
          </div>  

            <div className="mt-3 absolute bottom-4 left-4 ml-5 mb-2">
              <p className="font-semibold text-blacl text-xl mb-2">Freddie Halvorson</p>
              <span className="text-lg opacity-75 text-gray-700">
                Chief Productivity Enthusiast
              </span>
            </div>
            <div className="absolute bottom-4 mb-2 w-20 right-9">
              <img src={videologo} alt="videologo"/>
            </div>
          
        </div>
      </div>

      {/* BRANDS */}
      <div className="mt-12 flex flex-wrap items-center justify-center
                gap-8 md:gap-12 lg:gap-30">

  <img
    src={google}
    alt="google"
    className="h-6 md:h-8 lg:h-10 w-auto object-contain"
  />

  <img
    src={fb}
    alt="facebook"
    className="h-6 md:h-8 lg:h-10 w-auto object-contain"
  />

  <img
    src={yt}
    alt="youtube"
    className="h-6 md:h-8 lg:h-10 w-auto object-contain"
  />

  <img
    src={pin}
    alt="pinterest"
    className="h-6 md:h-8 lg:h-10 w-auto object-contain"
  />

  <img
    src={twtich}
    alt="twitch"
    className="h-6 md:h-8 lg:h-10 w-auto object-contain"
  />

</div>


    </section>
  );
}

export default Hero;
