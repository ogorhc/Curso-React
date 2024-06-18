import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  return (
    <>
      <h1>Información de Pokemón</h1>
      <hr />
      {isLoading ? <LoadingMessage /> : <PokemonCard {...data} />}

      <button onClick={() => (counter > 1 ? decrement() : null)} className='btn btn-primary mt-2'>
        Anterior
      </button>
      <button onClick={() => increment()} className='btn btn-primary mt-2'>
        Siguiente
      </button>
    </>
  );
};
