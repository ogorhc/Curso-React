import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...');
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => {
    heavyStuff(counter);
  }, [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button onClick={() => increment(1)} className='btn btn-primary'>
        +1
      </button>
      <button onClick={() => setShow(!show)} className='btn btn-primary'>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
