import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

function App() {
  return (
    <Router>
      <ChakraProvider value={system}>
        <AppRoutes />
      </ChakraProvider>
    </Router>
  );
}

export default App;
