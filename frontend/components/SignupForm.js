import React, { useState } from "react";

const SignupForm = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccessMessage("");
      if (response.status === 200) {
        // Signup successful
        // onSignup(formData);
        
        // Clear any previous error messages
        setErrorMessage("");
        
        // Set the success message
        setSuccessMessage("Signup successful! You can now log in.");

        // Clear the form data after successful signup if needed
        setFormData({
          email: "",
          name: "",
          password: "",
        });
      } else {
        // Signup failed
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Authentication failed:", error.message);
      // Handle authentication failure (e.g., show an error message)
      setErrorMessage("Signup failed. Please try again.");
      // Clear the success message in case of failure
      setSuccessMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h2 className="text-4xl font-bold mb-6">Signup</h2>
      {successMessage && (
        <p className="text-green-600 mb-4 text-xl font-bold">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-600 mb-4 text-xl font-bold">{errorMessage}</p>
      )}
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border-2 border-indigo-600 rounded-md w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border-2 border-indigo-600 rounded-md w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border-2 border-indigo-600 rounded-md w-full p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white text-2xl font-bold py-2 px-6 mt-4 w-[50%] rounded-md"
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
