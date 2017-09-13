export const getTodos = function getTodos() {
  return $.ajax({
    method: "GET",
    url: "./api/todos"
  });
};

export const postTodo = function postTodo(todo) {
  return $.ajax({
    method: "POST",
    data: {todo: todo},
    url: "./api/todos"
  });
};
