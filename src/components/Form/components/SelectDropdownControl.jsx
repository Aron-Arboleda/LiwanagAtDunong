import FormControl from "@mui/material/FormControl";
import { CustomInputLabel, CustomSelect } from "./CustomFormComponents";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

const SelectDropdownControl = ({ field, errors, defaultValues, register }) => {
  return (
    <FormControl sx={{ width: "100%" }} error={!!errors[field.name]}>
      <CustomInputLabel
        id="demo-simple-select-helper-label"
        sx={{ fontFamily: "Montserrat", fontSize: "0.85rem" }}
      >
        {field.placeholder || "Select an option"}
      </CustomInputLabel>
      <CustomSelect
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        fullWidth
        defaultValue={
          defaultValues?.defaultValues
            ? defaultValues.defaultValues[field.name] ?? ""
            : ""
        }
        {...register(field.name, {
          required: field.required ? `${field.label} is required` : false,
        })}
        error={!!errors[field.name]}
        label={field.placeholder}
      >
        {field.options.map((option, idx) => (
          <MenuItem key={idx} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
      <FormHelperText sx={{ fontFamily: "Montserrat" }}>
        {errors[field.name] ? errors[field.name].message : field.description}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectDropdownControl;
