import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  (): void => {}
]);

export default ThemeContext;
