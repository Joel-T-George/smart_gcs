import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";

const ThemeUpdater = () => {
  const theme = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", theme.palette.primary.main);
    root.style.setProperty("--background-color", theme.palette.background.default);
    root.style.setProperty("--text-color", theme.palette.text.primary);
    root.style.setProperty("--paper-color", theme.palette.background.paper)
    console.log("CSS Variables Updated:", {
        primary: theme.palette.primary.main,
        background: theme.palette.background.default,
        text: theme.palette.text.primary,
        paper:theme.palette.background.paper
      });

  }, [theme]); // Update when theme changes

  return null; // No UI, just updates the styles
};

export default ThemeUpdater;
