import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      setCoords(coords);
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h2>Usuario ya existe</h2>
      {JSON.stringify(coords)}
    </>
  );
};
