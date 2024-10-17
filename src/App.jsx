import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import PizzaGrid from "./components/PizzaGrid";

function App() { 

  return (
    <div className="container">
      <Header />
      <Menu/>
      <PizzaGrid/>
    </div>
  );
}
export default App
