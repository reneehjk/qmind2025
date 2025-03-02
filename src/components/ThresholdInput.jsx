import React from "react";

const ThresholdInput = ({ positiveThreshold, setPositiveThreshold, negativeThreshold, setNegativeThreshold, adjustThreshold }) => {
  return (
    <div className="bg-black w-full py-10 px-10 mt-5 border-white border">
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
              min="0.00"
              max="1.00"
              step="0.01"
            />
            <div className="w-full">
              <button
                onClick={() => adjustThreshold(positiveThreshold, setPositiveThreshold, -0.01)}
                className="bg-[#7EB0D0] text-white w-1/2 py-[7px]"
              >
                -
              </button>
              <button
                onClick={() => adjustThreshold(positiveThreshold, setPositiveThreshold, 0.01)}
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
              step="0.01"
            />
            <div className="w-full">
              <button
                onClick={() => adjustThreshold(negativeThreshold, setNegativeThreshold, -0.01)}
                className="bg-[#DA83AE] text-white w-1/2 py-[7px]"
              >
                -
              </button>
              <button
                onClick={() => adjustThreshold(negativeThreshold, setNegativeThreshold, 0.01)}
                className="bg-[#DB1377] text-white w-1/2 py-[7px]"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThresholdInput;