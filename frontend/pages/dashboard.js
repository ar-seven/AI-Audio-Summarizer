import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FileUploader from "../components/FileUploader";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [afterUpload, setAfterUpload] = useState(false);
  const [beforeUpload, setBeforeUpload] = useState(false);

  useEffect(() => {
    // Set afterUpload to true when loading is complete
    if (!loading) {
      setAfterUpload(true);
    }
  }, [loading]);

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-indigo-700 font-bold">
            SummarEase Trialzone
          </h1>
          {/* <p className="lg:w-2/3 text-2xl mt-8 text-black font-bold mx-auto leading-relaxed text-base">
            Upload your content.
          </p> */}
          <div className="w-[50%] mx-auto mt-12">
            {loading && (
              <div className="flex items-center text-3xl text-black font-bold justify-center">
                <AiOutlineLoading3Quarters className="animate-spin font-extrabold text-indigo-600 text-4xl" />
              </div>
            )}
            {/* {!loading && afterUpload && (
              <p className="text-black font-bold text-xl">Done!</p>
            )} */}
          </div>
        </div>
        <div className="flex flex-row justify-center mb-24">
          <FileUploader loading={loading} setLoading={setLoading}  />
        </div>

        {afterUpload && !loading && (
          <>
            <h1 className="sm:text-5xl flex flex-col text-center text-2xl font-medium title-font mb-4 text-indigo-700 font-bold">
              SummarEase Dashboard
            </h1>
            <div className="flex justify-center -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 hover:border-indigo-600 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    4
                  </h2>
                  <p className="leading-relaxed">Active Users</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 hover:border-indigo-600 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    3
                  </h2>
                  <p className="leading-relaxed">Lectures summarized</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
