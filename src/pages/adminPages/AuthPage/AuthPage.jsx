import { CartoonyContainer } from "@components/CardContainers/CardContainers";
import { DarkBackgroundContainer } from "@components/LargeContainers/LargeContainers";
import AuthForm from "../components/AuthForm/AuthForm";
import { fields } from "./fields";
import "./AuthPage.css";

const AuthPage = () => {
  const formSubmit = async (data) => {
    console.log("Form submitted:", data);
    return true;
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
        </CartoonyContainer>
      </div>
    </DarkBackgroundContainer>
  );
};

export default AuthPage;
