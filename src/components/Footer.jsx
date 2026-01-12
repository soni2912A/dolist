import React from "react";

import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import x from "../assets/images/X.png";
import linkdin from "../assets/images/linkdin.png";
import youtube from "../assets/images/youtube.png";
import logo from "../assets/images/logowp.png";

const Footer = () => {
  return (
    <footer className="bg-white px-6 pt-16 layout">
      <div className="max-w-7xl mx-auto ">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr] gap-4">

          {/* BRAND + NEWSLETTER */}
          <div className="space-y-3">
            <img src={logo} alt="logowp" className="w-35 h-20" />

            <p className="text-[11px] text-[#000000] leading-relaxed max-w-xs font-semibold">
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email here"
                className="border border-gray-300 px-3 py-2 w-70 text-sm outline-none "
              />
              <button className="bg-[#ff4d5a] text-white px-4 py-2 text-sm rounded w-20">
                Join
              </button>
            </div>

            <p className="text-[11px] text-[#000000] max-w-xs font-semibold">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </div>

          {/* USEFUL LINKS */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[15px]">Useful Links</h4>
            <ul className="space-y-1 text-[13px] text-[#000000]">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[15px]">Resources</h4>
            <ul className="space-y-1 text-[13px] text-[#000000]">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[15px]">Connect With Us</h4>
            <ul className="space-y-2 text-[13px] text-[#000000]">
              <li className="flex items-center gap-2">
                <img src={facebook} className="w-4 h-4" /> Facebook
              </li>
              <li className="flex items-center gap-2">
                <img src={instagram} className="w-4 h-4" /> Instagram
              </li>
              <li className="flex items-center gap-2">
                <img src={x} className="w-4 h-4" /> X
              </li>
              <li className="flex items-center gap-2">
                <img src={linkdin} className="w-4 h-4" /> LinkedIn
              </li>
              <li className="flex items-center gap-2">
                <img src={youtube} className="w-4 h-4" /> YouTube
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-300 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[13px] text-[#000000] mb-10">
          <p>© 2024 Osumare. All rights reserved.</p>

          <div className="flex gap-5">
            <span className="underline cursor-pointer">Privacy Policy</span>
            <span className="underline cursor-pointer">Terms of Service</span>
            <span className="underline cursor-pointer">Cookie Settings</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
