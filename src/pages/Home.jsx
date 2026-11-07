import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page cinematic-home">
      {/* Background web atmosphere */}
      <div className="web-bg web-bg-left" />
      <div className="web-bg web-bg-right" />
      <div className="red-glow red-glow-one" />
      <div className="red-glow red-glow-two" />

      {/* NAV / HERO */}
      <section className="cinematic-hero">
        <div className="hero-grid-overlay" />

        <div className="cinematic-content">
          <div className="hero-status">
            <span className="status-dot" />
            <span>DECODE. UNDERSTAND. CLAIM WITH CONFIDENCE.</span>
          </div>

          <p className="cinematic-eyebrow">
            YOUR FRIENDLY NEIGHBOURHOOD POLICY DECODER
          </p>

          <h1 className="cinematic-title">
            Insurance fine print
            <span>decoded.</span>
          </h1>

          <p className="cinematic-description">
            Upload or paste your insurance policy and let our AI break down
            complex language into simple, clear insights.
          </p>

          <div className="cinematic-actions">
            <Link to="/decode" className="cinematic-primary">
              <span className="button-icon">↥</span>
              Decode My Policy
              <span className="button-arrow">→</span>
            </Link>

            <a href="#how-it-works" className="cinematic-secondary">
              <span className="play-icon">▶</span>
              Learn More
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

          <div className="spider-emblem">
            <div className="spider-body">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="hero-moon" />

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

          <div className="web-line web-line-one" />
          <div className="web-line web-line-two" />
          <div className="web-line web-line-three" />
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="feature-cards-section">
        <div className="feature-card feature-red">
          <div className="feature-icon">▣</div>
          <div>
            <h3>Simplified Insights</h3>
            <p>Get plain-language summaries.</p>
          </div>
        </div>

        <div className="feature-card feature-blue">
          <div className="feature-icon">◇</div>
          <div>
            <h3>Know Your Rights</h3>
            <p>Understand coverage and exclusions.</p>
          </div>
        </div>

        <div className="feature-card feature-purple">
          <div className="feature-icon">ϟ</div>
          <div>
            <h3>Make Informed Decisions</h3>
            <p>With clarity, not confusion.</p>
          </div>
        </div>

        <div className="feature-card feature-orange">
          <div className="feature-icon">♢</div>
          <div>
            <h3>Secure & Reliable</h3>
            <p>Your policy stays private.</p>
          </div>
        </div>
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
            <h3>Drop your policy</h3>
            <p>
              Upload a PDF or paste the text of your insurance policy.
            </p>
          </article>

          <article className="cinematic-step">
            <div className="step-number">02</div>
            <div className="step-line" />
            <h3>We decode it</h3>
            <p>
              Complex insurance language becomes simple, understandable
              explanations.
            </p>
          </article>

          <article className="cinematic-step">
            <div className="step-number">03</div>
            <div className="step-line" />
            <h3>Spot the danger</h3>
            <p>
              Exclusions, waiting periods and claim conditions get flagged
              before they surprise you.
            </p>
          </article>
        </div>

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