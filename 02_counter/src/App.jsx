import { useState } from "react";
import "./App.css";

function App() {
  let [counter, useCounter] = useState(1);
  const addValue = () => {
    if (counter >= 20) {
      useCounter(counter);
    } else {
      useCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter <= 0) {
      useCounter(counter);
    } else {
      useCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Welcome</h1>
      <p>counter value:- {counter} </p>
      <button onClick={addValue}>Add </button>
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
