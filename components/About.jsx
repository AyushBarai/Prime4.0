"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export function About() {
  const [isclikk, setIsclikk] = useState(false);
  return (
    <div className="flex flex-col">
      <main className="flex flex-col justify-center items-center">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative z-[-1] top-0 object-cover bg-no-repeat"
          style={{
            backgroundImage: 'url("/About.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h1 className="text-5xl font-bold tracking-tighter text-white text-center sm:text-5xl md:text-5xl/none">
              About Us
            </h1>
            <p className="justify-center text-white text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We help businesses transform through technology. Through our
              Digital It Solutions.
            </p>
          </div>
        </section>

        <section className="pt-[8vh] mx-auto w-full py-12 md:py-24 sm:px-8 lg:px-16 bg-gradient-to-t from-gray-700 via-gray-900 to-black ">
          <div className="flex items-center text-center">
            <div>
              <div className="w-full flex flex-col items-center justify-center text-white">
                <h2 className="text-5xl font-bold tracking-tighter text-white text-center sm:text-5xl md:text-5xl/none">
                  Who We Are?
                </h2>
                <p className="text-2xl flex text-justify mt-3 mb-4 font-light text-gray-100 dark:text-gray-400 px-6">
                  A Global Information Technology Company offering services and
                  solutions in the Middle East Region. We are a leader in the
                  global consulting company delivering business, technology and
                  outsourcing services with a commitment to providing
                  innovation, value, and complete customer satisfaction. Today,
                  technology has become an integral part of our daily lives.
                  Organizations and businesses, both private and government,
                  avail Information Technology, and we aid them to function more
                  efficiently, productively and profitably. Alwosta integrates
                  technology, people, and business processes, together, to
                  create excellent automated and sophisticated systems. ERP
                  (Enterprise Resource Planning) systems and e-governance have
                  successfully been implemented and have resulted in
                  cost-cutting, improved performance, while also giving our
                  clients the business intelligence they need to gain
                  competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <section className="pt-[8vh]">
            <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6 ">
              <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="text-5xl font-bold tracking-tighter text-white text-center sm:text-5xl md:text-5xl/none">
                  Our Team
                </h2>
                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                  Explore the whole collection of open-source web components and
                  elements built with the utility classes from Tailwind
                </p>
              </div>
              <div className="flex flex-col md:grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
                <div className="flex flex-row items-center justify-between bg-stone-300  rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 ">
                  <div className="text-center w-auto">
                    <Image
                      className="md:hidden sm:block rounded-lg sm:rounded-none sm:rounded-l-lg justify-start w-[25rem]"
                      src="/Chetanlatest.png"
                      alt="Chethan Jagadeesh"
                      width="200"
                      height="200"
                    />
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Chethan Jagadeesh</a>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      General Manager
                    </span>
                    <p className="flex text-justify mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 px-6">
                      Chethan Jagadeesh is an individual contributor with over
                      10 years of experience in Sales, Account Management, and
                      Business Development across various markets, products, and
                      services. His passion for his work and continuous
                      self-improvement has led to significant achievements,
                      including a substantial increase in revenue through new
                      client relationships in the Middle East. With high energy,
                      great communication skills, and the ability to work
                      independently or in a team, Chethan excels in roles
                      requiring sales management, key account management, and
                      strategic alliance management. His approach to corporate
                      work involves full engagement and authority, aiming to
                      maximize work potential and foster a smart working
                      culture. Chethan's specialties include customer
                      acquisition and end-to-end sales, making him a reliable
                      and friendly professional in the corporate environment.
                    </p>
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Image
                    className="rounded-lg hidden md:block sm:rounded-l-lg w-[18rem] justify-end"
                    src="/Chetanlatest.png"
                    alt="Chethan Jagadeesh"
                    width="200"
                    height="200"
                  />
                </div>
                <div className=" flex flex-col md:flex-row items-center justify-between bg-stone-300 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                  <Image
                    className="rounded-lg sm:rounded-none sm:rounded-l-lg justify-start w-[25rem]"
                    src="/Dineshlatest.png"
                    alt="Dinesh Basavarajappa"
                    width="200"
                    height="200"
                  />

                  <div className="justify-center w-auto px-6">
                    <h3 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Dinesh Basavarajappa</a>
                    </h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Board of Director
                    </p>
                    <p className="text-justify  flex text-wrap mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      Dinesh M Basavarajappa is a Fisheries Graduate from UAS
                      Bangalore, endorsed as a Fish Technologist by the
                      Government of India, boasting 25 years of extensive
                      expertise. His professional journey encompasses diverse
                      roles in Production Planning & Control, Quality Assurance,
                      Process Enhancements, Sales and Marketing, Logistics
                      Operations, and Man Management across the realms of Food
                      Processing, Animal Feed Production, and Poultry Hatchery
                      Operations. With nearly a decade spent in East African
                      countries within the Seafood & Meat Industry's and another
                      15 years dedicated to the Poultry Industry in the Middle
                      East, he has operated at various levels, ranging from
                      Shift Manager to Head of Operations and VP.
                    </p>
                    <ul class="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
