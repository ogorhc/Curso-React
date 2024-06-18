import { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({ id, name, sprites = {} }) => {
  const { front_default, back_default } = sprites;
  const divRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = divRef.current.getBoundingClientRect();
    setBoxSize({
      width,
      height,
    });
  }, [id]);
  return (
    <section style={{ height: 200 }}>
      <h2>
        #{id} - {name}
      </h2>
      <div ref={divRef}>
        <img className='' src={front_default} alt='' />
        <img src={back_default} alt='' />
        <p>
          Width {boxSize.width} - Height {boxSize.height}
        </p>
      </div>
    </section>
  );
};
