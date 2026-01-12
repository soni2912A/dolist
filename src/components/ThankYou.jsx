import React from "react";

const ThankYou = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50
                    animate-in fade-in duration-300">
      
      <div className="bg-white w-full max-w-md rounded-xl p-8 text-center
                      animate-in zoom-in-95 duration-300">

        <div className="text-3xl mb-4">❤️</div>

        <h2 className="text-xl font-semibold mb-2">
          Thank you for connect with us.
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Our team will contacting with you soon
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#ff4d5a] text-white py-3 rounded font-medium"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
