import React from "react";
import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";
const How = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-2xl font-medium title-font text-indigo-600 font-bold mb-4">
              Summarizes your lectures
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl font-bold text-black">
              SummarEase is a free open-source web app that takes in lecture
              recordings as inputs and outputs their summaries. Simply drag and
              drop your audio file or find it from your computer, and your
              summary will generate very shortly.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-36 h-[6px] rounded-full bg-indigo-600 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-14 h-14" // Increase the size to make it a bit bigger
                  viewBox="0 0 24 24"
                >
                  {/* Outer Circle */}
                  <circle cx="12" cy="12" r="10" />

                  {/* Middle Circle */}
                  <circle cx="12" cy="12" r="7" />

                  {/* Inner Circle */}
                  <circle cx="12" cy="12" r="4" />

                  {/* Dot at the Center */}
                  <circle cx="12" cy="12" r="0.25" />

                  {/* Remove the 3D Perspective Arrow */}
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-600 font-bold text-lg title-font font-medium mb-3">
                  99% accuracy
                </h2>
                <p className="leading-relaxed text-black font-bold text-base">
                  Tested through multiple trials with university students
                </p>
                <a className="mt-3 text-indigo-600 hover:underline inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  {/* Clock Face */}
                  <circle cx="12" cy="12" r="10" />

                  {/* Clock Hands */}
                  <line x1="12" y1="12" x2="12" y2="6" />
                  <line x1="12" y1="12" x2="16" y2="12" />

                  {/* Center Dot */}
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-600 font-bold text-lg title-font font-medium mb-3">
                  Saves 90% of lecture time
                </h2>
                <p className="leading-relaxed text-black font-bold text-base">
                  Providing you the time to do more meaningful things in life
                </p>
                <a className="mt-3 text-indigo-600 hover:underline inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg text-indigo-600 font-bold title-font font-medium mb-3">
                  Your data is protected
                </h2>
                <p className="leading-relaxed text-black font-bold text-base">
                  Rest assure what you upload won't be finessed
                </p>
                <a className="mt-3 text-indigo-600 hover:underline inline-flex items-center">
                  See More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <Link to="p2" smooth>
            <button className="flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg font-bold">
              See the workflow
            </button>
          </Link>
        </div>
      </section>
      <Element name="p2">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                1
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12" // Increase the size to make it a bit bigger
                    viewBox="0 0 24 24"
                  >
                    {/* Browser Window */}
                    <rect x="3" y="3" width="18" height="14" rx="2" />

                    {/* Address Bar */}
                    <rect x="5" y="3" width="14" height="1.5" />

                    {/* Navigation Buttons */}
                    <circle cx="8" cy="10" r="1.5" />
                    <circle cx="12" cy="10" r="1.5" />
                    <circle cx="16" cy="10" r="1.5" />

                    {/* Center Dot */}
                    <circle cx="12" cy="17.5" r="1.5" />
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-indigo-600 font-bold mb-1 text-xl">
                    Web interface
                  </h2>
                  <p className="leading-relaxed text-black font-bold">
                    Drag and drop your audio file or find it from your computer
                    and upload it to your dashboard, which sends the file to our
                    server
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                2
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-indigo-600 font-bold mb-1 text-xl">
                    Speech to text
                  </h2>
                  <p className="leading-relaxed text-black font-bold">
                    We remove any excess background noise, then use the Silero
                    speech-to-text model to convert your lecture audio to text,
                    finally add punctuation and capitalization to the text using
                    an internal algorithm.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                3
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-indigo-600 font-bold mb-1 text-xl">
                    Machine Learning Model
                  </h2>
                  <p className="leading-relaxed text-black font-bold">
                    We use the Pegasus model to summarize the text, with a
                    custom layer to the model that increases summarization
                    accuracy for Waterloo Professors.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                4
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    {/* Door */}
                    <line x1="1" y1="1" x2="14" y2="1" />
                    <line x1="1" y1="1" x2="1" y2="20" />
                    <line x1="1" y1="20" x2="14" y2="20" />
                    <line x1="14" y1="1" x2="14" y2="5" />
                    <line x1="14" y1="20" x2="14" y2="16" />


                    {/* Arrow to the Right */}
                    <line x1="8" y1="10" x2="20" y2="10" />
                    <line x1="20" y1="10" x2="18" y2="8" />
                    <line x1="20" y1="10" x2="18" y2="12" />
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-indigo-600 font-bold mb-1 text-xl">
                    Output
                  </h2>
                  <p className="leading-relaxed text-black font-bold">
                    Simply click the download button to receive a text file of
                    your summarized lecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default How;
