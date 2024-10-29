import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzlkjhgfdsaqwertyuiop";
    if (numAllow) string += "1234567890";
    if (charAllow) string += "!@#$%^&*(){}[]|/.,:;";
    for (let i = 1; i <= count; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [count, numAllow, charAllow, setPassword]);
  const copyPass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [count, numAllow, charAllow, passwordGenerator]);
  return (
    <>
      <div className="w-full bg-slate-300 font-mono h-screen flex flex-col justify-center items-center gap-4 p-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Password Generator</h1>
        <div className=" flex w-[90%] flex-col gap-3 justify-around items-center bg-white shadow-lg p-4">
          <div className="w-[90%] sm:mb-4 flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="text"
              ref={passRef}
              readOnly
              value={password}
              placeholder="password"
              className="w-[90%] sm:w-72 text-[12px] sm:text-[18px] text-xl border-2 rounded-md border-teal-400 outline-none px-2 py-1"
            />
            <input
              type="button"
              onClick={copyPass}
              value="Copy"
              className="cursor-pointer bg-skyblue text-xl text-white px-2 py-1 rounded-md"
            />
          </div>
          <div className="w-full  flex flex-col  justify-center items-center gap-2 p-1 sm:flex-row sm:justify-center sm:items-center">
            <input
              className=" "
              type="range"
              min={8}
              max={20}
              value={count}
              onChange={(e) => setCount(e.target.value)}
              name=""
              id=""
            />
            <p>Length: {count}</p>

            <label htmlFor="numbers">
              <input
                type="checkbox"
                defaultChecked={numAllow}
                onChange={() => setnumAllow((prev) => !prev)}
                name="Numbers"
                id="numbers"
                className="mr-1"
              />
              Numbers
            </label>

            <label htmlFor="character">
              <input
                type="checkbox"
                defaultChecked={charAllow}
                onChange={() => setcharAllow((prev) => !prev)}
                name="Characters"
                id="character"
                className="mr-1"
              />
              Characters
            </label>
          </div>
        </div>
        <div className="text-[14px] sm:text-base">
          <p>
            © 2024{" "}
            <a
              href="https://www.pushkarniraula.com.np"
              target="_blank"
              className="text-sky-500"
            >
              Pushkar Niraula
            </a>
            . All rights reserved.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default App;
