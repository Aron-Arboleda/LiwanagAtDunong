import { CartoonyContainer } from "@components/CardContainers/CardContainers";
import { DarkBackgroundContainer } from "@components/LargeContainers/LargeContainers";
import AuthForm from "../components/AuthForm/AuthForm";
import { fields } from "./fields";
import "./AuthPage.css";
import { loginUser } from "@controllers/admins";
import AuthContext from "@contexts/AuthContext";
import { useContext } from "react";
import { showActionDoneMessage } from "../components/DataTable/DataTable";
import { ToastContainer } from "react-toastify";
import LogOut from "lucide-react/dist/esm/icons/log-out";

const AuthPage = () => {
  const { login } = useContext(AuthContext);

  const formSubmit = async (data) => {
    const result = await loginUser(data);
    if (result.success) {
      login(result.user);
      console.log("Message: ", result.message);
      showActionDoneMessage(result.message, result.success);
      return true;
    } else {
      showActionDoneMessage(result.message, result.success);
      return false;
    }
  };

  return (
    <DarkBackgroundContainer style={{ alignItems: "center", padding: "0rem" }}>
      <div>
        <CartoonyContainer
          style={{
            maxWidth: "500px",
            minHeight: "200px",
          }}
        >
          <h1 className="authTitle">Admin Login</h1>
          <AuthForm fields={fields} formSubmit={formSubmit} />
          <div className="linksContainer">
            <a href="/">
              Go to Website <LogOut size={20} className="icon" />{" "}
            </a>
          </div>
        </CartoonyContainer>
      </div>
      <ToastContainer />
    </DarkBackgroundContainer>
  );
};

export default AuthPage;
