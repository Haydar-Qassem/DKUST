import { Provider } from "react-redux";
import ThemeProvider from "./Theme/ThemeProvider";
import store from "../store";

function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}

export default AppProviders;
