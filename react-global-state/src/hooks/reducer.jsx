const initialState = { count: 0 };

function reducer(state, action) {
  /* state reffers to initialState */
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export { reducer, initialState };
