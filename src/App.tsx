import { Routes,Route } from "react-router";
import Home from "./pages/home";
import PlayerPage from "./pages/playerPage";
import Services from "./pages/services";

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<PlayerPage />} />
      <Route path="/services" element={<Services />} />

    </Routes>
    </>
  )
}

export default App
