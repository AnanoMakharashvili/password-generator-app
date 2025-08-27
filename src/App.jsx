import "./App.css";
import Icon from "./assets/icon-copy.svg";
import Arrow from "./assets/icon-arrow-right.svg";
import "./index.css";
import React from "react";

function Main() {
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
            <span className="text-[#A4FFAF] text-[24px] font-bold">10</span>
          </div>
          <input
            type="range"
            name="range"
            min="25"
            max="200"
            className="slider bg-[#18171F] w-[311px] appearance-none
             accent-[#E6E5EA]  "
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
        <div className="flex items-center justify-between bg-[#18171F] p-[17px]">
          <span className="text-[#817D92] text-[16px] font-bold font-['JetBrains-Mono']">
            STRENGTH
          </span>

          <div className="flex items-center gap-[6px] bg-[#18171F]">
            <span className="text-[#E6E5EA] text-[18px] font-bold font-['JetBrains-Mono']">
              MEDIUM
            </span>
            <div className="flex gap-[8px]">
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
  const boxes = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500"];

  return (
    <div className="flex gap-4 p-4">
      {boxes.map((box, index) => (
        <div
          key={box.id}
          className={`w-16 h-16 rounded-lg ${colors[index]}`}
        ></div>
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
