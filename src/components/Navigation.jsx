import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div>
        {/* Link to Home, which has the fullpage sections */}
        <Link to="/" className="mr-4">
          Home
        </Link>
        {/* Link to the Blog index page */}
        <Link to="/blog" className="mr-4">
          Blog
        </Link>
      </div>

      {/* Toggle Theme */}
      <ThemeSwitch />
    </nav>
  );
}
