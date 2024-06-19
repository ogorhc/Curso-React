import { useForm } from '../hooks';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange } = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={onInputChange}
        value={description}
        type='text'
        name='description'
        className='form-control'
        placeholder='¿Qué hay que hacer?'
      />
      <button type='submit' className='btn btn-outline-primary mt-2'>
        Agregar
      </button>
    </form>
  );
};
