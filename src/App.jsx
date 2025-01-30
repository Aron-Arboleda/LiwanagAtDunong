import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import { AuthProvider } from "@contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import GlobalMetaTags from "@components/GlobalMetaTags/GlobalMetaTags";

function App() {
  return (
    <HelmetProvider>
      <GlobalMetaTags />
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
