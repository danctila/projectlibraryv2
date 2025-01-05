import { useParams } from "react-router-dom";
import ProjectDetailNavigation from "../../components/navigation/ProjectDetailNavigation";

export default function ProjectDetail() {
  const { projectId } = useParams();

  // In a real app, fetch or load the project data by ID here.
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-2">Project Detail</h1>
      <p>Showing details for project: {projectId}</p>
      {/* Add images, video, description, etc. */}
    </div>
  );
}
