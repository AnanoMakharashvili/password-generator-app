import "./App.css";
import Icon from "./assets/icon-copy.svg";
import Arrow from "./assets/icon-arrow-right.svg";
import "./index.css";

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
      <div className="container flex flex-col item-center bg-[#24232c] mt-[25px] p-[6px] gap-[30px]">
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
        <div className="flex flex-row  items-center justify-center gap-[57px] bg-[#18171F] p-[17px]">
          <span>STRENGTH</span>
          <span>MEDIUM</span>
        </div>
        <div>
          <button className="px-[131px] py-[13px] bg-[#a4ffaf] text-[#24232c] font-['JetBrains-Mono']">
            GENERATE
          </button>
          <img className="arrow" src={Arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
}

function App() {
  return <Main />;
}

export default App;
