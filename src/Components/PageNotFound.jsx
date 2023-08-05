import "../Styles/PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="notFound-container">
      <h1>Page Not found</h1>
      <p>
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site
      </p>
      <Link to="/" className="back-to-site">
        Back to our site
      </Link>
    </div>
  );
}
