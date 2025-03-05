import AppProvider from "./providers";
import AppRouter from "@/routes";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
