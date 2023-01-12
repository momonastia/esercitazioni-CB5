import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { BloodType } from "./fetch/components/blood-types/BloodType";
import { Card } from "./fetch/components/cards/Card";
import { Bank } from "./fetch/components/banks/Bank";
import { Beer } from "./fetch/components/beers/Beer";
import { ComponentSelector } from "./fetch/components/componentselector/ComponentSelector";

function App() {
  const [componentToRender, setComponentToRender] = useState(`default`);
  const selectChangeHandler = (event) => {
    console.log({ event });
    setComponentToRender(event.target.value);
  };

  const DefaultComponent = () => <div>Nothing selected</div>;

  const ComponentMap = {
    blood: BloodType,
    beer: Beer,
    bank: Bank,
    card: Card,
    default: DefaultComponent,
  };

  const DynamicComponent = ComponentMap[componentToRender];

  return (
    <div className="App">
      <ComponentSelector selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />
    </div>
  );
}

export default App;
