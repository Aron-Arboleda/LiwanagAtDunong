import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
