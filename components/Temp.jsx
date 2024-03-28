"use client";

import React, { useRef, useState } from "react";

export function Temp() {
  // Refs for form inputs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  // State for handling form submission status
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Function to handle form submission
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

  return (
    <main className="pt-16 pb-16">
      <div className="mt-10 mb-10 w-full h-auto bg-banner-bg">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 rounded-lg shadow-md p-6 max-w-xl mx-auto backdrop-blur-lg backdrop-filter bg-opacity-50"
        >
          {/* First Name */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col w-full max-w-md">
              <label className="mb-2">First Name</label>
              <input
                type="text"
                className="border rounded-md py-1 px-3"
                ref={firstNameRef}
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col w-full max-w-md">
              <label className="mb-2">Last Name</label>
              <input
                type="text"
                className="border rounded-md py-1 px-3"
                ref={lastNameRef}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col w-full max-w-md">
              <label className="mb-2">Email</label>
              <input
                type="email"
                className="border rounded-md py-1 px-3"
                ref={emailRef}
              />
            </div>
          </div>

          {/* Company */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col w-full max-w-md">
              <label className="mb-2">Company</label>
              <input
                type="text"
                className="border rounded-md py-1 px-3"
                ref={companyRef}
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col w-full max-w-md">
              <label className="mb-2">Phone Number</label>
              <input
                type="tel"
                className="border rounded-md py-1 px-3"
                ref={phoneRef}
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex justify-center py-2">
            <div className="flex flex-col w-full max-w-md">
              <label className="mb-2">Message</label>
              <textarea
                className="border rounded-md py-1 px-3"
                rows="4"
                ref={messageRef}
              ></textarea>
            </div>
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
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
      </div>
    </main>
  );
}
