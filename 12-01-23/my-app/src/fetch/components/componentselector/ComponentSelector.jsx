import "./ComponentSelector.css";

export function ComponentSelector(props) {
  const { selectChangeHandler } = props;

  return (
    <form>
      <select
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
      </select>
    </form>
  );
}
