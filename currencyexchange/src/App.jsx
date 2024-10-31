import { useState } from "react";
import { InputCard } from "./components/";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd"); // Default to "usd" for demonstration
  const [to, setTo] = useState("dae");
  const [converted, setConverted] = useState(0);

  // Fetch currency info based on `from`
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  console.log("Currency Options:", options); // Debug: Check what options are passed

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConverted(amount);
    setAmount(converted);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConverted(amount * currencyInfo[to]);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <InputCard
            label="From"
            amount={amount}
            currencyOptions={options} // Pass dynamic currency options
            onAmountChange={(value) => setAmount(value)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
          />
          <InputCard
            label="To"
            amount={converted}
            currencyOptions={options} // Pass dynamic currency options
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisable
          />
        </div>
        <div>
          <button onClick={convert}>
            Convert {from} to {to}
          </button>
          <button onClick={swap}>Swap</button>
        </div>
      </div>
    </>
  );
}

export default App;
