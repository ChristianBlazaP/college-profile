import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CoursePage from "./pages/CoursePage";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:name" element={<CoursePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;