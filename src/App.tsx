import { Routes, Route } from "react-router";
import Home from "./pages/home";
import PlayerPage from "./pages/playerPage";
import Players from "./pages/players";
import Contact from "./pages/contact";
import Blogs from "./pages/blogs";
import { usePlayerStore } from "./store/usePlayerStore";
import { useBlogStore } from "./store/useBlogStore";
import { useEffect } from "react";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:slug" element={<PlayerPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />


      </Routes>
    </>
  )
}

export default App
