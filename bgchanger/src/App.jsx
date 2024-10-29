import { useState } from "react";
function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen flex items-end justify-center p-4 transition-all "
        style={{ backgroundColor: color }}
      >
        <div className="bg-teal-400 p-4 w-full flex justify-center items-center">
          <div className="flex justify-center items-center gap-4 ">
            <button
              className="outline-none shadow-lg rounded-full px-4 py-2 text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none shadow-lg rounded-full px-4 py-2 text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none shadow-lg rounded-full px-4 py-2 text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none shadow-lg rounded-full px-4 py-2 text-white"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
