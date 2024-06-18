import { useForm } from '../hooks/useForm';

export const FormwithCustomHook = () => {
  const { onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        onChange={onInputChange}
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
      />
      <input
        onChange={onInputChange}
        type='email'
        className='form-control mt-2'
        placeholder='Email'
        name='email'
        value={email}
      />
      <input
        onChange={onInputChange}
        type='password'
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={password}
      />
      <button onClick={onResetForm} className='btn btn-danger mt-2'>
        Borrar
      </button>
    </>
  );
};
