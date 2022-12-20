export function Button() {
  const log = () => {
    console.log("Hello World");
  };

  return (
    <button
      aria-label="Click me for show a console log"
      className="btn"
      onClick={log}
    >
      Click me!
    </button>
  );
}
