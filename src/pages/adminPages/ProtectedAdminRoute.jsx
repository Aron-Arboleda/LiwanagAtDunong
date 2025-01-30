import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONFIG } from "@controllers/config";
import AuthContext from "@contexts/AuthContext";
import LoadingPage from "@pages/morePages/LoadingPage/LoadingPage";

const ProtectedAdminRoute = ({ children }) => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
        console.log("Session check response:", data);

        if (data.loggedIn) {
          console.log("Checked session. User is logged in");
          setUser(data.user);
        } else {
          setUser(null);
          navigate("/admin-auth"); // Redirect to login if not logged in
        }
      } catch (error) {
        console.error("Session check failed:", error);
        setUser(null);
        navigate("/admin-auth");
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [navigate, setUser]);

  if (loading) {
    return <LoadingPage />; // Show loading screen while checking session
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
