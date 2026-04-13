import React from "react";

export const App: React.FC = () => {
  return (
    <div className="page" id="top">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Camir Consulting</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div>
            <h1>Architecting Intelligence for Modern Organizations</h1>
            <p className="subtitle">
              BI optimization, Private AI strategy, and data‑driven advisory for teams that need
              clarity, speed, and scalable insight.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary">Book a Strategy Call</button>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </button>
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

      <main>
        {/* What I Do */}
        <section className="section" id="what-i-do">
          <h2>Clarity. Intelligence. Impact.</h2>
          <p className="section-lead">
            I help organizations transform their data, analytics, and AI capabilities into
            operational advantage. Whether you’re optimizing Power BI, deploying Private AI, or
            evaluating energy capacity for AI infrastructure, I bring the technical depth and
            strategic clarity to move you forward.
          </p>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <h2>Core Services</h2>
          <div className="cards-grid">
            <article className="card">
              <h3>BI Optimization &amp; Technical Troubleshooting</h3>
              <p>
                Performance tuning, DAX optimization, composite modeling, Direct Lake architecture,
                and workspace governance that eliminates bottlenecks and accelerates insight.
              </p>
            </article>
            <article className="card">
              <h3>AI/LLM Advisory &amp; Private AI for SMBs</h3>
              <p>
                Use‑case discovery, prompt engineering frameworks, Private AI deployment planning,
                and governance models that keep your data secure and your teams empowered.
              </p>
            </article>
            <article className="card">
              <h3>Strategic Advisory for Public Finance &amp; Operations</h3>
              <p>
                Financial modeling, policy interpretation, operational risk assessment, and
                executive‑ready synthesis for leaders who need clarity and direction.
              </p>
            </article>
            <article className="card">
              <h3>AI Data Center Locator</h3>
              <p>
                Location intelligence, energy‑capacity modeling, regulatory landscape analysis, and
                site‑selection scoring for organizations planning AI infrastructure.
              </p>
            </article>
          </div>
          <div className="section-cta">
            <button className="btn-secondary">View All Services</button>
          </div>
        </section>

        {/* Why Clients Work With Me */}
        <section className="section" id="why-me">
          <h2>Why Clients Work With Me</h2>
          <div className="cards-grid">
            <article className="card">
              <h3>Systems Thinker</h3>
              <p>
                I connect technical, operational, and financial layers into a unified strategy that
                actually works in practice.
              </p>
            </article>
            <article className="card">
              <h3>Technical Powerhouse</h3>
              <p>
                Deep expertise in Power BI, Fabric, DAX, composite modeling, and performance
                optimization for demanding environments.
              </p>
            </article>
            <article className="card">
              <h3>AI‑Forward</h3>
              <p>
                I help SMBs adopt AI responsibly, affordably, and with measurable ROI—without
                over‑engineering or overspending.
              </p>
            </article>
            <article className="card">
              <h3>Governance‑Driven</h3>
              <p>
                Clear policies, access models, and operational frameworks that scale with your
                organization and reduce risk.
              </p>
            </article>
          </div>
        </section>

        {/* Case Study */}
        <section className="section" id="case-studies">
          <h2>Featured Case Study</h2>
          <article className="case-study">
            <h3>Modernizing BI for a Public Finance Team</h3>
            <p>
              <strong>Challenge:</strong> A public finance team struggled with slow BI refreshes and
              unclear data lineage.
            </p>
            <p>
              <strong>Solution:</strong> Rebuilt composite models, implemented workspace governance,
              and automated schema validation.
            </p>
            <p>
              <strong>Outcome:</strong> 60% faster refreshes, 40% fewer support tickets, and a
              governance model adopted across departments.
            </p>
            <button className="btn-secondary">Read More Case Studies</button>
          </article>
        </section>

        {/* Insights */}
        <section className="section" id="insights">
          <h2>Insights</h2>
          <div className="cards-grid">
            <article className="card">
              <h3>How SMBs Can Deploy Private AI Without Breaking Their Budget</h3>
              <p>
                A practical lens on scoping, prioritizing, and deploying Private AI in stages that
                match your reality.
              </p>
            </article>
            <article className="card">
              <h3>The Hidden Costs of Poor BI Governance</h3>
              <p>
                Why access sprawl, unclear ownership, and ad‑hoc workspaces quietly erode trust and
                performance.
              </p>
            </article>
            <article className="card">
              <h3>Energy Capacity: The New Frontier of AI Infrastructure</h3>
              <p>
                How energy constraints, grid dynamics, and location intelligence shape sustainable
                AI infrastructure decisions.
              </p>
            </article>
            <article className="card">
              <h3>Prompt Engineering for Executives</h3>
              <p>
                A concise guide to using language models as a thinking partner for strategy, not
                just content.
              </p>
            </article>
          </div>
          <div className="section-cta">
            <button className="btn-secondary">Explore Insights</button>
          </div>
        </section>

        {/* Contact */}
        <section className="section section-accent" id="contact">
          <h2>Let’s Build Something Intelligent</h2>
          <p className="section-lead">
            If your organization is ready for clarity, speed, and scalable intelligence, let’s talk.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@company.com" required />
              </label>
            </div>
            <div className="form-row">
              <label className="full-width">
                Organization
                <input type="text" name="organization" placeholder="Organization name" />
              </label>
            </div>
            <div className="form-row">
              <label className="full-width">
                What challenge are you trying to solve?
                <textarea
                  name="challenge"
                  placeholder="Describe your current BI, AI, or infrastructure challenge..."
                  rows={4}
                  required
                />
              </label>
            </div>
            <button className="btn-primary" type="submit">
              Schedule a Consultation
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Camir Consulting — Architecting Intelligence</p>
        <div className="footer-links">
          <a href="#top">Back to top</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};
