import { Link } from "react-router-dom";

export default function BlogIndex() {
  const blogs = [
    { id: "first-post", title: "My First Post" },
    { id: "cool-tips", title: "Some Cool Tips" },
    // ... more blog entries
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl">Blog Articles</h1>
      <ul className="mt-4 list-disc list-inside">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`} className="text-blue-600 underline">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
