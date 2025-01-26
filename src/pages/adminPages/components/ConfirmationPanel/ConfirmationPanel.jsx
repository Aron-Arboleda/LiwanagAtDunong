import { StandardButton } from "@components/Buttons/Buttons";
import { CartoonyContainer } from "@components/CardContainers/CardContainers";
import { DarkBackgroundContainer } from "@components/LargeContainers/LargeContainers";
import "./ConfirmationPanel.css";
import { FlexLayoutColumn } from "@components/Layouts/Layouts";

const ConfirmationPanel = ({
  confirmationTitle,
  confirmationDescription,
  onConfirm,
  onCancel,
  variant = "normal",
}) => {
  const handleConfirm = () => {
    onConfirm();
    onCancel();
  };

  return (
    <>
      {open && (
        <DarkBackgroundContainer style={{ alignItems: "center" }}>
          <div>
            <CartoonyContainer
              style={{
                maxWidth: "500px",
                minHeight: "100px",
                margin: "0 1rem",
                padding: "1rem",
              }}
              handleClose={onCancel}
            >
              <FlexLayoutColumn>
                <h2>{confirmationTitle}</h2>
                <p>{confirmationDescription}</p>
                <div className="confirmationButtons">
                  <StandardButton
                    onClick={handleConfirm}
                    buttonText="Yes"
                    variant={variant}
                  />
                  <StandardButton onClick={onCancel} buttonText="Cancel" />
                </div>
              </FlexLayoutColumn>
            </CartoonyContainer>
          </div>
        </DarkBackgroundContainer>
      )}
    </>
  );
};

export default ConfirmationPanel;
