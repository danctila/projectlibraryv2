import ThemeSwitch from "./ThemeSwitch";
import scrollToSection from "../utils/scrollToSection";

export default function Navigation() {
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 p-4 flex items-center justify-between">
      <button onClick={() => scrollToSection("profile")}>Profile</button>
      <button onClick={() => scrollToSection("projects")}>Projects</button>
      <button onClick={() => scrollToSection("blog")}>Blog</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
      <ThemeSwitch />
    </nav>
  );
}
