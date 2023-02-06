import { Fragment, useReducer, useContext } from "react";
import { reducer, initialState } from "../hooks/reducer";
import { TitleContext } from "../App.jsx";
import React from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  /* dispatch reffers to action parameter of ruducer function in the file reducer.jsx  */

  return (
    <Fragment>
      <TitleContext.Consumer>
        {(title) => <h1>{title}</h1>}
      </TitleContext.Consumer>
      <div className={styles.Counter}>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        {state.count}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </Fragment>
  );
};

export default Counter;
