import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import FacultyPage from "./pages/FacultyPage";
import Facilities from "./components/Facilities";
import FacilitiesDetailPage from "./pages/FacilitiesPage";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:name" element={<CoursePage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/:name" element={<FacilitiesDetailPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;