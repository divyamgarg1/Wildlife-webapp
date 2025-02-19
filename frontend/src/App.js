import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Upload from "./components/Upload";
import Analytics from "./components/Analytics";
import Team from "./components/Team";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </Router>
    );
}

export default App;
