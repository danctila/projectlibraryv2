import { ThemeProvider } from "./Context/ThemeContext";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter className="hide-scrollbar" />
    </ThemeProvider>
  );
}
