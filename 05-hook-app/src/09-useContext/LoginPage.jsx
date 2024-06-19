import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <button
        onClick={() => {
          setUser({ id: 123, name: 'igor', email: 'igor@igor.com' });
        }}
        className='btn  btn-primary'
      >
        Establecer usuario
      </button>
    </>
  );
};
