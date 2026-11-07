import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1>404</h1>

      <p>This web leads nowhere.</p>

      <Link to="/">
        Back to safety →
      </Link>
    </main>
  );
}

export default NotFound;