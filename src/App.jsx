import { Routes, Route } from "react-router";
import Home from "./pages/home";
import PlayerPage from "./pages/playerPage";
import Players from "./pages/players";
import Contact from "./pages/contact";
import Blogs from "./pages/blogs";
import Blog from "./pages/blog";
import { usePlayerStore } from "./store/usePlayerStore";
import { useBlogStore } from "./store/useBlogStore";
import { useEffect } from "react";
import About from "./pages/about";
import AtheleteManagement from "./pages/service pages/atheleteManagement";
import SocialMedia from "./pages/service pages/socialMedia";
import EventManagement from "./pages/service pages/eventManagement";
import LegalConsultancy from "./pages/service pages/legalConsultancy";
import ITServices from "./pages/service pages/itServices";
import ScrollToTop from "./components/ScrollToTop";
import AthleteContact from "./pages/athleteContact";
import Careers from "./pages/careers";


const App = () => {
  const fetchPlayers = usePlayerStore(s => s.fetchPlayers);
  const playersLoaded = usePlayerStore(s => s.loaded);

  const fetchBlogs = useBlogStore(s => s.fetchBlogs);
  const blogsLoaded = useBlogStore(s => s.loaded);

  useEffect(() => {
    if (!playersLoaded) {
      fetchPlayers();
    }
  }, [playersLoaded, fetchPlayers]);

  useEffect(() => {
    if (!blogsLoaded) {
      fetchBlogs();
    }
  }, [blogsLoaded, fetchBlogs]);

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:slug" element={<PlayerPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/athlete-management" element={<AtheleteManagement />} />
        <Route path="/social-media&pr" element={<SocialMedia />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/legal-consultancy" element={<LegalConsultancy />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/athlete-contact" element={<AthleteContact />} />
        <Route path="/careers" element={<Careers/>} />
        

      </Routes>
    </>
  )
}

export default App
