const allTodos = (state) => {
  const todoKeys = Object.keys(state.todos);

  return todoKeys.map((key) => {
    return state.todos[key];
  });
};

export default allTodos;
