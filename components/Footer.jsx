import Link from "next/link";
import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#00df9a]" size={30} />
);
// Footer component
// Array defining the content and structure of the footer
const items = [
  // Social media icons
  { type: "icon", icon: FaFacebookSquare },
  { type: "icon", icon: FaInstagram },
  { type: "icon", icon: FaTwitterSquare },
  { type: "icon", icon: FaGithubSquare },
  { type: "icon", icon: FaDribbbleSquare },
  // Footer sections

  {
    type: "section",
    title: "Support",
    items: [
      "Our Journey",
      "Leadership",
      "Press Releases",
      "In The News",
      "Sustainability and ESG",
    ],
  },
  {
    type: "section",
    title: "Digital First",
    items: [
      "Automated Ops",
      "Hybrid Cloud Services",
      "Networks",
      "Digital Workplace",
      "Cybersecurity",
      "Industrial IoT",
      "Service Management",
      "Application Services",
      "Consulting Services",
    ],
  },
];

export function Footer() {
  return (
    <div className="bg-[#000300] mx-auto py-16 px-4 flex flex-col justify-center items-center md:grid lg:grid-cols-3 gap-8 text-gray-300 text-wrap overflow-hidden ">
      {/* Left section with brand and social icons */}

      <div className="lg:col-span-2 flex justify-start gap-5 mt-6">
        {/* Mapping over sections and rendering content */}
        {items.map((item, index) =>
          item.type === "section" ? (
            <div key={index}>
              <h6 className="font-medium text-gray-100 text-xl">
                {item.title}
              </h6>
              <ul>
                {/* Mapping over items in each section */}
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-2 text-sm">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
      {/* Right section with footer content organized in sections */}
      <div>
        <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00df9a]">
          PRIME GROUPS.
        </h1>
        <p className="py-4">Innovate Initiate and Inspire</p>
        <div className="flex justify-between md:w-[75%] my-6">
          {/* Mapping over social icons and rendering the SocialIcon component */}
          {items.map((item, index) =>
            item.type === "icon" ? (
              <SocialIcon key={index} icon={item.icon} />
            ) : null
          )}
        </div>
      </div>
      <div className="w-[400px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
        <div className="self-stretch relative tracking-[-0.01em] leading-[24px]">
          © Prime Groups, Inc. 2024. We love our users!
        </div>
      </div>
    </div>
  );
}
