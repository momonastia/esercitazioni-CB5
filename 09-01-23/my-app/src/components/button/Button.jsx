import "./button.css";

export function Button(props) {
  const { variant, ...otherAttributes } = props;

  return (
    <button
      className={`Button Button--variant-${variant}`}
      {...otherAttributes}
    ></button>
  );
}
