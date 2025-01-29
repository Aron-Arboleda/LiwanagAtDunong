import { CustomTextField } from "./CustomFormComponents";
import IconButton from "@mui/material/IconButton";
import Eye from "lucide-react/dist/esm/icons/eye";
import EyeOff from "lucide-react/dist/esm/icons/eye-off";
import { useState } from "react";

const TextFieldControl = ({ field, errors, register }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <CustomTextField
      label={field.label}
      variant={field.variant || "outlined"}
      disabled={field.disabled || false}
      defaultValue={field.defaultValue || ""}
      fullWidth
      type={
        field.type === "date"
          ? "date"
          : field.type === "password" && !showPassword
          ? "password"
          : "text"
      }
      onWheel={(e) => field.type === "number" && e.target.blur()}
      multiline={field.multiline || false}
      rows={field.rows || 1}
      placeholder={field.placeholder || ""}
      slotProps={{
        inputLabel: field.type === "date" ? { shrink: true } : undefined,
        input: {
          endAdornment: field.type === "password" && (
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </IconButton>
          ),
        },
      }}
      {...register(field.name, {
        required: field.required ? `${field.label} is required` : false,
        maxLength: field.maxLength
          ? {
              value: field.maxLength.value,
              message: field.maxLength.message,
            }
          : undefined,
        min: field.min
          ? {
              value: field.min.value,
              message: field.min.message,
            }
          : undefined,
        max: field.max
          ? {
              value: field.max.value,
              message: field.max.message,
            }
          : undefined,
        pattern: field.pattern
          ? {
              value: field.pattern.value,
              message: field.pattern.message,
            }
          : undefined,
        validate: field.validate,
      })}
      error={!!errors[field.name]}
      helperText={
        errors[field.name] ? errors[field.name].message : field.description
      }
    />
  );
};

export default TextFieldControl;
