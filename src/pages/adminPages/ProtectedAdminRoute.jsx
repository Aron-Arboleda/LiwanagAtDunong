// ProtectedRoute.jsx
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CONFIG } from "@controllers/config";
import AuthContext from "@contexts/AuthContext";

const ProtectedAdminRoute = ({ children }) => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(
          `${CONFIG.BACKEND_API}admin/accounts/session_check.php`,
          {
            credentials: "include",
          }
        );
        const data = await response.json();

        if (data.loggedIn === true) {
          console.log("Checked session. User is logged in");
          setUser(data.user);
        } else {
          setUser(null);
          navigate("/admin-auth"); // Redirect to login if not logged in
        }
      } catch (error) {
        console.error("Session check failed:", error);
        setUser(null);
        //navigate("/"); // Redirect to login on error
      }
    };

    checkSession();
  }, [navigate, setUser]);

  return children;
};

export default ProtectedAdminRoute;
