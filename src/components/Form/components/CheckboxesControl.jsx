import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Grid2 from "@mui/material/Grid2";
import {
  CustomCheckbox,
  CustomFormControlLabel,
  ErrorMessage,
} from "./CustomFormComponents";
import { Callout } from "@components/CustomComponents/CustomComponents";

const CheckboxesControl = ({ checkboxes, errors, isSubmitted, register }) => {
  return (
    <FormControl
      component="fieldset"
      sx={{ width: "100%", marginBottom: "1rem" }}
    >
      <FormGroup>
        {checkboxes.disclaimerText && (
          <Callout variant="note">
            <strong>Notice:</strong> {checkboxes.disclaimerText}
          </Callout>
        )}
        <Grid2 container spacing={2}>
          {checkboxes.items.map((item, index) => (
            <div key={index}>
              <CustomFormControlLabel
                error={isSubmitted ? errors[item.name] : undefined}
                control={
                  <CustomCheckbox
                    {...register(item.name, {
                      required: item.required
                        ? `${item.label} is required`
                        : false,
                    })}
                    error={isSubmitted ? errors[item.name] : undefined}
                  />
                }
                label={item.text}
              />
              {isSubmitted && errors[item.name] && (
                <ErrorMessage>{errors[item.name].message}</ErrorMessage>
              )}
            </div>
          ))}
        </Grid2>
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxesControl;
