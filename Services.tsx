import React from "react";

const Services: React.FC = () => {
  return (
    <section className="section">
      <h2>Core Services</h2>

      <div className="cards-grid">
        <article className="card">
          <h3>BI Optimization & Technical Troubleshooting</h3>
          <p>
            Performance tuning, DAX optimization, composite modeling, Direct Lake architecture,
            and workspace governance.
          </p>
        </article>

        <article className="card">
          <h3>AI/LLM Advisory & Private AI for SMBs</h3>
          <p>
            Use‑case discovery, prompt engineering frameworks, Private AI deployment planning,
            and governance models.
          </p>
        </article>

        <article className="card">
          <h3>Strategic Advisory for Public Finance</h3>
          <p>
            Financial modeling, policy interpretation, operational risk assessment, and
            executive‑ready synthesis.
          </p>
        </article>

        <article className="card">
          <h3>AI Data Center Locator</h3>
          <p>
            Location intelligence, energy‑capacity modeling, regulatory analysis, and
            site‑selection scoring.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
