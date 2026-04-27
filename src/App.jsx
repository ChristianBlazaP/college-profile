import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import FacultyPage from "./pages/FacultyPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import AutomotiveDetailPage from "./pages/AutomotiveDetailPage";
import WorkshopDetailPage from "./pages/WorkshopDetailPage";
import LabDetailPage from "./pages/LabDetailPage";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:name" element={<CoursePage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/facilities/automotive" element={<AutomotiveDetailPage />} />
        <Route path="/facilities/workshop" element={<WorkshopDetailPage />} />
        <Route path="/facilities/lab" element={<LabDetailPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;