import React from "react";

const Home: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div>
          <h1>Architecting Intelligence for Modern Organizations</h1>
          <p className="subtitle">
            BI optimization, Private AI strategy, and data‑driven advisory for teams that need
            clarity, speed, and scalable insight.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary">Book a Strategy Call</button>
            <button className="btn-secondary">Explore Services</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="grid-orbit">
            <span className="grid-orbit-dot" />
            <span className="grid-orbit-dot" />
            <span className="grid-orbit-dot" />
          </div>
          <p className="hero-visual-caption">
            Location intelligence, energy capacity, and AI‑ready infrastructure—visualized.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Home;
