"use client";
import { React, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { digitalfirst } from "@/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { cn } from "@/lib/utils";
import Button from "@mui/material/Button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isclikk, setIsclikk] = useState(false);
  const [isServiceSubMenuOpen, setIsServiceSubMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPending, setScrollPending] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId;

  useEffect(() => {
    function handleScroll() {
      if (!scrollPending) {
        setScrollPending(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const currentScrollPos = window.pageYOffset;
          setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
          setPrevScrollPos(currentScrollPos);
          setScrollPending(false);
        }, 100); // Debounce duration (adjust as needed)
      }
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
  }, [prevScrollPos, scrollPending]);
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
    <div className={"flex flex-col bg-black sticky top-0 overflow-hidden"}>
      <header className="px-4 lg:px-6 h-[80px] flex items-center pr-[2rem] justify-between bg-white/0 transition duration-300 ease-out hover:bg-blue-500/50 text-white">
        <nav className="flex items-center space-x-2 navbar_company ">
          <Link href="/" className="navbar_company flex items-center">
            <div className="hidden md:block">
              <img src="bg7.png" alt="Artboard 2" className="h-12 w-[23rem]" />
            </div>
          </Link>
          <Link href="/" className="navbar_company flex items-center">
            <div className="md:hidden">
              <img src="Logo3.png" alt="Logo 2" className="h-14 w-14 mr-2" />
            </div>
          </Link>
        </nav>

        <nav className="text-sm text-bold ml-auto md:flex gap-4 sm:gap-6 justify-end items-center hidden text-black ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/ssp" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="./about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            className="font-medium hover:underline underline-offset-4 px-4 py-2  text-black"
            href="./contactpage"
          >
            <Button variant="contained rounded-full" className="bg-[#00df9a]">
              Contact
            </Button>
          </Link>
        </nav>
        <nav className="md:hidden space-x-10 ">
          <div className="relative inline-block" ref={dropdownRef}>
            <Link
              className="font-medium item-center hover:underline underline-offset-4 rounded-full px-4 py-2 bg-[#00df9a] text-black"
              href="./contactpage"
            >
              Contact
            </Link>

            <button
              className={`text-sm font-medium z-[1] item-center underline-offset-4 ${
                isHovering || isclikk ? "text-red-600 font-bold" : ""
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <MenuIcon sx={{ color: "goldenrod", fontSize: "40px" }} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-lg z-0">
                <div className="flex flex-col">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    href="/ssp"
                  >
                    Services
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
