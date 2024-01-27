import React from "react";
import { useMemo, useState } from "react";
export default function Memo({ data }) {
  const [inputValue, setInputValue] = useState(" ");

  const expensiveCalculation = (data) => {
    console.log("Performing calculation");
    return data.toUpperCase();
  };

  const memoizedResult = useMemo(
    () => expensiveCalculation(inputValue),
    [inputValue]
  );
  return (
    <div>
      <label>
        data
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <p>Original data: {inputValue}</p>
      <p>Memoized result: {memoizedResult}</p>
    </div>
  );
}
