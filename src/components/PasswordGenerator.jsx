import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!#$%&'()*+-./:;<=>?@[\\]^_`{|}~";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // range 3 value select--->setSelectionRange used

    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      {/* Main Card */}
      <div className="w-full max-w-lg bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-800">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex mb-6">

          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Your password"
            className="flex-1 min-w-0 px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-l-lg outline-none focus:border-blue-500"
          />

          <button
            onClick={copyPasswordToClipboard}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg transition duration-200"
          >
            Copy
          </button>

        </div>

        {/* Length Section */}
        <div className="mb-6">

          <div className="flex justify-between items-center mb-3">

            <label className="text-gray-300 font-medium">
              Password Length
            </label>

            <span className="text-blue-400 font-bold text-lg">
              {length}
            </span>

          </div>

          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer accent-blue-500"
          />

        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">

          {/* Number Checkbox */}
          <label className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-750">

            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() =>
                setNumberAllowed((prev) => !prev)
              }
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />

            <span className="text-gray-300">
              Include Numbers
            </span>

          </label>

          {/* Special Character Checkbox */}
          <label className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg cursor-pointer">

            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() =>
                setCharAllowed((prev) => !prev)
              }
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />

            <span className="text-gray-300">
              Include Special Characters
            </span>

          </label>

        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition duration-200 shadow-lg"
        >
          Generate Password
        </button>

      </div>

    </div>
  );
}

export default PasswordGenerator;