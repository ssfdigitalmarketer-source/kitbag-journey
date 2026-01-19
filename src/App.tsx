import { Routes, Route } from "react-router";
import Home from "./pages/home";
import PlayerPage from "./pages/playerPage";
import Players from "./pages/players";
import Contact from "./pages/contact";
import { usePlayerStore } from "./store/usePlayerStore";
import { useEffect } from "react";

const App = () => {
  const fetchPlayers = usePlayerStore(s => s.fetchPlayers);
  const loaded = usePlayerStore(s => s.loaded);
  
  useEffect(() => {
    if (!loaded) {
      fetchPlayers();
    }
  }, [loaded, fetchPlayers]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players/>} />
        <Route path="/players/:slug" element={<PlayerPage />} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </>
  )
}

export default App
