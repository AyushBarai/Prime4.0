"use client";
import { React, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { digitalfirst } from "@/constants";
import MenuIcon from "@mui/icons-material/Menu";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isclikk, setIsclikk] = useState(false);
  const [isServiceSubMenuOpen, setIsServiceSubMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsServiceSubMenuOpen(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      <header className="px-4 lg:px-6 h-[80px] flex items-center justify-between hover:bg-indigo-500/50 bg-white">
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
        <nav className="text-sm text-bold ml-auto md:flex gap-4 sm:gap-6 justify-end items-center hidden">
          <Link
            className="text-sm text-bold font-medium hover:underline underline-offset-4 "
            href="/"
          >
            Home
          </Link>
          <button
            className={`text-sm relative inline-block font-medium underline-offset-4 ${
              isHovering || isclikk ? "text-red-600 font-bold" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsclikk(!isclikk)}
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
          </button>
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="./teampage"
          >
            Team
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4 rounded-full px-4 py-2 bg-blue-500 text-white"
            href="./contactpage"
          >
            Contact
          </Link>
        </nav>
        <nav className="md:hidden space-x-10 ">
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              className={`text-sm font-medium underline-offset-4 ${
                isHovering || isclikk ? "text-red-600 font-bold" : ""
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <MenuIcon sx={{ color: "goldenrod", fontSize: "40px" }} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-lg">
                <div className="flex flex-col">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href="/teampage"
                  >
                    Team
                  </Link>
                  <div className="relative">
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() =>
                        setIsServiceSubMenuOpen(!isServiceSubMenuOpen)
                      }
                    >
                      Services
                    </button>
                    {isServiceSubMenuOpen && (
                      <div className="absolute top-0 right-full mt-0 ml-2 w-40 bg-white shadow-lg">
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
