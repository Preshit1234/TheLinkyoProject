import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./pages/landing-page"
import BrowseDrops from "./pages/browse-drops"
import CreateDrop from "./pages/create-drop"

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/signup" element={<LandingPage />} />
          <Route exact path="/" element={<BrowseDrops />} />
          <Route path="/drop/create" element={<CreateDrop />} />
          <Route path="/drops/66365cef95fe9aa17af89b07" element={<CreateDrop />} />
        </Routes>
        </Router>
  );
}

export default App;
