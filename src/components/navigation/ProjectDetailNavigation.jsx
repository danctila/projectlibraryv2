import { useNavigate, useLocation } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch";

const ProjectDetailNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    const from = location.state?.from || "/"; // Provide a default value

    if (from.includes("#projects")) {
      navigate("/"); // Navigate to root first
      setTimeout(() => {
        const projectsSection = document.querySelector("#projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(from); // Navigate to whatever path was stored
    }
  };

  return (
    <nav className="top-0 left-0 w-full z-60 bg-[#FBFBFB] dark:bg-[#262329] flex items-center justify-between px-6 py-4">
      <p className="font-neue font-bold italic dark:text-[#8A34F9] text-[#6E07F3] text-[32px]">
        Dylan Anctil
      </p>
      <div className="flex flex-col items-center space-y-2 tablet:flex-row tablet:space-y-0 tablet:space-x-9 mb-0 pb-0 ">
        <button
          onClick={handleBackClick}
          className="text-black dark:text-white text-[20px] font-regular focus:outline-none hover:underline"
          aria-label="Back to Projects"
        >
          Back
        </button>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default ProjectDetailNavigation;
