import React from "react";

function InputCard({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className="w-[90%] flex flex-col gap-4 p-2 bg-teal-400">
      <div className="flex justify-between items-center">
        <p>{label}</p>
        <p>Currency Type</p>
      </div>

      <div className="flex justify-between items-center">
        {/* Controlled input for amount */}
        <input
          type="number"
          min={0}
          value={amount}
          disabled={amountDisable}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            console.log("Amount changed:", newValue); // Debug: Log new amount
            onAmountChange && onAmountChange(newValue);
          }}
          className="p-2 rounded border border-gray-300" // Optional styling
        />

        {/* Controlled select for currency */}
        <select
          value={selectedCurrency}
          disabled={currencyDisable}
          onChange={(e) => {
            const newCurrency = e.target.value;
            console.log("Currency changed:", newCurrency); // Debug: Log selected currency
            onCurrencyChange && onCurrencyChange(newCurrency);
          }}
          className="p-2 rounded border border-gray-300"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputCard;
