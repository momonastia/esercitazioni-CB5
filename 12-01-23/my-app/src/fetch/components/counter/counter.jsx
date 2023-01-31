import "./counter.css";
import { useCounter } from "../../../hooks/use-counter";

export function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <section className={"Counter"}>
      <h2>Counter</h2>
      <div>
        <button className="btn-refresh" onClick={decrement}>
          -1
        </button>
        <output>{count}</output>
        <button className="btn-refresh" onClick={increment}>
          +1
        </button>
      </div>
      <button className="btn-refresh" onClick={reset}>
        Reset
      </button>
    </section>
  );
}
