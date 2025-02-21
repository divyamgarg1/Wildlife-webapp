import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h1>About the Platform</h1>
            <p>
                This cloud-based platform helps wildlife researchers store, manage, and analyze field datasheets.
                Using AWS EC2, RDS, and S3, we provide a scalable, secure, and efficient solution.
            </p>
        </div>
    );
}

export default About;
