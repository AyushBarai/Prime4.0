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

    // Handle response from API
    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
};
