import React from "react";
import Calendar from "./components/Calendar/Calendar";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Calendar />
      <Cards />
    </div>
  );
}

export default App;
