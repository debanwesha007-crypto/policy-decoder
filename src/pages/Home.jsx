import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page cinematic-home">
      {/* Animated atmosphere */}
      <div className="web-bg web-bg-left" />
      <div className="web-bg web-bg-right" />

      <div className="web-particle particle-one" />
      <div className="web-particle particle-two" />
      <div className="web-particle particle-three" />
      <div className="web-particle particle-four" />
      <div className="web-particle particle-five" />

      {/* HERO */}
      <section className="cinematic-hero">
        <div className="hero-grid-overlay" />

        <div className="cinematic-content">
          <div className="hero-status">
            <span className="status-dot" />
            <span>SPIDEY-SENSE ONLINE</span>
          </div>

          <p className="cinematic-eyebrow">
            YOUR FRIENDLY NEIGHBOURHOOD POLICY DECODER
          </p>

          <h1 className="cinematic-title">
            Insurance fine print
            <span>decoded.</span>
          </h1>

          <p className="cinematic-description">
            Upload or paste your insurance policy and let AI break down
            complicated language into simple, clear insights.
          </p>

          <div className="cinematic-actions">
            <Link to="/decode" className="cinematic-primary">
              <span className="button-icon">↥</span>
              Decode My Policy
              <span className="button-arrow">→</span>
            </Link>

            <a href="#how-it-works" className="cinematic-secondary">
              <span className="play-icon">▶</span>
              See How It Works
            </a>
          </div>

          <div className="hero-mini-note">
            <span>⚡</span>
            No fine print can hide from you.
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="cinematic-visual">
          <div className="city-glow" />

          <div className="hero-web-circle web-circle-one" />
          <div className="hero-web-circle web-circle-two" />

          {/* Swinging web */}
          <div className="swing-web">
            <span />
            <span />
            <span />
            <span />
          </div>

          {/* Existing Spider-Man asset */}
<div className="spidey-swing">
  <div className="character-glow" />

  <img
    src="/images/spidey-hero.png"
    alt="Spider-Man themed hero illustration"
    className="spidey-character"
  />
</div>

          {/* Floating insight */}
          <div className="hero-insight-card insight-card-one">
            <div className="insight-icon">✓</div>
            <div>
              <small>SPIDEY-SENSE</small>
              <strong>Clause detected</strong>
            </div>
          </div>

          {/* Floating risk */}
          <div className="hero-insight-card insight-card-two">
            <div className="insight-icon risk-icon">!</div>
            <div>
              <small>FINE PRINT</small>
              <strong>Risk found</strong>
            </div>
          </div>

          <div className="hero-moon" />

          {/* City */}
          <div className="city-silhouette">
            <span className="building building-one" />
            <span className="building building-two" />
            <span className="building building-three" />
            <span className="building building-four" />
            <span className="building building-five" />
            <span className="building building-six" />
            <span className="building building-seven" />
            <span className="building building-eight" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="feature-cards-section">
        <article className="feature-card feature-red">
          <div className="feature-icon">▣</div>

          <div>
            <h3>Simplified Insights</h3>
            <p>Get plain-language summaries without the insurance jargon.</p>
          </div>
        </article>

        <article className="feature-card feature-blue">
          <div className="feature-icon">◇</div>

          <div>
            <h3>Know Your Rights</h3>
            <p>Understand coverage, exclusions and important conditions.</p>
          </div>
        </article>

        <article className="feature-card feature-dark">
          <div className="feature-icon">ϟ</div>

          <div>
            <h3>Spot The Risk</h3>
            <p>Find clauses that could affect your future claims.</p>
          </div>
        </article>

        <article className="feature-card feature-red-dark">
          <div className="feature-icon">♢</div>

          <div>
            <h3>Secure & Reliable</h3>
            <p>Your policy analysis stays focused on what matters.</p>
          </div>
        </article>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section cinematic-how" id="how-it-works">
        <div className="section-heading">
          <p className="cinematic-eyebrow">HOW IT WORKS</p>

          <h2>
            Your policy.
            <span>Our Spidey-Sense.</span>
          </h2>

          <p>
            Three simple steps between you and understanding what your policy
            actually says.
          </p>
        </div>

        <div className="cinematic-steps">
          <article className="cinematic-step">
            <div className="step-number">01</div>

            <div className="step-line" />

            <div className="step-web">✦</div>

            <h3>Drop your policy</h3>

            <p>
              Upload a PDF or paste the text of your insurance policy.
            </p>
          </article>

          <article className="cinematic-step">
            <div className="step-number">02</div>

            <div className="step-line" />

            <div className="step-web">◎</div>

            <h3>We decode it</h3>

            <p>
              Complex insurance language becomes simple, understandable
              explanations.
            </p>
          </article>

          <article className="cinematic-step">
            <div className="step-number">03</div>

            <div className="step-line" />

            <div className="step-web">!</div>

            <h3>Spot the danger</h3>

            <p>
              Exclusions, waiting periods and claim conditions get flagged
              before they surprise you.
            </p>
          </article>
        </div>

        {/* FINAL CTA */}
        <div className="final-cta">
          <div>
            <span>READY TO SEE THROUGH THE FINE PRINT?</span>
            <h3>Decode your policy.</h3>
          </div>

          <Link to="/decode" className="cinematic-primary">
            Get Started
            <span className="button-arrow">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
