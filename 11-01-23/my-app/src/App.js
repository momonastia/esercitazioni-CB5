import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { BloodType } from "./fetch/components/blood-types/BloodType";
import { Card } from "./fetch/components/cards/Card";
import { Bank } from "./fetch/components/banks/Bank";
import { Beer } from "./fetch/components/beers/Beer";

function App() {
  return (
    <div className="App">
      <BloodType />
      <Card />
      <Bank />
      <Beer />
    </div>
  );
}

export default App;
