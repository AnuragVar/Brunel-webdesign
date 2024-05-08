import "./App.css";
import Footer from "./components/UI/Footer";
import { Route, Routes } from "react-router";
import Register from "./components/UI/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="App py-1 font-manrope container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
