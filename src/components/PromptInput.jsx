import React, { useState } from "react";

const PromptInput = ({ prompt, setPrompt }) => {
  const [isPromptFocused, setIsPromptFocused] = useState(false);

  return (
    <div className="rounded-2xl w-full bg-[#444444] p-4 flex flex-row space-x-4 items-center">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onFocus={() => setIsPromptFocused(true)}
        onBlur={() => setIsPromptFocused(false)}
        className="border border-white rounded-2xl p-2 w-full bg-transparent text-white text-[28px] outline-none"
        placeholder={isPromptFocused ? "" : "Type any prompt..."}
      />
      <button className="border border-white rounded-full aspect-square p-2 w-15">↑</button>
    </div>
  );
};

export default PromptInput;