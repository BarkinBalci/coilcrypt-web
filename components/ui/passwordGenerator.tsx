"use client";
import { useState, useEffect, useRef } from "react";
import { Icons } from "@/app/icons";

interface PasswordGeneratorProps {
  onPasswordChange: (newPassword: string) => void;
  defaultPassword?: string;
}

export function PasswordGenerator({
  onPasswordChange,
  defaultPassword = "", 
}: PasswordGeneratorProps) {
  const [password, setPassword] = useState(defaultPassword); 
  const [length, setLength] = useState(24);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [labelTexts, setLabelTexts] = useState({
    uppercase: "A-Z",
    lowercase: "a-z",
    numbers: "0-9",
    symbols: "!@#$%^&*",
  });

  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current && parentRef.current.offsetWidth > 700) {
        setLabelTexts({
          uppercase: "Uppercase (A-Z)",
          lowercase: "Lowercase (a-z)",
          numbers: "Numbers (0-9)",
          symbols: "Symbols (!@#$%^&*)",
        });
      } else {
        setLabelTexts({
          uppercase: "A-Z",
          lowercase: "a-z",
          numbers: "0-9",
          symbols: "!@#$%^&*",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generatePassword = () => {
    let charset = "";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*";

    if (!charset) {
      setPassword("");
      onPasswordChange("");
      return;
    }

    let newPassword = "";
    let array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      newPassword += charset[array[i] % charset.length];
    }

    setPassword(newPassword);
    onPasswordChange(newPassword);
  };

  const handlePasswordChange = () => {
    generatePassword();
  };

  return (
    <div className="space-y-4 w-full">
      <div>
        <div className="label">
          <span className="label-text">Password:</span>
        </div>
        <div className="join flex">
          <input
            type="text"
            className="input input-bordered w-full join-item"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              onPasswordChange(e.target.value); // update the parent component with the manually entered password
            }}
            maxLength={64}
          />
          <button
            className="btn btn-neutral join-item"
            onClick={generatePassword}
          >
            <Icons.refresh />
          </button>
        </div>
      </div>
      <div>
        <input
          id="slider"
          type="range"
          min="8"
          max="36"
          value={length}
          onChange={(e) => {
            setLength(Number(e.target.value));
            handlePasswordChange();
          }}
          className="range"
          step="1"
        />
        <div className="w-full flex justify-between text-xs px-2 pt-2">
          <span>8</span>
          <span>12</span>
          <span>16</span>
          <span>20</span>
          <span>24</span>
          <span>28</span>
          <span>32</span>
          <span>36</span>
        </div>
      </div>
      <div className="flex flex-row justify-between" ref={parentRef}>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">{labelTexts.uppercase}</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={useUppercase}
              onClick={() => {
                setUseUppercase(!useUppercase);
                handlePasswordChange();
              }}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">{labelTexts.lowercase}</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={useLowercase}
              onClick={() => {
                setUseLowercase(!useLowercase);
                handlePasswordChange();
              }}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">{labelTexts.numbers}</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={useNumbers}
              onClick={() => {
                setUseNumbers(!useNumbers);
                handlePasswordChange();
              }}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">{labelTexts.symbols}</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={useSymbols}
              onClick={() => {
                setUseSymbols(!useSymbols);
                handlePasswordChange();
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
