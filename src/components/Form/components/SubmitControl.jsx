import { SubmitButton } from "./CustomFormComponents";
import CircularProgress from "@mui/material/CircularProgress";

const SubmitControl = ({ isSubmitting }) => {
  return (
    <div className="flex-center">
      <SubmitButton
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <CircularProgress
              size={20}
              style={{ marginRight: "10px", color: "black" }}
            />
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </SubmitButton>
    </div>
  );
};

export default SubmitControl;
