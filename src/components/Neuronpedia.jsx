import React from "react";

const Neuronpedia = ({ neuronpediaImages, currentImageIndex, goToPreviousImage, goToNextImage }) => {
  return (
    <div className="text-[28px] font-semibold mt-14">
      Neuronpedia:
      <img src={neuronpediaImages[currentImageIndex]} className="w-full mt-5" />
      <div className="flex flex-row justify-between mt-2">
        <button onClick={goToPreviousImage} className="text-white">← Previous</button>
        <button onClick={goToNextImage} className="text-white">Next →</button>
      </div>
    </div>
  );
};

export default Neuronpedia;