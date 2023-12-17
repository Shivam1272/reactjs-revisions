import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      generatedPassword += str.charAt(char);
    }
    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center text-orange-400 ">
      <div className="flex items-center justify-center flex-col bg-slate-700 w-2/3 rounded-xl p-2">
        <h1 className="text-white text-4xl">Password Generator</h1>
        <p className="mb-3">
          Generate a random password with the length of your choice.
        </p>
        <div className="flex shadow rounded-lg text-black overflow-hidden mb-4 w-4/5">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none px-2 shrink-0 bg-blue-500 shadow-md hover:bg-blue-400"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mb-3 text-orange-600">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length} </label>
          </div>
          <div className="flex items-center justify-between gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberAllowed"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center justify-between gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="charAllowed"
              onChange={() => setcharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
