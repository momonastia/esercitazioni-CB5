const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO_ITEM":
      console.log(state);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default mainReducer;
