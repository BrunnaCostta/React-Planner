import React from "react";
import Tasks from "./components/tasks";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#14151D]">
      <Header />
      <main className="flex-grow">
        <Tasks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
