import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="notfound-cinematic-page">
      <div className="notfound-web" />
      <div className="notfound-glow" />

      <section className="notfound-content">
        <div className="notfound-code">404</div>

        <div className="notfound-line">
          <span />
          WEB NOT FOUND
          <span />
        </div>

        <h1>
          This page
          <span>got away.</span>
        </h1>

        <p>
          Looks like you've swung into a web that doesn't exist. Let's get you
          back somewhere useful.
        </p>

        <Link to="/" className="cinematic-primary">
          Back to Home
          <span className="button-arrow">→</span>
        </Link>
      </section>
    </main>
  );
}

export default NotFound;