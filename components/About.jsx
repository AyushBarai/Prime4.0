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

        <section className="mx-auto w-full py-12 md:py-24  bg-gradient-to-t from-gray-700 via-gray-900 to-blacklg:py-32 sm:px-8 lg:px-16 bg-gradient-to-t from-gray-700 via-gray-900 to-black ">
          <div className="flex items-center text-center">
            <div>
              <div className="w-full flex flex-col items-center justify-center text-white">
                <h2 className="text-6xl font-semibold mb-8 justify-center">
                  Who We Are?
                </h2>
                <p className="text-2xl text-justify justify-center">
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
        </section>
      </main>
    </div>
  );
}
