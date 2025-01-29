import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { CustomFormLabel } from "./CustomFormComponents";
import {
  CustomRadio,
  CustomRadioGroup,
  CustomFormControlLabel,
} from "./CustomFormComponents";

const RadioButtonsControl = ({
  field,
  errors,
  defaultValues,
  isSubmitted,
  register,
}) => {
  return (
    <FormControl error={!!errors[field.name]} fullWidth>
      <CustomFormLabel>{field.label}</CustomFormLabel>
      <CustomRadioGroup
        {...register(field.name, {
          required: field.required ? `${field.label} is required` : false,
        })}
        error={!!errors[field.name]}
      >
        {field.options.map((option, idx) => (
          <CustomFormControlLabel
            key={idx}
            value={option.value}
            control={
              <CustomRadio
                {...register(field.name, {
                  required: field.required
                    ? `${field.label} is required`
                    : false,
                })}
                error={!!errors[field.name]}
              />
            }
            label={option.label}
            error={!!errors[field.name]}
          />
        ))}
      </CustomRadioGroup>
      <FormHelperText
        sx={{
          fontFamily: "Montserrat",
          marginLeft: "14px",
        }}
      >
        {errors[field.name] ? errors[field.name].message : field.description}
      </FormHelperText>
    </FormControl>
  );
};

export default RadioButtonsControl;
