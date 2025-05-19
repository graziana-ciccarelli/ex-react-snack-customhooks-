import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Snack1 from "./snacks/Snack1";  
import Snack2 from "./snacks/Snack2";
import Snack3 from "./snacks/Snack3";


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
        <Route path="/snack-1" element={<Snack1 />} />
        <Route path="/snack-2" element={<Snack2 />} />
        <Route path="/snack-3" element={<Snack3 />} />
      </Routes>
    </div>
  );
}

export default App;
