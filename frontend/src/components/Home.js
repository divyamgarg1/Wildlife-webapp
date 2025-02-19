import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Wildlife Research Platform</h1>
            <p>Digitizing field datasheets for efficient research and conservation.</p>
            <div className="home-buttons">
                <Link to="/upload" className="btn">Upload Datasheet</Link>
                <Link to="/analytics" className="btn">View Analytics</Link>
                <Link to="/about" className="btn">About</Link>
                <Link to="/team" className="btn">Our Team</Link>
            </div>
        </div>
    );
}

export default Home;
