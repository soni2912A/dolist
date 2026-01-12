import React, { useRef, useState } from "react";

const Form = ({ onClose, onDone }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const maleRef = useRef();
  const femaleRef = useRef();
  const engRef = useRef();
  const hinRef = useRef();
  const marRef = useRef();

  const termsRef = useRef();

  const [error, setError] = useState("");

  // click handle
  const handleDone = () => {
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    const genderSelected =
      maleRef.current.checked || femaleRef.current.checked;

    const languageSelected =
      engRef.current.checked ||
      hinRef.current.checked ||
      marRef.current.checked;

    const termsAccepted = termsRef.current.checked;

    //  validation failed
    if (
      !firstName ||
      !lastName ||
      !email ||
      !genderSelected ||
      !languageSelected ||
      !termsAccepted
    ) {
      setError("Validation failed. Please fill all details.");
      return;
    }

    // ✅ validation passed
    setError("");

    const formData = {
      firstName,
      lastName,
      gender: maleRef.current.checked ? "Male" : "Female",
      language: [
        engRef.current.checked && "English",
        hinRef.current.checked && "Hindi",
        marRef.current.checked && "Marathi",
      ].filter(Boolean),
      email,
      termsAccepted,
    };

    onDone(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-1">
          Get Started Today!
        </h2>

        <p className="text-sm text-gray-500 mb-5">
          Fill in your details and take control of your tasks.
        </p>

        {/* NAME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input
              ref={firstNameRef}
              type="text"
              placeholder="Enter your first name"
              className="mt-1 w-full px-4 py-2 bg-pink-100 rounded outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input
              ref={lastNameRef}
              type="text"
              placeholder="Enter your last name"
              className="mt-1 w-full px-4 py-2 bg-pink-100 rounded outline-none"
            />
          </div>
        </div>

        {/* gender */}
        <div className="mb-4">
          <label className="text-sm font-medium block mb-2">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded w-full">
              <input ref={maleRef} type="radio" name="gender" />
              Male
            </label>
            <label className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded w-full">
              <input ref={femaleRef} type="radio" name="gender" />
              Female
            </label>
          </div>
        </div>

        {/* language */}
        <div className="mb-4">
          <label className="text-sm font-medium block mb-2">Language</label>
          <label className="flex items-center gap-3 bg-pink-100 px-4 py-2 rounded mb-2">
            <input ref={engRef} type="checkbox" />
            English
          </label>
          <label className="flex items-center gap-3 bg-pink-100 px-4 py-2 rounded mb-2">
            <input ref={hinRef} type="checkbox" />
            Hindi
          </label>
          <label className="flex items-center gap-3 bg-pink-100 px-4 py-2 rounded">
            <input ref={marRef} type="checkbox" />
            Marathi
          </label>
        </div>

        {/* email */}
        <div className="mb-4">
          <label className="text-sm font-medium">Email Address</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email address"
            className="mt-1 w-full px-4 py-2 bg-pink-50 rounded outline-none"
          />
        </div>

        {/* term */}
        <div className="flex items-center gap-2 text-sm mb-4">
          <input ref={termsRef} type="checkbox" />
          <span>
            I agree to the{" "}
            <span className="text-[#ff4d5a] underline cursor-pointer">
              terms and conditions
            </span>
          </span>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* done */}
        <button
          onClick={handleDone}
          className="w-full bg-[#ff4d5a] text-white py-3 rounded font-medium"
        >
          Done
        </button>

      </div>
    </div>
  );
};

export default Form;
