import bgr from "../public/bg-r.svg";
import bgl from "../public/bg-l.svg";
import bgm from "../public/bg-m.svg";
import logo from "../public/logo.svg";
import { useRef, useState } from "react"; // Import useState for managing input values

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const demoRef = useRef(null);

  // State for input values
  const [modelName, setModelName] = useState("");
  const [saeRelease, setSaeRelease] = useState("");
  const [saeId, setSaeId] = useState("");
  const [positivePromptFile, setPositivePromptFile] = useState(null);
  const [negativePromptFile, setNegativePromptFile] = useState(null);
  const [positiveThreshold, setPositiveThreshold] = useState(0.0);
  const [negativeThreshold, setNegativeThreshold] = useState(0.0);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle file upload
  const handleFileUpload = (e, setFile) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/msword" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.type === "text/plain" ||
        file.type === "application/pdf")
    ) {
      setFile(file);
    } else {
      alert("Please upload a .doc, .docx, .pdf, or .txt file.");
    }
  };

  // Function to handle drag-and-drop file upload
  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (
      file &&
      (file.type === "application/msword" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.type === "text/plain" ||
        file.type === "application/pdf")
    ) {
      setFile(file);
    } else {
      alert("Please upload a .doc, .docx, .pdf, or .txt file.");
    }
  };

  // Function to delete uploaded file
  const deleteFile = (setFile) => {
    setFile(null);
  };

  // Function to increment/decrement threshold values
  const adjustThreshold = (value, setValue, delta) => {
    const newValue = parseFloat((value + delta).toFixed(1));
    if (newValue >= 0.0 && newValue <= 1.0) {
      setValue(newValue);
    }
  };

  return (
    <div className="relative bg-[#141414] flex flex-col justify-self-center">
      {/* Background Images Section */}
      <div className="absolute inset-0 z-10">
        <div className="space-y-[100px]">
          <div
            className="w-full h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgr})` }}
          ></div>
          <div
            className="w-full h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgm})` }}
          ></div>
          <div
            className="w-full h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgl})` }}
          ></div>
        </div>
      </div>

      {/* Header and Content Section */}
      <div className="relative z-20">
        <div className="pt-[50px] px-[50px]">
          <div className="flex flex-row justify-between w-[100vw] bg-black -mt-20 pt-10 fixed -ml-[50px] px-[50px]">
            <div className="flex flex-row">
              <img src={logo} alt="Logo" className="w-20 h-20" />
              <div className="ml-10 text-white text-[55px] font-bold ">
                M.I.
              </div>
            </div>
            <div className="flex flex-row space-x-20 text-white self-end mb-5 text-[28px] font-semibold">
              {/* Add onClick handlers to scroll to respective sections */}
              <div onClick={() => scrollToSection(aboutRef)} className="cursor-pointer">
                About
              </div>
              <div onClick={() => scrollToSection(projectRef)} className="cursor-pointer">
                Project
              </div>
              <div onClick={() => scrollToSection(demoRef)} className="cursor-pointer">
                Demo
              </div>
            </div>
          </div>
          <div className="px-[120px]">
            {/* Add ref to the "What is Mechanistic Interpretation?" section */}
            <div ref={aboutRef} className="text-white pt-24">
              <div className="font-bold text-[35px]">
                What is Mechanistic Interpretation?
              </div>
              <div className="pt-10 text-[18px]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?
              </div>
            </div>
            {/* Add ref to the "How does our project work?" section */}
            <div ref={projectRef} className="text-white pt-24">
              <div className="font-bold text-[35px]">
                How does our project work?
              </div>
              <div className="pt-10 text-[18px]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?
              </div>
            </div>
          </div>
          {/* Add ref to the "Try out the SAE Feature Filter Visualization!" section */}
          <div ref={demoRef} className="px-[120px] text-white w-full space-y-[30px] pt-24">
            <div className="font-bold text-[35px]">
              Try out the SAE Feature Filter Visualization!
            </div>
            <div className="bg-black w-full py-10 px-10 mt-10 border-white border">
              <div className="text-[28px] font-semibold">Model Details:</div>
              <div className="flex flex-row justify-between mt-[14px] space-x-4">
                <div className="flex flex-col w-1/3">
                  <div className="text-[22px] mb-5">Model Name</div>
                  <select
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    className="bg-white w-full text-[14px] text-black p-2"
                  >
                    <option value="" disabled>Select model</option>
                    <option value="Model 1">Model 1</option>
                    <option value="Model 2">Model 2</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/3 ">
                  <div className="text-[22px] mb-5">SAE Release</div>
                  <select
                    value={saeRelease}
                    onChange={(e) => setSaeRelease(e.target.value)}
                    className="bg-white w-full text-[14px] text-black p-2"
                  >
                    <option value="" disabled>Select release</option>
                    <option value="Release 1">Release 1</option>
                    <option value="Release 2">Release 2</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/3">
                  <div className="text-[22px] mb-5">SAE ID</div>
                  <select
                    value={saeId}
                    onChange={(e) => setSaeId(e.target.value)}
                    className="bg-white w-full text-[14px] text-black p-2"
                  >
                    <option value="" disabled>Select ID</option>
                    <option value="ID 1">ID 1</option>
                    <option value="ID 2">ID 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-black w-full py-10 px-10 mt-10 border-white border">
              <div className="text-[28px] font-semibold">Upload files:</div>
              <div className="flex flex-row justify-between mt-[14px] space-x-4">
                <div className="flex flex-col w-1/2">
                  <div className="text-[22px] mb-5">Positive Prompt File</div>
                  <div
                    className="border-2 border-dashed border-white p-10 flex flex-col items-center justify-center cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, setPositivePromptFile)}
                  >
                    <p className="text-white mb-4">Drag & Drop file here</p>
                    <div className="mb-4">or</div>
                    <label className="bg-white text-black px-4 py-2 rounded cursor-pointer">
                      Choose File
                      <input
                        type="file"
                        onChange={(e) => handleFileUpload(e, setPositivePromptFile)}
                        className="hidden"
                        accept=".doc,.docx,.txt,.pdf"
                      />
                    </label>
                  </div>
                  {positivePromptFile && (
                    <div className="flex items-center mt-4">
                      <button
                        onClick={() => deleteFile(setPositivePromptFile)}
                        className="text-white text-[14px] mr-2"
                      >
                        ×
                      </button>
                      <div className="text-[#5617B0] text-[14px]">
                        {positivePromptFile.name} uploaded
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="text-[22px] mb-5">Negative Prompt File</div>
                  <div
                    className="border-2 border-dashed border-white p-10 flex flex-col items-center justify-center cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, setNegativePromptFile)}
                  >
                    <p className="text-white mb-4">Drag & Drop file here</p>
                    <div className="mb-4">or</div>
                    <label className="bg-white text-black px-4 py-2 rounded cursor-pointer">
                      Choose File
                      <input
                        type="file"
                        onChange={(e) => handleFileUpload(e, setNegativePromptFile)}
                        className="hidden"
                        accept=".doc,.docx,.txt,.pdf"
                      />
                    </label>
                  </div>
                  {negativePromptFile && (
                    <div className="flex items-center mt-4">
                      <button
                        onClick={() => deleteFile(setNegativePromptFile)}
                        className="text-white text-[14px] mr-2"
                      >
                        ×
                      </button>
                      <div className="text-[#5617B0] text-[14px]">
                        {negativePromptFile.name} uploaded
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-black w-full py-10 px-10 mt-10 border-white border">
              <div className="text-[28px] font-semibold">Set thresholds:</div>
              <div className="flex flex-row justify-between mt-[14px] space-x-4">
                <div className="flex flex-col w-1/2">
                  <div className="text-[22px] mb-5">Positive Threshold</div>
                  <div className="flex flex-col items-center">
                    <input
                      type="number"
                      value={positiveThreshold}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (value >= 0.0 && value <= 1.0) {
                          setPositiveThreshold(value);
                        }
                      }}
                      className="bg-white w-full text-[14px] text-black p-2 text-center"
                      min="0.0"
                      max="1.0"
                      step="0.1"
                    />
                    <div className="w-full">
                      <button
                        onClick={() => adjustThreshold(positiveThreshold, setPositiveThreshold, -0.1)}
                        className="bg-[#7EB0D0] text-white w-1/2 py-[7px]"
                      >
                        -
                      </button>
                      <button
                        onClick={() => adjustThreshold(positiveThreshold, setPositiveThreshold, 0.1)}
                        className="bg-[#1384CF] text-white w-1/2 py-[7px]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="text-[22px] mb-5">Negative Threshold</div>
                  <div className="flex flex-col items-center">
                    <input
                      type="number"
                      value={negativeThreshold}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (value >= 0.0 && value <= 1.0) {
                          setNegativeThreshold(value);
                        }
                      }}
                      className="bg-white w-full text-[14px] text-black p-2 text-center"
                      min="0.0"
                      max="1.0"
                      step="0.1"
                    />
                    <div className="w-full">
                      <button
                        onClick={() => adjustThreshold(negativeThreshold, setNegativeThreshold, -0.1)}
                        className="bg-[#DA83AE] text-white w-1/2 py-[7px]"
                      >
                        -
                      </button>
                      <button
                        onClick={() => adjustThreshold(negativeThreshold, setNegativeThreshold, 0.1)}
                        className="bg-[#DB1377] text-white w-1/2 py-[7px]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full pt-20">
            <button className="bg-[#5617B0] px-8 py-3 text-white rounded-xl text-[22px] font-semibold">Generate Features</button>
          </div>
          <div className="text-white py-18 px-[120px]">
            <div className="text-[35px] font-bold">Output:</div>
            <div className="pt-5 text-[18] font-medium">Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?</div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white px-[50px] pt-7 pb-4 z-20 relative border-t-[0.5px] border-[#808080]">
        <div className="flex flex-col md:flex-row justify-between items-end  ">
          <div className="max-w-1/2">
            <h2 className="text-[35px] font-semibold flex items-end">
              <span className="mr-4">
                <img src={logo} className="h-12 w-12"/>
              </span>
              Mechanistic Interpretation
            </h2>
            <p className="text-[18px] mt-2 font-medium">
              short summary Lorem ipsum dolor amet, consectetur adipiscing elit.
              Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida
              urna ultrices lacus dictum feugiat ornare imperdiet.
            </p>
          </div>
          <div className="mr-4">
            <h3 className="text-[28px] font-semibold">Contributors:</h3>
            <div className="grid grid-cols-3 gap-x-20 gap-y-2 text-[18px] mt-2 font-medium">
              <span>David Courtis</span>
              <span>Jagrit</span>
              <span>Bridgitte Rauch</span>
              <span>Dhruv Popli</span>
              <span>David Krayacich</span>
              <span>Renee Kim</span>
            </div>
          </div>
        </div>
        <div className="border-t-[0.1px] border-[#808080] mt-6 pt-4 text-left text-[14px]">
          QMIND © 2025
        </div>
      </footer>
    </div>
  );
}

export default App;