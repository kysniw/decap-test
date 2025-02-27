'use client'

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Moja Strona</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? '×' : '≡'}
          </button>
        </div>
        <div className={`lg:flex lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="text-white hover:bg-blue-700 p-2 rounded">Home</a>
          <a href="#about" className="text-white hover:bg-blue-700 p-2 rounded">About</a>
          <a href="#services" className="text-white hover:bg-blue-700 p-2 rounded">Services</a>
          <a href="#contact" className="text-white hover:bg-blue-700 p-2 rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
