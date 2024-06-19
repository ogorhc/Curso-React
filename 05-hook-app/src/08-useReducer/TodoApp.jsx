import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks';

export const TodoApp = () => {
  const { todos, todosCount, pendingTodosCount, onNewTodo, onDeleteTodo, onToggleTodo } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} onDeleteTodo={(id) => onDeleteTodo(id)} onToggleTodo={onToggleTodo} />
        </div>
        <div className='col-5'>
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
