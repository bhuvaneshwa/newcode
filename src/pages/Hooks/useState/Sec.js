import React, { useRef, useEffect, useState } from 'react';

const CounterComponent = () => {
  const counterRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Log the current value of the counterRef
    console.log('Counter Ref:', counterRef.current);
  }, [count]); // Run the effect whenever the 'count' state changes

  const incrementCounter = () => {
    // Update the ref and state
    counterRef.current += 1;
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Counter Value (State): {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default CounterComponent;