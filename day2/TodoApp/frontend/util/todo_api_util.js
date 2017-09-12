const APIUtil = function APIUtil() {
  return $.ajax({
    method: "GET",
    url: "./api/todos"
  });
};

export default APIUtil;
