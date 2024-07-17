import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [password, setPassword] = useState("");
  const [number, setnumber] = useState(true);
  const [char, setchar] = useState(true);
  const [uppercase, setUppercase] = useState(true);

  const passwordRef = useRef(null);

  function generatePassword(length) {
    const uppercase_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers_ = "0123456789";
    const specialChars_ = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = "";
    uppercase ? (allChars += uppercase_) : "";
    number ? (allChars += numbers_) : "";
    char ? (allChars += specialChars_) : "";

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    setPassword(password);
  }

  const passwordGenerator = useCallback(() => {
    generatePassword(length);
  }, [length, number, char, uppercase, setPassword]);

  const copyPassword = useCallback(() =>{
    passwordRef.current = "hello"
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);

  return (
    <div className="flex justify-center flex-col items-center ">
      <h1 className="text-5xl font-bold ">Password Generator</h1>

      <div className="form mt-10 bg-black w-auto p-5 rounded-lg">
        <div className="flex justify-center items-center space-x-1">
          <input
            placeholder="Password"
            type="text"
            className="h-10 w-72 bg-gray-500 p-2"
            value={password}
            ref={passwordRef}
            readOnly
            onChange={() => setPassword(password)}
          />
          <button
            className="p-2 w-24 bg-gray-500 hover:bg-gray-600"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div className="flex justify-center items-center mt-5 space-x-4">
          <div className="flex  items-center space-x-3">
            <input
              type="range"
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <span>Length {length}</span>
          </div>

          <div className="space-x-2">
            <input
              checked={number}
              onChange={() => {
                setnumber((prev) => !prev);
                passwordGenerator(length);
              }}
              type="checkbox"
            />
            <label>Include Numbers</label>
          </div>

          <div className=" space-x-2">
            <input
              type="checkbox"
              checked={char}
              onChange={() => {
                setchar((prev) => !prev);
                passwordGenerator(length);
              }}
            />

            <label>Include Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
