import React, { useRef, useState } from "react";
import bgr from "../public/bg-r.svg";
import bgl from "../public/bg-l.svg";
import bgm from "../public/bg-m.svg";
import logo from "../public/logo.svg";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import FeatureInput from "./components/FeatureInput";
import PromptInput from "./components/PromptInput";
import Neuronpedia from "./components/Neuronpedia";

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const demoRef = useRef(null);

  const [modelName, setModelName] = useState("");
  const [saeRelease, setSaeRelease] = useState("");
  const [saeId, setSaeId] = useState("");
  const [positivePromptFile, setPositivePromptFile] = useState(null);
  const [negativePromptFile, setNegativePromptFile] = useState(null);
  const [positiveThreshold, setPositiveThreshold] = useState(0.0);
  const [negativeThreshold, setNegativeThreshold] = useState(0.0);

  const [neuronpediaImages, setNeuronpediaImages] = useState([logo, logo, logo, logo]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [featureId, setFeatureId] = useState("");
  const [posMean, setPosMean] = useState("");
  const [negMean, setNegMean] = useState("");
  const [ablationVal, setAblationVal] = useState("");

  const [prompt, setPrompt] = useState("");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

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

  const deleteFile = (setFile) => {
    setFile(null);
  };

  const adjustThreshold = (value, setValue, delta) => {
    const newValue = parseFloat((value + delta).toFixed(2));
    if (newValue >= 0.0 && newValue <= 1.0) {
      setValue(newValue);
    }
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? neuronpediaImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === neuronpediaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-[#141414] flex flex-col justify-self-center">
      <div className="absolute inset-0 z-10">
        <div className="space-y-[100px]">
          <div
            className="w-full h-[80vh] bg-cover bg-center mt-20"
            style={{ backgroundImage: `url(${bgr})` }}
          ></div>
          <div
            className="w-full h-[80vh] bg-cover bg-center mb-40"
            style={{ backgroundImage: `url(${bgm})` }}
          ></div>
          <div
            className="w-full h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgl})` }}
          ></div>
          <div
            className="w-full h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgr})` }}
          ></div>
          <div
            className="w-full h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgl})` }}
          ></div>
        </div>
      </div>

      <div className="relative z-20">
        <div className="pt-[50px] px-[50px]">
          <Header
            scrollToSection={scrollToSection}
            aboutRef={aboutRef}
            projectRef={projectRef}
            demoRef={demoRef}
          />
          <div className="px-[120px]">
            <About aboutRef={aboutRef} />
            <Project projectRef={projectRef} />
            <Demo
              demoRef={demoRef}
              modelName={modelName}
              setModelName={setModelName}
              saeRelease={saeRelease}
              setSaeRelease={setSaeRelease}
              saeId={saeId}
              setSaeId={setSaeId}
              positivePromptFile={positivePromptFile}
              setPositivePromptFile={setPositivePromptFile}
              negativePromptFile={negativePromptFile}
              setNegativePromptFile={setNegativePromptFile}
              positiveThreshold={positiveThreshold}
              setPositiveThreshold={setPositiveThreshold}
              negativeThreshold={negativeThreshold}
              setNegativeThreshold={setNegativeThreshold}
              handleFileUpload={handleFileUpload}
              handleDrop={handleDrop}
              deleteFile={deleteFile}
              adjustThreshold={adjustThreshold}
            />
          </div>
          <div className="flex justify-center w-full pt-20">
            <button className="bg-[#5617B0] px-8 py-3 text-white rounded-xl text-[22px] font-semibold">Generate Features</button>
          </div>
          <div className="text-white py-18 px-[120px]">
            <div className="text-[35px] font-bold">Output:</div>
            <div className="bg-white flex flex-row justify-between px-10 pb-5 pt-3 w-full mt-5 space-x-5">
              <div className="flex flex-col w-1/3">
                <div className="text-black font-bold text-[22px] flex self-center">Feature ID</div>
                <div className="text-white bg-black flex justify-center w-full">
                  <div className="text-[22px]">1174</div>
                </div>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="text-black font-bold text-[22px] flex self-center">Pos. Mean</div>
                <div className="text-white bg-black flex justify-center w-full">
                  <div className="text-[22px]">0.87</div>
                </div>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="text-black font-bold text-[22px] flex self-center">Neg. Mean</div>
                <div className="text-white bg-black flex justify-center w-full">
                  <div className="text-[22px]">-0.87</div>
                </div>
              </div>
            </div>
            <Neuronpedia
              neuronpediaImages={neuronpediaImages}
              currentImageIndex={currentImageIndex}
              goToPreviousImage={goToPreviousImage}
              goToNextImage={goToNextImage}
            />
            <div className="font-semibold text-[44px] mt-20">Try an LLM with the custom features!</div>
            <FeatureInput
              featureId={featureId}
              setFeatureId={setFeatureId}
              posMean={posMean}
              setPosMean={setPosMean}
              negMean={negMean}
              setNegMean={setNegMean}
              ablationVal={ablationVal}
              setAblationVal={setAblationVal}
            />
            <div className="mt-10 font-semibold text-[35px]">Prompt:</div>
            <PromptInput prompt={prompt} setPrompt={setPrompt} />
            <div className="flex flex-row w-full space-x-5 mt-14">
              <div>
                <div className="text-[28px] font-semibold"><strong>Before</strong> custom features</div>
                <div className="bg-white p-5 mt-3">
                  <div className="text-black text-[20px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?</div>
                </div>
              </div>
              <div>
                <div className="text-[28px] font-semibold"><strong>After</strong> custom features</div>
                <div className="bg-white p-5 mt-3">
                  <div className="text-black text-[20px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;