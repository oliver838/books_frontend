import { useState } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const theme = createTheme({
  fontFamily: "Inter, system-ui, sans-serif",
  primaryColor: "blue",
});

function Root() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{ ...theme, colorScheme: darkMode ? "dark" : "light" }}>
        <App darkMode={darkMode} toggleDark={toggleDark} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
