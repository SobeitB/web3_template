'use client';

import { useCounter } from '../model';

export const CounterZustand = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <br />
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
