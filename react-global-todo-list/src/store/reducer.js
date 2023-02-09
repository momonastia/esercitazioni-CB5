const mainReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_TODO_FROM_LIST":
      /*  console.log(state); */
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case "SET_TODO_ITEM":
      /* console.log(state); */
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, status: !todo.status };
          }
          return todo;
        }),
      };
    case "ADD_TODO_ITEM":
      /*   console.log(state); */
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};

export default mainReducer;
