import React from "react";

const FileUpload = ({ positivePromptFile, setPositivePromptFile, negativePromptFile, setNegativePromptFile, handleFileUpload, handleDrop, deleteFile }) => {
  return (
    <div className="bg-black w-full py-10 px-10 mt-5 border-white border">
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
  );
};

export default FileUpload;