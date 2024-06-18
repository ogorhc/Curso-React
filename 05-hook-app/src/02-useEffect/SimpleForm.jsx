import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'ogor',
    email: 'ogor@ogor.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log('useEffect component!');
  }, []);

  useEffect(() => {
    console.log('useEffect formState!');
  }, [formState]);

  useEffect(() => {
    console.log('useEffect email!');
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        onChange={onInputChange}
        type='text'
        className='form-control'
        placeholder='username'
        name='username'
        value={username}
      />
      <input
        onChange={onInputChange}
        type='email'
        className='form-control mt-2'
        placeholder='email'
        name='email'
        value={email}
      />
      {username == 'ogor' && <Message />}
    </>
  );
};
