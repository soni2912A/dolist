import React, { useState } from "react";
import logo from "../assets/images/logowp.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-16 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logowp" className="w-full" />
          
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-red-500 cursor-pointer">About Us</li>
          <li className="hover:text-red-500 cursor-pointer">Features</li>
          <li className="hover:text-red-500 cursor-pointer">More Option</li>
          <li className="hover:text-red-500 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
            Log In
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li>About Us</li>
            <li>Features</li>
            <li>More Option</li>
            <li>Contact</li>
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full px-4 py-2 border border-red-500 text-red-500 rounded-lg">
              Log In
            </button>
            <button className="w-full px-4 py-2 bg-red-500 text-white rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
