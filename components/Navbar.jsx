"use client";
import React, { useState } from "react";
import Link from "next/link";
import { digitalfirst } from "@/constants";
import MenuIcon from "@mui/icons-material/Menu";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isclikk, setIsclikk] = useState(false);
  const [hamClick, sethamClick] = useState(false);

  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    // Close the dropdown after a delay of 500 milliseconds
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
      setIsHovering(false);
    }, 120);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsHovering(false);
  };
  return (
    <div className="flex flex-col bg-gray-50">
      <header className="px-4 lg:px-6 h-[80px] flex items-center justify-center hover:bg-indigo-500/50 bg-white">
        <nav className="flex items-center space-x-2 navbar_company">
          <Link href="/" className="navbar_company flex items-center">
            <img
              src="/Logo2.png"
              alt="Prime IT Solutions"
              className="h-14 w-14 mr-2"
            />
            <h1 className="text-xl font-bold hidden md:block">
              Prime Group Technologies
              <br />
              <span className="text-sm text-gray-600">
                Initiate Innovate Integrate
              </span>
            </h1>
          </Link>
        </nav>
        <nav className="text-sm text-bold ml-auto md:ml-[330px]  md:flex gap-4 sm:gap-6 justify-center object-center hidden md:block ">
          <Link
            className="text-sm text-bold font-medium hover:underline underline-offset-4 "
            href="/"
          >
            Home
          </Link>
          <Link
            className={`text-sm relative inline-block font-medium underline-offset-4 ${
              isHovering || isclikk ? "text-red-600 font-bold" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsclikk(!isclikk)}
            href="/"
          >
            Services
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white  shadow-lg">
                {digitalfirst.map((item) => (
                  <div key={item.title}>
                    {item.links.map((link) => (
                      <Link
                        key={link.title}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href={link.url}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="./teampage"
          >
            Team
          </Link>
        </nav>
        <nav className="text-sm text-bold ml-auto flex gap-4 sm:gap-6 justify-end">
          <Link
            className="font-medium hover:underline underline-offset-4 rounded-full px-4 py-2 bg-blue-500 text-white"
            href="./contactpage"
          >
            Contact
          </Link>
        </nav>
        <nav className="md:hidden space-x-10 ">
          {/* <button onClick={() => sethamClick(!hamClick)}>
            <MenuIcon />
          </button> */}
          <Link
            className={`text-sm relative inline-block font-medium underline-offset-4 ${
              isHovering || isclikk ? "text-red-600 font-bold" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsclikk(!isclikk)}
            href="/"
          >
            <MenuIcon></MenuIcon>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white  shadow-lg">
                {digitalfirst.map((item) => (
                  <div key={item.title}>
                    {item.links.map((link) => (
                      <Link
                        key={link.title}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href={link.url}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </Link>
        </nav>
      </header>
    </div>
  );
}
