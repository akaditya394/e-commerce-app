import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage/ContactPage";
import StorePage from "./pages/StorePage/StorePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import TheJourneyPage from "./pages/TheJourneyPage/TheJourneyPage";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<StorePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/thejourney" element={<TheJourneyPage />} />
    </Routes>
  );
}

export default App;
