"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between px-5 py-2 items-center max-w-[1200px] mx-auto relative">
        <img src="./Images/logo.png" alt="Logo" />

        {/* ----------- Desktop Menu ----------- */}
        <ul className="hidden md:flex gap-5">
          <li className="hover:after:transition hover:after:duration-500 hover:after:content-[''] hover:after:left-0 hover:after:-top-5 hover:after:bg-pri hover:after:w-full hover:after:absolute hover:after:h-4 hover:after:rounded-b-2xl relative">
            Home
          </li>
          <li className="hover:after:transition hover:after:duration-500 hover:after:content-[''] hover:after:left-0 hover:after:-top-5 hover:after:bg-pri hover:after:w-full hover:after:absolute hover:after:h-4 hover:after:rounded-b-2xl relative">
            Service
          </li>
          <li className="hover:after:transition hover:after:duration-500 hover:after:content-[''] hover:after:left-0 hover:after:-top-5 hover:after:bg-pri hover:after:w-full hover:after:absolute hover:after:h-4 hover:after:rounded-b-2xl relative">
            About
          </li>
          <li className="hover:after:transition hover:after:duration-500 hover:after:content-[''] hover:after:left-0 hover:after:-top-5 hover:after:bg-pri hover:after:w-full hover:after:absolute hover:after:h-4 hover:after:rounded-b-2xl relative">
            Contact
          </li>
        </ul>

        <button className="hidden md:block bg-sec rounded-2xl text-white px-4 text-sm font-medium py-1">
          Sign Up
        </button>

        {/* ------------ Mobile  Hamburger ------------ */}
        <button
          onClick={handleMenu}
          className="md:hidden bg-sec rounded-2xl text-white px-4 text-sm font-medium py-1"
        >
          Menu
        </button>

        {/* ------------ Mobile Dropdown ------------ */}
        {isOpen && (
          <ul className="flex flex-col gap-2 absolute top-[60px] right-5 py-3 bg-white w-[90%] border px-5 z-50 shadow">
            <li className="border-b pb-1">Home</li>
            <li className="border-b pb-1">Service</li>
            <li className="border-b pb-1">About</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
