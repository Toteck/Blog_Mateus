import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import theme from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
