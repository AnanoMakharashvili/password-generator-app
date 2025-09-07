import React, { useState } from "react";
import "./App.css";
import Icon from "./assets/icon-copy.svg";
import Arrow from "./assets/icon-arrow-right.svg";
import "./index.css";

function Main() {
  const [value, setValue] = useState(10);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("TOO WEAK");

  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}<>?,";

  const generatePassword = () => {
    let chars = "";
    if (includeUpper) chars += upperChars;
    if (includeLower) chars += lowerChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    if (chars.length === 0) {
      setPassword("");
      setStrength("TOO WEAK");
      return;
    }

    let generated = "";
    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }
    setPassword(generated);
    updateStrength(generated);
  };

  const updateStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 10) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 2) setStrength("TOO WEAK");
    else if (score <= 3) setStrength("WEAK");
    else if (score <= 4) setStrength("MEDIUM");
    else setStrength("STRONG");
  };

  const getBars = () => {
    if (strength === "TOO WEAK") return [{ color: "#F64A4A" }, {}, {}, {}];
    if (strength === "WEAK")
      return [{ color: "#FB7C58" }, { color: "#FB7C58" }, {}, {}];
    if (strength === "MEDIUM")
      return [
        { color: "#F8CD65" },
        { color: "#F8CD65" },
        { color: "#F8CD65" },
        {},
      ];
    if (strength === "STRONG")
      return [
        { color: "#A4FFAF" },
        { color: "#A4FFAF" },
        { color: "#A4FFAF" },
        { color: "#A4FFAF" },
      ];
  };

  const bars = getBars();

  return (
    <>
      <header className="flex items-center justify-center text-[#817D92] text-[16px] font-bold font-['JetBrains-Mono'] transform translate-x-[10px] translate-y-[-29px]">
        Password Generator
      </header>

      <div className="flex flex-col items-center bg-[#24232C] p-[8px] text-[24px]">
        <div className="flex justify-between items-center w-full px-4">
          <span className="break-all">{password || "YourPassword"}</span>
          <img className="icon" src={Icon} alt="icon" />
        </div>
      </div>

      <div className="container flex flex-col item-center bg-[#24232C] mt-[25px] p-[6px] gap-[30px]">
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
            onChange={(e) => setValue(Number(e.target.value))}
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
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
            />
            <span>Include Uppercase Letters</span>
          </div>
          <div className="flex flex-row justify-center gap-[20px]">
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
            />
            <span>Include Lowercase Letters</span>
          </div>
          <div className="flex flex-row justify-center gap-[20px] ml-[-94px]">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <span>Include Numbers</span>
          </div>
          <div className="flex flex-row justify-center gap-[20px] ml-[-93px]">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <span>Include Symbols</span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#18171F] p-[17px] ">
          <span className="text-[#817D92] text-[16px] font-bold font-['JetBrains-Mono']">
            STRENGTH
          </span>

          <div className="flex items-center gap-[6px] bg-[#18171F]">
            <span className="text-[#E6E5EA] text-[18px] font-bold font-['JetBrains-Mono']">
              {strength}
            </span>
            <div className="flex gap-[8px] cursor-pointer">
              {bars.map((bar, i) => (
                <div
                  key={i}
                  className="w-[10px] h-[28px] border border-[#E6E5EA]"
                  style={{
                    backgroundColor: bar.color || "transparent",
                    borderColor: bar.color || "#E6E5EA",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={generatePassword}
            className="w-full py-[13px] bg-[#a4ffaf] text-[#24232c] font-bold text-[18px] leading-[100%]"
          >
            GENERATE
          </button>
          <img
            className="absolute right-[20px] top-1/2 -translate-y-1/2"
            src={Arrow}
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
