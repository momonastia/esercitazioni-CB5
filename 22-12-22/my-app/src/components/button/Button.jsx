import "./button.css";

export function Button(props) {
  console.log("props di Button:", props);

  const { variant = "none", ...otherAttributes } = props;

  return (
    <button
      className={`Button Button--variant-${variant}`}
      {...otherAttributes}
    ></button>
  );
}
