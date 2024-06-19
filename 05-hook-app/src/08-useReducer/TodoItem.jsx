export const TodoItem = ({ id, description, done, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span onClick={() => onToggleTodo(id)} className={`${done && 'text-decoration-line-through'} align-self-center`}>
        {description}
      </span>
      <button onClick={() => onDeleteTodo(id)} className='btn btn-danger'>
        Borrar
      </button>
    </li>
  );
};
