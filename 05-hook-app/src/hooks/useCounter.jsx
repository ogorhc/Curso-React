import { useState } from 'react';

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const decrement = (value = 1) => {
    if (counter <= 0) return;
    setCounter(counter - value);
  };
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    decrement,
    increment,
    reset,
  };
};
