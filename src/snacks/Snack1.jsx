import React from "react";
import useSwitch from "../hooks/useSwitch";


function Snack1() {
  const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h2>Snack 1: useSwitch</h2>
      <p>Il valore è: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}

export default Snack1;
