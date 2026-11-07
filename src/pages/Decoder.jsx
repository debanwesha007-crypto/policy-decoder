import { useState } from "react";
import UploadBox from "../components/UploadBox";

function Decoder() {
  const [policyText, setPolicyText] = useState("");
  const [scenario, setScenario] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!policyText.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/decode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          policyText,
          scenario,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResult(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Could not analyze the policy.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPolicyText("");
    setScenario("");
    setResult(null);
    setError("");
  };
  const handleCopyResults = async () => {
  if (!result) return;

  const text = [
    `Policy Type: ${result.policyType || "Insurance Policy"}`,
    "",
    `Summary: ${result.summary || "No summary available."}`,
    "",
    "What's Covered:",
    ...(result.covered || []).map(
      (item) => `- ${item.item}: ${item.plain}`
    ),
    "",
    "Exclusions:",
    ...(result.exclusions || []).map(
      (item) =>
        `- ${item.clause} [${item.severity || "low"}]: ${item.plain}`
    ),
    "",
    "Waiting Periods:",
    ...(result.waitingPeriods || []).map(
      (item) => `- ${item.what}: ${item.duration}`
    ),
    "",
    "Conditions:",
    ...(result.conditions || []).map(
      (item) => `- ${item.clause}: ${item.plain}`
    ),
    "",
    scenario && result.scenarioVerdict
      ? `Scenario Verdict: ${result.scenarioVerdict.likely}\n${result.scenarioVerdict.why}`
      : "",
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    alert("Decoded results copied to clipboard!");
  } catch (error) {
    console.error(error);
    alert("Could not copy the results.");
  }
};

  return (
    <main className="decoder-cinematic-page">
      <div className="decoder-web-glow decoder-glow-one" />
      <div className="decoder-web-glow decoder-glow-two" />

      <section className="decoder-cinematic-header">
        <div>
          <div className="decoder-live-pill">
            <span />
            SPIDEY-SENSE SCANNER
          </div>

          <p className="cinematic-eyebrow">POLICY ANALYSIS SYSTEM</p>

          <h1>
            See what your policy
            <span>is really saying.</span>
          </h1>

          <p>
            Upload your policy or paste the fine print. We'll scan it for
            exclusions, waiting periods, conditions and claim risks.
          </p>
        </div>

        <div className={loading ? "scanner-core scanning" : "scanner-core"}>
          <div className="scanner-ring scanner-ring-one" />
          <div className="scanner-ring scanner-ring-two" />
          <div className="scanner-ring scanner-ring-three" />

          <div className="scanner-center">
            <span>{loading ? "◌" : "✦"}</span>
            <strong>{loading ? "SCANNING" : "READY"}</strong>
            <small>
              {loading ? "Reading fine print..." : "Awaiting policy"}
            </small>
          </div>
        </div>
      </section>

      <section className="decoder-workspace-cinematic">
        <div className="decoder-input-panel">
          <div className="panel-heading">
            <div>
              <span className="panel-label">01 / POLICY</span>
              <h2>Drop your policy</h2>
            </div>

            <span className="panel-status">PDF · TXT</span>
          </div>

          <UploadBox
            policyText={policyText}
            setPolicyText={setPolicyText}
          />

          <div className="scenario-panel">
            <div className="scenario-heading">
              <div>
                <span className="panel-label">02 / SCENARIO</span>
                <h3>Test a claim situation</h3>
              </div>

              <span className="optional-tag">OPTIONAL</span>
            </div>

            <textarea
              value={scenario}
              onChange={(event) => setScenario(event.target.value)}
              placeholder="Example: I had knee surgery 8 months after buying the policy. Would this likely be covered?"
              rows={5}
            />

            <div className="scenario-hint">
              <span>⚡</span>
              Ask the policy a real-world question.
            </div>
          </div>

          <div className="decoder-action-row">
            <button
              className="cinematic-primary analyze-button"
              onClick={handleAnalyze}
              disabled={!policyText.trim() || loading}
            >
              <span>{loading ? "◌" : "⚡"}</span>
              {loading ? "Scanning policy..." : "Analyze policy"}
              <span className="button-arrow">→</span>
            </button>

            <button
              className="decoder-reset-button"
              onClick={handleReset}
              disabled={!policyText && !scenario && !result && !error}
            >
              Reset
            </button>
          </div>

          {error && (
            <div className="decoder-error">
              <div className="error-icon">!</div>
              <div>
                <strong>Spidey-Sense detected a problem</strong>
                <p>{error}</p>
              </div>
            </div>
          )}
        </div>

        <aside className="decoder-side-panel">
          <div className="side-panel-top">
            <span className="panel-label">WHAT WE LOOK FOR</span>
            <span className="signal-bars">
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>

          <div className="scan-feature danger">
            <div className="scan-icon">!</div>
            <div>
              <strong>Exclusions</strong>
              <p>What's explicitly not covered?</p>
            </div>
          </div>

          <div className="scan-feature waiting">
            <div className="scan-icon">◷</div>
            <div>
              <strong>Waiting periods</strong>
              <p>When does coverage actually begin?</p>
            </div>
          </div>

          <div className="scan-feature conditions">
            <div className="scan-icon">◇</div>
            <div>
              <strong>Claim conditions</strong>
              <p>What could make a claim fail?</p>
            </div>
          </div>

          <div className="scan-feature language">
            <div className="scan-icon">Aa</div>
            <div>
              <strong>Plain English</strong>
              <p>What does the legal language mean?</p>
            </div>
          </div>

          <div className="side-panel-note">
            <span>✦</span>
            <p>
              We only explain what is actually present in the policy. No
              invented clauses.
            </p>
          </div>
        </aside>
      </section>

      {result && (
        <section className="decoded-results">
          <div className="results-heading">
            <div>
              <span className="panel-label">03 / DECODE COMPLETE</span>
              <h2>Your policy, decoded.</h2>
            </div>

            <div className="risk-score">
              <small>RISK SCORE</small>
              <strong>{result.riskScore ?? "—"}</strong>
              <span>/100</span>
            </div>
            <button
  className="copy-results-button"
  onClick={handleCopyResults}
>
  ⧉ Copy Results
</button>
          </div>

          <div className="result-summary-card">
            <div className="summary-icon">✦</div>

            <div>
              <span className="result-label">
                {result.policyType || "INSURANCE POLICY"}
              </span>

              <p>{result.summary || "No summary available."}</p>
            </div>
          </div>

          <div className="result-grid">
            <div className="result-section">
              <div className="result-section-heading">
                <span className="result-section-icon covered">✓</span>
                <div>
                  <span>WHAT'S COVERED</span>
                  <h3>Coverage</h3>
                </div>
              </div>

              {result.covered?.length ? (
                result.covered.map((item, index) => (
                  <div className="result-item" key={index}>
                    <strong>{item.item}</strong>
                    <p>{item.plain}</p>
                  </div>
                ))
              ) : (
                <div className="empty-result">No coverage items found.</div>
              )}
            </div>

            <div className="result-section exclusion-section">
              <div className="result-section-heading">
                <span className="result-section-icon excluded">!</span>
                <div>
                  <span>WATCH OUT</span>
                  <h3>Exclusions</h3>
                </div>
              </div>

              {result.exclusions?.length ? (
                result.exclusions.map((item, index) => (
                  <div className="result-item" key={index}>
                    <div className="severity-row">
                      <strong>{item.clause}</strong>
                      <span
                        className={`severity severity-${item.severity || "low"}`}
                      >
                        {item.severity || "low"}
                      </span>
                    </div>
                    <p>{item.plain}</p>
                  </div>
                ))
              ) : (
                <div className="empty-result">
                  No exclusions were identified.
                </div>
              )}
            </div>

            <div className="result-section">
              <div className="result-section-heading">
                <span className="result-section-icon waiting">◷</span>
                <div>
                  <span>WHEN COVERAGE STARTS</span>
                  <h3>Waiting periods</h3>
                </div>
              </div>

              {result.waitingPeriods?.length ? (
                result.waitingPeriods.map((item, index) => (
                  <div className="result-item" key={index}>
                    <strong>{item.what}</strong>
                    <p>{item.duration}</p>
                  </div>
                ))
              ) : (
                <div className="empty-result">
                  No waiting periods identified.
                </div>
              )}
            </div>

            <div className="result-section">
              <div className="result-section-heading">
                <span className="result-section-icon conditions">◇</span>
                <div>
                  <span>READ CAREFULLY</span>
                  <h3>Conditions</h3>
                </div>
              </div>

              {result.conditions?.length ? (
                result.conditions.map((item, index) => (
                  <div className="result-item" key={index}>
                    <strong>{item.clause}</strong>
                    <p>{item.plain}</p>
                  </div>
                ))
              ) : (
                <div className="empty-result">
                  No additional conditions identified.
                </div>
              )}
            </div>
          </div>

          {result.scenarioVerdict && scenario && (
            <div className="scenario-verdict">
              <div className="verdict-header">
                <div>
                  <span className="panel-label">SCENARIO CHECK</span>
                  <h3>What would happen?</h3>
                </div>

                <span
                  className={`verdict-badge verdict-${result.scenarioVerdict.likely}`}
                >
                  {result.scenarioVerdict.likely}
                </span>
              </div>

              <p>{result.scenarioVerdict.why}</p>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default Decoder;