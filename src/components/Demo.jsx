import React from "react";
import FileUpload from "./FileUpload";
import ThresholdInput from "./ThresholdInput";

const Demo = ({ demoRef, modelName, setModelName, saeRelease, setSaeRelease, saeId, setSaeId, positivePromptFile, setPositivePromptFile, negativePromptFile, setNegativePromptFile, positiveThreshold, setPositiveThreshold, negativeThreshold, setNegativeThreshold, handleFileUpload, handleDrop, deleteFile, adjustThreshold }) => {
  return (
    <div ref={demoRef} className=" text-white w-full space-y-[30px] pt-24">
      <div className="font-bold text-[35px]">Try out the SAE Feature Filter Visualization!</div>
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
      <FileUpload
        positivePromptFile={positivePromptFile}
        setPositivePromptFile={setPositivePromptFile}
        negativePromptFile={negativePromptFile}
        setNegativePromptFile={setNegativePromptFile}
        handleFileUpload={handleFileUpload}
        handleDrop={handleDrop}
        deleteFile={deleteFile}
      />
      <ThresholdInput
        positiveThreshold={positiveThreshold}
        setPositiveThreshold={setPositiveThreshold}
        negativeThreshold={negativeThreshold}
        setNegativeThreshold={setNegativeThreshold}
        adjustThreshold={adjustThreshold}
      />
    </div>
  );
};

export default Demo;