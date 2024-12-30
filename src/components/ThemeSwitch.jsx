import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
}
