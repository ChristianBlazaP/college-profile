import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import FacultyPage from "./pages/FacultyPage";
import Facilities from "./components/Facilities";
import FacilitiesDetailPage from "./pages/FacilitiesPage";
import Blog from "./pages/Blog";
import BlogPostAcademic from "./pages/BlogPostAcademic";
import BlogPostCampusUpdate from "./pages/BlogPostCampusUpdate";
import BlogPostAlumniSpotlight from "./pages/BlogPostAlumniSpotlight";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename="/college-profile/">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:name" element={<CoursePage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/:name" element={<FacilitiesDetailPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/academic-news" element={<BlogPostAcademic />} />
        <Route path="/blog/campus-update" element={<BlogPostCampusUpdate />} />
        <Route path="/blog/alumni-spotlight" element={<BlogPostAlumniSpotlight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;