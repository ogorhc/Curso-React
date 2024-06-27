import { useState } from 'react';
import { useGetTodoQuery } from './store/api';

export const TodoApp = () => {
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  const previousTodo = () => {
    if (todoId <= 1) return;
    setTodoId(todoId - 1);
  };
  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>
      <pre>{JSON.stringify(todo, null, 3)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'Done ' : 'Pending '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={previousTodo}>Previous Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
