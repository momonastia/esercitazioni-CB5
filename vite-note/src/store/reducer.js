const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE":
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    case "SET_USER_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    case "CLEAR_USER_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          username: "",
        },
      };
    default:
      return state;
  }
};

export { mainReducer };
