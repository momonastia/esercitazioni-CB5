import "./ComponentSelector.css";
import { useEffect, useRef } from "react";

export function ComponentSelector(props) {
  const { selectChangeHandler } = props;

  /* Использование useRef для доступа к элементам DOM так как querySelector не работает в React */

  const selectRef = useRef();

  useEffect(() => {
    if (selectRef.current) {
      const selectEl = selectRef.current;
      console.log("useRef hook example: ", selectEl?.getBoundingClientRect?.());
    }
  }, [selectRef]);

  return (
    <form>
      <select
        ref={selectRef}
        className="select-input"
        defaultValue={""}
        onChange={selectChangeHandler}
      >
        <option disabled value="">
          Select a component to render
        </option>
        <option value="blood">Blood</option>
        <option value="card">Card</option>
        <option value="bank">Bank</option>
        <option value="beer">Beer</option>
        <option value="counter">Counter</option>
      </select>
    </form>
  );
}
