import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { SavedJobProvider } from "./context/SavedJobsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <SavedJobProvider>
          <AppRoutes />
        </SavedJobProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
