import { Link } from "react-router-dom";

export default function BlogSection() {
  // Optionally show a couple featured blog posts
  return (
    <section className="p-4">
      <h1 className="text-2xl">Blog Section</h1>
      <p>Here you could show a featured blog post snippet.</p>

      {/* A link to the main blog page */}
      <Link to="/blog" className="text-blue-600 underline">
        See All Blogs
      </Link>
    </section>
  );
}
