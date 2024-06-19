import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos || []));
  }, [todos]);

  const onNewTodo = (todo) => {
    dispatch({
      type: '[TODO] add todo',
      payload: todo,
    });
  };

  const onDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] delete todo',
      payload: { id },
    });
  };

  const onToggleTodo = (id) => {
    dispatch({
      type: '[TODO] toggle todo',
      payload: { id },
    });
  };
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
