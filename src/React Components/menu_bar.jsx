import React, { useEffect, useState } from "react";

const MenuBar = () => {
  const [shrink, setShrink] = useState(false);

  // Function to handle scroll and shrink the menu bar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shrink ? "bg-gray-900 h-12" : "bg-gray-800 h-20"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center h-full px-32">
        {/* Left Side: Icon and Text */}
        <div className="flex items-center space-x-3">
          <img
            src="/icon.svg" // Add your icon source here
            alt="logo"
            className="h-8 w-8"
          />
          <span className="text-white font-semibold text-xl">
            New Hope Healing
          </span>
        </div>

        {/* Right Side: Menu Items */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home"
              className="text-white hover:text-gray-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="text-white hover:text-gray-400 transition-colors"
            >
              Training Courses
            </a>
          </li>
          <li>
            <a
              href="#healing"
              className="text-white hover:text-gray-400 transition-colors"
            >
              Healing
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuBar;
