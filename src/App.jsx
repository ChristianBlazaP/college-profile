import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import FacultyPage from "./pages/FacultyPage";
import FacilitiesPage from "./pages/FacilitiesPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:name" element={<CoursePage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;