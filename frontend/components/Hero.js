import React, { useState } from "react";
import Link from "next/link";
import Typed from "react-typed";
import { useAuth } from "../pages/AuthContext";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import Navbar from "./Navbar";

const Hero = () => {
  const { authenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="border-indigo-800 rounded-lg p-4 mb-8 flex flex-col items-center">
          <div className="mb-24 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-20 h-20 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <h1 className="text-6xl font-medium font-bold mb-8 mt-6 ml-4 text-black">
              SummarEase
            </h1>
          </div>

          <div className="border-4 rounded-lg border-indigo-600 w-full h-full px-16 py-12" style={{
            boxShadow: `0 0 70px rgba(79, 70, 229, 1)`,
          }}>
            <div className="border-4 rounded-sm border-indigo-800 w-full flex justify-center mb-8">
              <button
                className={`w-1/2 mr-4 text-2xl font-bold focus:outline-none ${
                  activeTab === "login"
                    ? "text-white bg-indigo-800 border-b-8 border-indigo-800"
                    : "text-indigo-800 bg-white"
                }`}
                onClick={() => handleTabChange("login")}
              >
                Login
              </button>
              <button
                className={`w-1/2 text-2xl font-bold focus:outline-none ${
                  activeTab === "signup"
                    ? "text-white bg-indigo-800 border-b-2 border-indigo-800"
                    : "text-indigo-800 bg-white"
                }`}
                onClick={() => handleTabChange("signup")}
              >
                Signup
              </button>
            </div>
            {activeTab === "login" && <LoginForm />}
            {activeTab === "signup" && <SignupForm />}
          </div>
        </div>
      </div>
    );
  }

  const strings = ["Transcriber", "Summarizer"];
  return (
    <>
      {authenticated}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-md h-[800px] w-[750px] hover:scale-105 transition-transform duration-500 ease-in-out transform"
              style={{
                boxShadow: `0 0 80px rgba(79, 70, 229, 1)`,
              }}
              alt="hero"
              src="/Summarease.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 mb-48 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-8xl text-3xl mb-4 font-bold text-indigo-600">
              <br className="hidden lg:inline-block" /> Free, open source
              Lecture <br></br>
              <Typed
                strings={strings}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                loop
                showCursor
                cursorChar="|"
                className="typing-animation"
              />
            </h1>
            <p className="text-xl font-bold mb-8 leading-relaxed text-black">
              Upload your audio file, and it will be summarized
            </p>
            <div className="flex justify-center">
              {/* <FileUploader /> */}
              <Link href="/how">
                <button className="inline-flex text-white font-bold bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">
                  How it works
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="ml-4 inline-flex text-indigo-700 font-bold bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
