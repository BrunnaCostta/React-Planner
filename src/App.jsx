import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/register/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/register/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
