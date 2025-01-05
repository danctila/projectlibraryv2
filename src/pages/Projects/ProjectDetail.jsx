import { useParams } from "react-router-dom";
import { projectDetailsMap } from "./ProjectDetailRoutes";
import NotFound from "../NotFound";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const ProjectDetailComponent = projectDetailsMap[projectId];

  if (!ProjectDetailComponent) {
    return <NotFound />; // Fallback for invalid project IDs
  }

  return <ProjectDetailComponent />;
};
