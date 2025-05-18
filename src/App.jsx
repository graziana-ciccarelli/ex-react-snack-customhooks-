import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Snack1 from "./snacks/Snack1";  
import Snack2 from "./snacks/Snack2";


function App() {
  return (
    <div>
      <h1>Snack Router</h1>
      <nav>
        {/* Link per navigare tra i "snack" */}
        <Link to="/snack-1">Snack 1</Link> |{" "}
        <Link to="/snack-2">Snack 2</Link> |{" "}
        <Link to="/snack-3">Snack 3</Link> |{" "}
      </nav>
      <hr />
      <Routes>
        {/* Routing per Snack1 e Snack2 */}
        <Route path="/snack-1" element={<Snack1 />} />
        <Route path="/snack-2" element={<Snack2 />} />
        
        {/* Questo è il fallback quando nessuna route è corrispondente */}
        <Route path="*" element={<p>Seleziona uno snack dal menu</p>} />
      </Routes>
    </div>
  );
}

export default App;
