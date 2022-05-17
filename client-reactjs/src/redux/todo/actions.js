export const addTodo = (todo) => {
  return {
    type: 'todoList/addTodo',
    payload: todo,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId,
  };
};
