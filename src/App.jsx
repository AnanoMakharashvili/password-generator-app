import "./App.css";
import Icon from "./assets/icon-copy.svg";
import Arrow from "./assets/icon-arrow-right.svg";
import "./index.css";
import React, { useState } from "react";

function Main() {
  const [value, setValue] = useState(10);

  return (
    <>
      <header className="flex items-center justify-center text-[#817D92] text-[16px] font-bold  font-['JetBrains-Mono'] transform translate-x-[10px] translate-y-[-29px]">
        Password Generator
      </header>
      <div className="flex flex-col items-center  bg-[#24232C] p-[8px] text-[24px]">
        <div className="flex justify-around items-center gap-[150px]">
          <span>PTx1f5DaFX</span>
          <img className="icon" src={Icon} alt="icon" />
        </div>
      </div>
      <div className="container flex flex-col item-center  bg-[#24232C] mt-[25px] p-[6px] gap-[30px]">
        <div className="flex flex-col items-center gap-[22px] ">
          <div className="flex flex-row items-center gap-[128px]">
            <span className="text-[#E6E5EA] ">Character Length</span>
            <span className="text-[#A4FFAF] text-[24px] font-bold">
              {value}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              background: `linear-gradient(to right, #A4FFAF ${
                (value / 20) * 100
              }%, #18171F ${(value / 20) * 100}%)`,
            }}
            className="w-[311px] h-[8px] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-row justify-center gap-[20px]">
            <input type="checkbox" />
            <span>Include Uppercase Letters</span>
          </div>
          <div className="flex flex-row justify-center gap-[20px]">
            <input type="checkbox" />
            <span>Include Lowercase Letters</span>
          </div>
          <div className="flex flex-row justify-center gap-[20px] ml-[-94px]">
            <input type="checkbox" />
            <span>Include Numbers</span>
          </div>
          <div className="flex flex-row justify-center gap-[20px] ml-[-93px]">
            <input type="checkbox" />
            <span>Include Symbols</span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#18171F] p-[17px] ">
          <span className="text-[#817D92] text-[16px] font-bold font-['JetBrains-Mono']">
            STRENGTH
          </span>

          <div className="flex items-center gap-[6px] bg-[#18171F]">
            <span className="text-[#E6E5EA] text-[18px] font-bold font-['JetBrains-Mono']">
              MEDIUM
            </span>
            <div className="flex gap-[8px] cursor-pointer">
              <div className="w-[10px] h-[28px] bg-[#F8CD65] border border-[#F8CD65]"></div>
              <div className="w-[10px] h-[28px] bg-[#F8CD65] border border-[#F8CD65]"></div>
              <div className="w-[10px] h-[28px] bg-[#F8CD65] border border-[#F8CD65]"></div>
              <div className="w-[10px] h-[28px] border border-[#E6E5EA]"></div>
            </div>
          </div>
        </div>

        <div>
          <button className="px-[131px] py-[13px] bg-[#a4ffaf] text-[#24232c]  font-bold text-[18px] leading-[100%] tracking-[0px">
            GENERATE
          </button>
          <img
            className="translate-x-[-119px] translate-y-[0px]"
            src={Arrow}
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
}

function ColorBoxes() {
  const boxes = [
    { id: 1, color: "bg-red-500" },
    { id: 2, color: "bg-orange-500" },
    { id: 3, color: "bg-yellow-500" },
    { id: 4, color: "bg-green-500" },
  ];

  return (
    <div className="flex gap-4 p-4 flex-wrap">
      {boxes.map((box) => (
        <div key={box.id} className={`w-16 h-16 rounded-lg ${box.color}`}></div>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Main />
      <ColorBoxes />
    </>
  );
}

export default App;
