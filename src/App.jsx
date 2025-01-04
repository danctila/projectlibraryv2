import { ScrollProvider } from "./Context/ScrollContext";
import { ThemeProvider } from "./Context/ThemeContext";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}
