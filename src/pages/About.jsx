import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-cinematic-page">
      <div className="about-web about-web-one" />
      <div className="about-web about-web-two" />

      <section className="about-hero">
        <div>
          <div className="about-pill">
            <span>✦</span>
            THE STORY BEHIND POLICY DECODER
          </div>

          <p className="cinematic-eyebrow">WHY WE BUILT THIS</p>

          <h1>
            Most people don't reject claims.
            <span>Fine print does.</span>
          </h1>

          <p className="about-lead">
            Insurance policies are written to protect both sides, but the
            language can make it difficult for ordinary people to understand
            what they're actually buying.
          </p>
        </div>

        <div className="about-symbol">
          <div className="about-symbol-ring ring-one" />
          <div className="about-symbol-ring ring-two" />
          <div className="about-spider">✦</div>
          <span className="symbol-label">SEE THE FINE PRINT</span>
        </div>
      </section>

      <section className="about-problem">
        <div className="about-section-label">01 / THE PROBLEM</div>

        <div className="about-problem-grid">
          <h2>
            Insurance shouldn't feel like
            <span>a legal puzzle.</span>
          </h2>

          <div>
            <p>
              Important information is often buried inside pages of formal
              language, exclusions, conditions and waiting periods.
            </p>

            <p>
              When something goes wrong, knowing that information beforehand
              can make a huge difference.
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-section-label">02 / OUR APPROACH</div>

        <div className="principle-grid">
          <article className="principle-card">
            <span>01</span>
            <div className="principle-icon">Aa</div>
            <h3>Plain English</h3>
            <p>
              We turn complicated insurance language into explanations that
              are easier to understand.
            </p>
          </article>

          <article className="principle-card">
            <span>02</span>
            <div className="principle-icon">!</div>
            <h3>Spot the Risk</h3>
            <p>
              Exclusions, waiting periods and claim conditions are brought
              into focus instead of hiding in the fine print.
            </p>
          </article>

          <article className="principle-card">
            <span>03</span>
            <div className="principle-icon">◇</div>
            <h3>Stay Grounded</h3>
            <p>
              Policy Decoder explains the text provided to it and avoids
              inventing clauses that aren't actually there.
            </p>
          </article>

          <article className="principle-card">
            <span>04</span>
            <div className="principle-icon">⌁</div>
            <h3>Understand First</h3>
            <p>
              The goal isn't to tell you what to buy. It's to help you
              understand what you already have.
            </p>
          </article>
        </div>
      </section>

      <section className="about-how">
        <div className="about-section-label">03 / UNDER THE HOOD</div>

        <div className="about-how-grid">
          <div>
            <h2>
              Your policy goes in.
              <span>Clarity comes out.</span>
            </h2>

            <p>
              Policy Decoder combines document extraction with AI-powered
              analysis to identify important parts of your policy and explain
              them in a more accessible format.
            </p>

            <p>
              You can also describe a real-world scenario and ask how the
              policy language may relate to it.
            </p>
          </div>

          <div className="architecture-card">
            <div className="architecture-node node-input">
              <span>01</span>
              <strong>YOUR POLICY</strong>
              <small>PDF / TXT / TEXT</small>
            </div>

            <div className="architecture-line" />

            <div className="architecture-node node-ai">
              <span>02</span>
              <strong>AI ANALYSIS</strong>
              <small>CLAUSES · CONDITIONS · RISKS</small>
            </div>

            <div className="architecture-line" />

            <div className="architecture-node node-output">
              <span>03</span>
              <strong>PLAIN ENGLISH</strong>
              <small>INSIGHTS YOU CAN UNDERSTAND</small>
            </div>
          </div>
        </div>
      </section>

      <section className="about-trust">
        <div className="trust-mark">✦</div>

        <div>
          <span className="about-section-label">04 / A NOTE ON TRUST</span>
          <h2>Clarity is not legal advice.</h2>
          <p>
            Policy Decoder is designed as an educational tool to help you
            understand policy language. Always check your actual policy
            documents and consult the insurer or a qualified professional when
            you need a definitive interpretation.
          </p>
        </div>
      </section>

      <section className="about-final-cta">
        <p className="cinematic-eyebrow">READY?</p>
        <h2>
          Put your policy
          <span>under the microscope.</span>
        </h2>

        <Link to="/decode" className="cinematic-primary">
          Decode My Policy
          <span className="button-arrow">→</span>
        </Link>
      </section>
    </main>
  );
}

export default About;