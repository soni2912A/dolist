import React from "react";

import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png";
import x from "../assets/images/X.png";
import linkdin from "../assets/images/linkdin.png";
import youtube from "../assets/images/youtube.png"
import logo from "../assets/images/logowp.png"

const Footer = () => {
  return (
    <footer className="bg-white px-6 pt-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND + NEWSLETTER */}
          <div>
            <div className="flex items-center gap-2">
                      <img src={logo} alt="logowp" className="w-15 h-15" />
                      
                    </div>
            

            <p className="text-sm text-[#000000] mb-4 max-w-xs">
              Subscribe to our newsletter for the latest features and updates
              delivered to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email here"
                className="border border-gray-300 px-4 py-2 w-full outline-none"
              />
              <button className="bg-[#ff4d5a] text-white px-5 py-2">
                Join
              </button>
            </div>

            <p className="text-xs text-[#000000] mt-3 max-w-xs">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </p>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-[#000000]">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-[#000000]">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>

          {/* SOCIAL WITH IMAGES */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-3 text-sm text-[#000000]">
              <li className="flex items-center gap-2">
                <img src={facebook} alt="Facebook" className="w-5 h-5" />
                Facebook
              </li>
              <li className="flex items-center gap-2">
                <img src={instagram} alt="Instagram" className="w-5 h-5" />
                Instagram
              </li>
              <li className="flex items-center gap-2">
                <img src={x} alt="X" className="w-5 h-5"  />
                X
              </li>


              <li className="flex items-center gap-2">
                <img src={linkdin} alt="linkdIn" className="w-5 h-5" />
                LinkedIn
              </li>

              <li className="flex items-center gap-2">
                <img src={youtube} alt="YouTube" className="w-5 h-5" />
                YouTube
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-black-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-[#000000]">
          <p>© 2024 Osumare. All rights reserved.</p>

          <div className="flex gap-6 flex-wrap justify-center">
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
