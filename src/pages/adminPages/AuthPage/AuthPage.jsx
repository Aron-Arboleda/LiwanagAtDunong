import { CartoonyContainer } from "@components/CardContainers/CardContainers";
import { DarkBackgroundContainer } from "@components/LargeContainers/LargeContainers";
import AuthForm from "../components/AuthForm/AuthForm";
import { fields } from "./fields";

const AuthPage = () => {
  const formSubmit = async (data) => {
    console.log("Form submitted:", data);
    return true;
  };

  return (
    <DarkBackgroundContainer style={{ alignItems: "center", padding: "2rem" }}>
      <div>
        <CartoonyContainer
          style={{
            maxWidth: "500px",
            minHeight: "200px",
            margin: "0 1rem",
          }}
        >
          <AuthForm fields={fields} formSubmit={formSubmit} />
        </CartoonyContainer>
      </div>
    </DarkBackgroundContainer>
  );
};

export default AuthPage;
