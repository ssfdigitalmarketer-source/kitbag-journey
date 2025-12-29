import { Routes,Route } from "react-router";
import Home from "./pages/home";
import PlayerPage from "./pages/playerPage";

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<PlayerPage />} />

    </Routes>
    </>
  )
}

export default App
