import { Link } from "react-router-dom";

export default function ProjectsSection() {
  // Example data for projects
  const projects = [
    { id: "1", title: "Project One" },
    { id: "2", title: "Project Two" },
    { id: "3", title: "Project Three" },
  ];

  return (
    <section className="p-4">
      <h1 className="text-2xl">Projects Section</h1>
      <p>This is a carousel of projects (simplified here).</p>
      <div className="mt-4 flex space-x-4">
        {projects.map((proj) => (
          <div key={proj.id} className="border p-2">
            <h2>{proj.title}</h2>
            <Link
              to={`/projects/${proj.id}`}
              className="text-blue-600 underline"
            >
              See Full
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
