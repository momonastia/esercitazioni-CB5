fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) =>
    users.forEach((user) =>
      console.log(
        "Name: " + user.name,
        "\n",
        user.address,
        "\n",
        "City: " + user.address.city
      )
    )
  )
  .catch((e) => console.log("error:" + e))
  .finally((f) => console.log("done"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) =>
    todos.map((todo) =>
      console.log("ID: " + todo.id, "\n", "Title: " + todo.title)
    )
  )
  .catch((e) => console.log("error:" + e))
  .finally((f) => console.log("done"));
