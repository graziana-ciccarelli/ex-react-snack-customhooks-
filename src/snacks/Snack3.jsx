import React from 'react';
import useCustomPointer from '../hooks/useCustomPointer'; 
function Snack3() {
  const customPointer = useCustomPointer("🔥"); // Cursore personalizzato con emoji della fiamma

  return (
    <div>
      <h2>Snack 3: useCustomPointer</h2>
      <p>Sposta il mouse per vedere il cursore personalizzato</p>
      {customPointer} {/* Visualizza il cursore personalizzato */}
    </div>
  );
}

export default Snack3;
