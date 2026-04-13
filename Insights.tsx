import React from "react";

const Insights: React.FC = () => {
  return (
    <section className="section">
      <h2>Insights</h2>

      <div className="cards-grid">
        <article className="card">
          <h3>How SMBs Can Deploy Private AI</h3>
          <p>A practical guide to adopting Private AI affordably and responsibly.</p>
        </article>

        <article className="card">
          <h3>The Hidden Costs of Poor BI Governance</h3>
          <p>How access sprawl and unclear ownership erode trust and performance.</p>
        </article>

        <article className="card">
          <h3>Energy Capacity & AI Infrastructure</h3>
          <p>Why grid dynamics and location intelligence matter more than ever.</p>
        </article>
      </div>
    </section>
  );
};

export default Insights;
