import { useState } from "react";
import UploadBox from "../components/UploadBox";

function Decoder() {
  const [policyText, setPolicyText] = useState("");
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
          scenario: "",
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
    setResult(null);
    setError("");
  };

  return (
    <main className="decoder-page">
      <section className="decoder-header">
        <div>
          <p className="eyebrow">SPIDEY-SENSE</p>

          <h1>
            What does your policy
            <span>actually say?</span>
          </h1>

          <p>
            Upload your policy or paste the text below. We'll scan the fine
            print for exclusions, waiting periods and conditions.
          </p>
        </div>

        <img
  src="/images/spidey-decode.png"
  alt="Web hero"
  className="decoder-spidey"
/>
<div className="decoder-sense">
          <span>{loading ? "◌" : "⚡"}</span>
          <strong>{loading ? "Scanning..." : "Ready to scan"}</strong>
          <small>
            {loading
              ? "Spidey-Sense is reading the fine print."
              : "Fine print detected nowhere yet."}
          </small>
        </div>
      </section>

      <section className="decoder-workspace">
        <UploadBox
          policyText={policyText}
          setPolicyText={setPolicyText}
        />

        <div className="decoder-actions">
          <button
            className="primary-button"
            onClick={handleAnalyze}
            disabled={!policyText.trim() || loading}
          >
            {loading ? "Analyzing..." : "Analyze policy"}
            <span>→</span>
          </button>

          <button
            className="reset-button"
            onClick={handleReset}
            disabled={!policyText && !result && !error}
          >
            Reset
          </button>
        </div>

        {error && (
          <div className="status-message error">
            <strong>⚠ Spidey-Sense error</strong>
            <p>{error}</p>
          </div>
        )}

        {result && (
          <section className="results-panel">
            <img
  src="/images/spidey-results.png"
  alt="Web hero"
  className="results-spidey"
/>
            <p className="eyebrow">DECODE COMPLETE</p>
            <h2>{result.policyType || "Insurance Policy"}</h2>
            <p>{result.summary}</p>

            <div className="risk-card">
              <span>RISK SCORE</span>
              <strong>{result.riskScore ?? "—"}/100</strong>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default Decoder;