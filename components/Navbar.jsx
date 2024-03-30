"use client";
import { React, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { digitalfirst } from "@/constants";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isclikk, setIsclikk] = useState(false);
  const [isServiceSubMenuOpen, setIsServiceSubMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsServiceSubMenuOpen(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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
    <div
      className={`flex flex-col bg-black bg-opacity-25 sticky top-0 ${
        visible ? "" : "hidden"
      }`}
    >
      <header className="px-4 lg:px-6 h-[80px] flex items-center justify-between bg-white/0 transition duration-300 ease-out hover:bg-blue-500/50 text-white">
        <nav className="flex items-center space-x-2 navbar_company">
          <Link href="/" className="navbar_company flex items-center">
            <img
              src="/Logo2.png"
              alt="Prime IT Solutions"
              className="h-14 w-14 mr-2"
            />
            <h1 className="text-4xl font-bold hidden md:block items-center">
              Prime Group Technologies
              <br />
              <span className="text-4xl text-black-600 pt-[-10rem]">
                We Innovate Initiate and Inspire
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
              <div className="absolute top-full left-0 mt-2 w-40 bg-black  shadow-lg">
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
            className="font-medium hover:underline underline-offset-4 px-4 py-2  text-white"
            href="./contactpage"
          >
            <Button variant="contained rounded-full" className="bg-black">
              Contact
            </Button>
          </Link>
        </nav>
        <nav className="md:hidden space-x-10 ">
          <div className="relative inline-block" ref={dropdownRef}>
            <Link
              className="font-medium item-center hover:underline underline-offset-4 rounded-full px-4 py-2 bg-[#007f73] text-white"
              href="./contactpage"
            >
              Contact
            </Link>

            <button
              className={`text-sm font-medium item-center underline-offset-4 ${
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
