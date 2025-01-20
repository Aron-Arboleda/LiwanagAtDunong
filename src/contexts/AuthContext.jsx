import { CONFIG } from "@controllers/config";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    navigate("/admin");
  };

  const logout = async () => {
    try {
      await fetch(`${CONFIG.BACKEND_API}admin/accounts/logout.php`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      navigate("/admin-auth");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
