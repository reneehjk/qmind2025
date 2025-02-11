import bgr from "../public/bg-r.svg";
import bgl from "../public/bg-l.svg";
import bgm from "../public/bg-m.svg";
import logo from "../public/logo.svg";

function App() {
  return (
    <div className="bg-[#141414] flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col p-20 items-start z-10 w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgr})` }}>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row">
            <img src={logo} alt="Logo" className="w-20 h-20" />
            <div className="ml-10 text-white text-[55px] font-bold ">
              M.I.
            </div>
          </div>
          <div className="flex flex-row space-x-20 text-white self-end mb-5 text-[28px] font-semibold">
            <div>About</div>
            <div>Project</div>
            <div>Demo</div>
          </div>
        </div>
        <div className="px-[120px] z-20">
          <div className="text-white pt-16">
            <div className="font-bold text-[35px]">
              What is Mechanistic Interpretation?
            </div>
            <div className="pt-10 text-[18px]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?
            </div>
          </div>
          <div className="text-white pt-20">
            <div className="font-bold text-[35px]">
              How does our project work?
            </div>
            <div className="pt-10 text-[18px]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?
            </div>
          </div> 
        </div>
      </div>
      <div
        className="flex flex-col p-20 items-start z-10 w-full h-[100vh] bg-cover bg-center py-[500px]"
        style={{ backgroundImage: `url(${bgm})` }}>
        <div className="px-[120px] text-white -mt-[400px] w-full space-y-[30px] px-[120px]">
          <div className="font-bold text-[35px]">
            Try out the SAE Feature Filter Visualization!
          </div>
          <div className="bg-black w-full py-10 px-10 mt-12 z-20">
            <div className="text-[28px] font-semibold">Model Details:</div>
            <div className="flex flex-row justify-between mt-[14px] space-x-4">
              <div className="flex flex-col w-1/3">
                <div className="text-[22px] mb-5">Model Name</div>
                <div className="bg-white w-full text-[14px] text-black">box</div>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="text-[22px] mb-5">SAE Release</div>
                <div className="bg-white w-full text-[14px] text-black">box</div>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="text-[22px] mb-5">SAE ID</div>
                <div className="bg-white w-full text-[14px] text-black">box</div>
              </div>
            </div>
          </div>
          <div className="bg-black w-full py-10 px-10 mt-12">
            <div className="text-[28px] font-semibold">Upload files:</div>
            <div className="flex flex-row justify-between mt-[14px] space-x-4">
              <div className="flex flex-col w-1/2">
                <div className="text-[22px] mb-5">Positive Prompt File</div>
                <div className="bg-white w-full text-[14px] text-black">box</div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="text-[22px] mb-5">Negative Prompt File</div>
                <div className="bg-white w-full text-[14px] text-black">box</div>
              </div>
            </div>
          </div>
          <div className="bg-black w-full py-10 px-10 mt-12">
            <div className="text-[28px] font-semibold">Set thresholds:</div>
            <div className="flex flex-row justify-between mt-[14px] space-x-4">
              <div className="flex flex-col w-1/2">
                <div className="text-[22px] mb-5">Positive Threshold</div>
                <div className="bg-white w-full text-[14px] text-black">box</div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="text-[22px] mb-5">Negative Threshold</div>
                <div className="bg-white w-full text-[14px] text-black">box</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col p-20 items-start relative z-10 w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgl})` }}
      >
        <div className="flex justify-center w-full -mt-[60px]">
          <button className="bg-[#5617B0] px-8 py-3 text-white rounded-xl text-[22px] font-semibold">Generate Features</button>
        </div>
        <div className="text-white pt-24 px-[120px]">
          <div className="text-[35px] font-bold">Output:</div>
          <div className="pt-10 text-[18] font-medium">Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?</div>
        </div>
      </div>
      <footer className="bg-black text-white px-[50px] pt-7 pb-2 -mt-60 z-20">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-6 ">
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
        <div className="mr-40">
          <h3 className="text-[28px] font-semibold">Contributors:</h3>
          <div className="grid grid-cols-3 gap-x-20 gap-y-2 text-[18px] mt-2 font-medium">
            <span>Name</span>
            <span>Name</span>
            <span>Name</span>
            <span>Name</span>
            <span>Name</span>
            <span>Name</span>
          </div>
        </div>
      </div>
      <div className="border-t-[0.5px] border-white mt-6 pt-4 text-left text-[14px]">
        QMIND © 2025
      </div>
    </footer>
    </div>
  );
}

export default App;
