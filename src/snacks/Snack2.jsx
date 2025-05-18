import React from "react";
import useDate from "../hooks/useDate";

function Snack2() {
  const currentDate = useDate(); 

  return (
    <div>
      <h2>Snack 2: useDate</h2>
      <p>Data e ora attuali:</p>
      <p>{currentDate.toLocaleString()}</p> {/* visualizza la data formattata */}
    </div>
  );
}

export default Snack2;
