import React from "react";

const FeatureInput = ({ featureId, setFeatureId, posMean, setPosMean, negMean, setNegMean, ablationVal, setAblationVal }) => {
  return (
    <div className="bg-white flex flex-row justify-between px-10 py-5 w-full space-x-5">
      <div className="flex flex-col w-1/4">
        <div className="text-black font-semibold text-[22px] flex self-center">Feature ID</div>
        <input
          type="text"
          value={featureId}
          onChange={(e) => setFeatureId(e.target.value)}
          className="border border-black py-2 text-center text-black text-[18px]"
          placeholder="0"
        />
        <div className="text-black self-end text-[14px]">(ex. 1477)</div>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="text-black font-semibold text-[22px] flex self-center">Pos. Mean</div>
        <input
          type="text"
          value={posMean}
          onChange={(e) => setPosMean(e.target.value)}
          className="border border-black py-2 text-center text-black text-[18px]"
          placeholder="0.00"
        />
        <div className="text-black self-end text-[14px]">(ex. 0.00 - 1.00)</div>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="text-black font-semibold text-[22px] flex self-center">Neg. Mean</div>
        <input
          type="text"
          value={negMean}
          onChange={(e) => setNegMean(e.target.value)}
          className="border border-black py-2 text-center text-black text-[18px]"
          placeholder="0.00"
        />
        <div className="text-black self-end text-[14px]">(ex. -1.00 - 0.00)</div>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="text-black font-semibold text-[22px] flex self-center">Ablation Val.</div>
        <input
          type="text"
          value={ablationVal}
          onChange={(e) => setAblationVal(e.target.value)}
          className="border border-black py-2 text-center text-black text-[18px]"
          placeholder="0.0"
        />
        <div className="text-black self-end text-[14px]">(ex. 0.0 - 4.0)</div>
      </div>
    </div>
  );
};

export default FeatureInput;