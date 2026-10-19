import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be used within a ThemeProvider");
  else return theme;
};

export { useTheme };
