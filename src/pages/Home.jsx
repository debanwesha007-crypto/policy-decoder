import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="web-decoration web-one" />
        <div className="web-decoration web-two" />

        <div className="hero-content">
          <div className="sense-badge">
            <span className="sense-dot" />
            SPIDEY-SENSE ONLINE
          </div>

          <p className="eyebrow">YOUR FRIENDLY NEIGHBOURHOOD</p>

          <h1>
            Insurance fine print
            <span>decoded.</span>
          </h1>

          <p className="hero-copy">
            Paste or upload your insurance policy. We'll turn confusing
            clauses into plain English and flag the fine print that could
            affect your claim.
          </p>

          <div className="hero-actions">
            <Link to="/decode" className="primary-button">
              Decode my policy
              <span>→</span>
            </Link>

            <a href="#how-it-works" className="secondary-button">
              How it works
            </a>
          </div>

          <div className="hero-note">
            <span>⚡</span>
            No fine print can hide from you.
          </div>
        </div>

        <div className="hero-visual">
            <img
  src="/images/spidey-hero.png"
  alt="Web hero"
  className="hero-spidey"
/>
          <div className="spider-circle">
            <div className="spider-symbol">🕷</div>

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>

          <div className="floating-card card-top">
            <span>⚠</span>
            <div>
              <strong>EXCLUSION FOUND</strong>
              <small>Room rent capped</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span>✓</span>
            <div>
              <strong>PLAIN ENGLISH</strong>
              <small>Coverage explained</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div>
          <strong>01</strong>
          <span>Upload or paste</span>
        </div>

        <div>
          <strong>02</strong>
          <span>AI reads the fine print</span>
        </div>

        <div>
          <strong>03</strong>
          <span>See what could affect your claim</span>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <p className="eyebrow">HOW IT WORKS</p>

        <h2>
          Your policy.
          <br />
          <span>Our Spidey-Sense.</span>
        </h2>

        <div className="feature-grid">
          <article>
            <div className="feature-number">01</div>
            <h3>Drop your policy</h3>
            <p>
              Upload a PDF or paste the text of your insurance policy.
            </p>
          </article>

          <article>
            <div className="feature-number">02</div>
            <h3>We decode it</h3>
            <p>
              Complex insurance language becomes simple, understandable
              explanations.
            </p>
          </article>

          <article>
            <div className="feature-number">03</div>
            <h3>Spot the danger</h3>
            <p>
              Exclusions, waiting periods and claim conditions get flagged
              before they surprise you.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;