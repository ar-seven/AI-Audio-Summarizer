import React, { useRef, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { MdCloudDownload } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import { useAuth } from "../pages/AuthContext";

const FileUploader = ({ loading, setLoading }) => {
  const hiddenFileInput = useRef(null);
  const downloadButton = useRef(null);
  const {email} = useAuth();

  const [downloadHref, setDownloadHref] = useState("");
  const [transcribedText, setTranscribedText] = useState("");
  const [summarizedText, setSummarizedText] = useState("");
  const [displayTranscribed, setDisplayTranscribed] = useState(true);
  const [uploadClicked, setUploadClicked] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  const handleClick = async (event) => {
    hiddenFileInput.current.click();
  };

  const handleLinkSubmit = async () => {
    try {
      setLoading(true);

      // Handle link input
      let formData = new FormData();
      formData.append("link", linkInput);
      formData.append("email",email);
      // const link = linkInput.trim();

      if (linkInput.length > 0) {
        const response = await fetch("http://localhost:8000/summarize/yt/", {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          
          body: formData
        });

        if (response.ok) {
          const data = await response.json();
          setTranscribedText(data.transcribed_text);
          setSummarizedText(data.summarized_text);
          setDownloadHref(data.download_url);
          setUploadClicked(true);
        } else {
          console.error("Error in link upload");
        }
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleChange = async (event) => {
    try {
      setLoading(true);

      if (event.target.files.length > 0) {
        // Handle file input
        let formData = new FormData();
        formData.append("file", event.target.files[0]);
        formData.append("email",email);
        const response = await fetch("http://localhost:8000/summarize/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setTranscribedText(data.transcribed_text);
          setSummarizedText(data.summarized_text);
          setDownloadHref(data.download_url);
          setUploadClicked(true);
        } else {
          console.error("Error in file upload");
        }
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const toggleTextDisplay = () => {
    setDisplayTranscribed(!displayTranscribed);
  };

  return (
    <div className="flex-col justify-start items-start">
      {uploadClicked && !loading && (
        <p className="flex-row text-center text-black font-bold mb-6 text-xl">
          Done!
        </p>
      )}

      <div className="flex items-start mb-4" >
        <input
          type="text"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
          placeholder="Enter a YouTube link"
          className="border-2 border-indigo-700 rounded-md p-4 mr-4 h-13 w-96 flex-shrink-0" style={{
            boxShadow: `0 0 10px rgba(79, 70, 229, 1)`,
          }}
        />
        <button
          onClick={handleLinkSubmit}
          className="inline-flex text-white font-bold bg-indigo-600 border-0 py-2 px-4 mr-4 focus:outline-none hover:bg-indigo-800 rounded text-lg" 
        >
          <span className="flex items-center text-xl justify-center">
            Submit Link &nbsp; <FaLink className="ml-2 text-4xl" />
          </span>
        </button>
      </div>

      <div className="flex items-center justify-center mb-4">
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          className="hidden"
        />
        <button
          type="submit"
          onClick={handleClick}
          className="inline-flex text-white font-bold bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-800 rounded text-lg"
        >
          <span className="flex items-center text-xl justify-center">
            Upload a file <IoMdCloudUpload className="ml-2 text-4xl" />
          </span>
        </button>
      </div>

      {uploadClicked && !loading && (
        <button
          onClick={toggleTextDisplay}
          className="flex text-white font-bold mt-6 mr-4 bg-indigo-600 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-800 rounded text-lg"
          disabled={downloadHref}
        >
          {displayTranscribed ? (
            <span className="flex items-center text-xl justify-center">
              <IoDocumentTextSharp className="mr-2 text-4xl" />
              Show Summarized Text
            </span>
          ) : (
            <span className="flex items-center text-xl justify-center">
              <IoDocumentTextSharp className="mr-2 text-4xl" />
              Show Transcribed Text
            </span>
          )}
        </button>
      )}

      {loading && (
        <div className="flex items-center text-3xl text-black font-bold justify-center mt-4">
          <AiOutlineLoading3Quarters className="animate-spin font-extrabold text-indigo-600 text-4xl" />
        </div>
      )}

      {((displayTranscribed && transcribedText) ||
        (!displayTranscribed && summarizedText)) && (
        <div className="mt-4">
          <h3 className="text-4xl text-indigo-700 mt-8 font-bold mb-6">
            {displayTranscribed ? "Transcribed Text:" : "Summarized Text:"}
          </h3>
          <div className="overflow-auto max-h-screen text-xl font-bold">
            {displayTranscribed ? transcribedText : summarizedText}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
