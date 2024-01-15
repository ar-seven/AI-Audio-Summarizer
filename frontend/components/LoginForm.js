import React, { useState } from "react";
import { useAuth } from "../pages/AuthContext";

const LoginForm = ({ onLogin }) => {
  const { login, setEmail } = useAuth(); // Use the useAuth hook
  const [error, setError] = useState(""); // State for error message

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData.email);

    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      // Call the login function from useAuth to update the authentication status
      login();

      setEmail(formData.email);

      // Assuming onLogin is a function prop for handling login logic
      // You might want to call onLogin with the user data if needed
      onLogin(formData);

      // Clear any previous error on successful login
      setError("");
    } catch (error) {
      console.error("Authentication failed:", error.message);

      // Set the error message for display
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin} className="text-center">
      <h2 className="text-4xl font-bold mb-6">Login</h2>
      {error && <p className="text-red-600 mb-4 text-xl font-bold">{error}</p>}
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
