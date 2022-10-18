import { Link } from "react-router-dom";
import "./error.scss";

function ErrorPage() {
  return (
    <div className="main-error">
      <h1 className="errorMessage">Error 404 page</h1>
      <Link to="/random-quote-machine/" className="goBack-button">
        Go Back
      </Link>
    </div>
  );
}

export default ErrorPage;
