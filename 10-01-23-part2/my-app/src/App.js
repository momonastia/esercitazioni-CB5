import { useState } from "react";
import "./App.css";

function Lottery(props) {
  const [number, setNumber] = useState();
  const pickANumber = () => Math.round(Math.random() * 91);
  const [Str, setArr] = useState("");

  const lotteryButtonClick = (e) => {
    const newNumber = pickANumber();
    setArr(Str.concat(newNumber, " "));
    console.log(`hai cliccato sul lottery button, numeri estratti ${Str}!`);
  };

  return (
    <div>
      <h1>Lotteria</h1>
      <p>Numeri estratti: `{Str}`</p>
      <LotteryButton
        wasDraw={Number.isInteger(number)}
        clickHandler={lotteryButtonClick}
      />
    </div>
  );
}

function LotteryButton(props) {
  const { clickHandler, wasDraw, ...attributes } = props;

  console.log(clickHandler);

  return (
    <button /* disabled={!!wasDraw} */ onClick={clickHandler} {...attributes}>
      {!!wasDraw ? "Numero estratto" : "Clicca per estrarre un numero"}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Lottery />
    </div>
  );
}

export default App;
