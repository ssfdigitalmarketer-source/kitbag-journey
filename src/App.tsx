import { Routes, Route } from "react-router";
import Home from "./pages/home";
import PlayerPage from "./pages/playerPage";
import Services from "./pages/services";
import { usePlayerStore } from "./store/usePlayerStore";
import { useEffect } from "react";

const App = () => {
  const fetchPlayers = usePlayerStore(s => s.fetchPlayers);
  const loaded = usePlayerStore(s => s.loaded);

  useEffect(() => {
    if (!loaded) fetchPlayers();
    console.log(loaded);
    
  }, [loaded]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/players/:slug" element={<PlayerPage />} />

      </Routes>
    </>
  )
}

export default App
