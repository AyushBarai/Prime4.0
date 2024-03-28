"use client";
import Image from "next/image";
import { React, useRef, useState } from "react";
import bgform from "../public/contactus.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function Contact() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve form input values using refs
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    // Clear submission status before making new submission
    setSubmissionStatus(null);

    try {
      // Send form data to backend API
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Log API call status
      if (response.ok) {
        console.log("API call successful.");
        setSubmissionStatus("success");
      } else {
        console.log("API call failed.");
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmissionStatus("error");
    }
  };

  // State to track submission status
  const [submissionStatus, setSubmissionStatus] = useState(null);

  return (
    <>
      <Image
        src={bgform}
        alt="Hero"
        className="absolute w-[100%] z-[-1] h-auto"
      />
      <div className="flex relative justify-center justify-items-center ">
        <form
          className="bg-white p-6 shadow-md  bg-opacity-70 mt-[6rem]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  ref={firstNameRef}
                  className="mt-1 border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  ref={lastNameRef}
                  className="mt-1 border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  className="mt-1 border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="company"
                  className="text-sm font-semibold text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  ref={companyRef}
                  className="mt-1 border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                ref={phoneRef}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Format: 123-456-7890"
                className="mt-1 border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                ref={messageRef}
                className="mt-1 border border-gray-300 rounded-md px-3 py-2"
                rows="5"
              ></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
          {/* Display submission status */}
          {submissionStatus === "success" && (
            <p className="text-green-600 text-center mt-3">
              Email sent successfully!
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-600 text-center mt-3">
              Failed to send email. Please try again later.
            </p>
          )}
        </form>
        <div className="hidden md:block bg-slate-500 bg-opacity-70 space-y-5 p-6 shadow-md mt-[6rem] ">
          <h3 className="text-xl font-bold text-white">What Happens Next?</h3>
          <p className="text-gray-200">
            {" "}
            <ArrowForwardIcon /> Our sales managers reach out to you.
          </p>
          <p className="text-gray-200">
            <ArrowForwardIcon /> Our experts get in touch with you to understand
            your requirements.
          </p>
          <p className="text-gray-200">
            <ArrowForwardIcon />
            We discuss and propose project estimates and timelines.
          </p>
          <p className="text-gray-200">
            <ArrowForwardIcon />
            Then its time to work our magic and let you see the results.
          </p>
        </div>
      </div>
    </>
  );
}
