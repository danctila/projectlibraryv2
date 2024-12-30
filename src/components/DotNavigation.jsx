import scrollToSection from "../utils/scrollToSection";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function DotNavigation({ activeSection }) {
  return (
    <div className="absolute right-4 top-1/2 flex flex-col space-y-3 -translate-y-1/2 z-10">
      {sections.map(({ id }) => {
        // We'll give a highlight style if this is the active section
        const isActive = id === activeSection;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`
                w-3 h-3 rounded-full
                ${isActive ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-500"}
              `}
          >
            {/* No text, it's just a circle. Could be an SVG icon later. */}
          </button>
        );
      })}
    </div>
  );
}
