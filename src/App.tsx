import { Routes, Route } from "react-router";
import Home from "./pages/home";
import PlayerPage from "./pages/playerPage";
import { usePlayerStore } from "./store/usePlayerStore";
import { useEffect } from "react";

const App = () => {
  const fetchPlayers = usePlayerStore(s => s.fetchPlayers);
  const loaded = usePlayerStore(s => s.loaded);

  useEffect(() => {
    if (!loaded) fetchPlayers();
    
  }, [loaded]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players/:slug" element={<PlayerPage />} />

      </Routes>
    </>
  )
}

export default App
