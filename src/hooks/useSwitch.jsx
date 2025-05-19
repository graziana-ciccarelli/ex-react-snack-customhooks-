import { useState } from "react";

function useSwitch(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);

  return [value, toggle]; // Restituiamo il valore e la funzione toggle
}

export default useSwitch;
