import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Episode from "./components/Episode";

// Import episode data
import Episode1 from "./EpisodeData/Episode1.json";
import Episode2 from "./EpisodeData/Episode2.json";

const App = () => {
  // useEffect(() => {
  //   // Redirect to the default route when the component mounts
  //   if (window.location.pathname !== "/menu") {
  //     window.location.href = "/menu";
  //   }
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/episode/1" element={<Episode episodeData={Episode1} />} />
        <Route path="/episode/2" element={<Episode episodeData={Episode2} />} />
      </Routes>
    </Router>
  );
};

export default App;
