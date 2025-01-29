import Grid2 from "@mui/material/Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import Eye from "lucide-react/dist/esm/icons/eye";
import EyeOff from "lucide-react/dist/esm/icons/eye-off";
import {
  CustomTextField,
  SubmitButton,
} from "@components/Form/components/CustomFormComponents";

const AuthForm = ({ fields, formSubmit, children }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const success = await formSubmit(data);
      if (success) {
        reset();
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="authForm">
      <Grid2 container spacing={2} marginTop={4} marginBottom={4}>
        {fields.map((field, index) => (
          <Grid2 size={12} key={index}>
            <CustomTextField
              label={field.label}
              variant="outlined"
              fullWidth
              type={
                field.type === "password" && !showPassword ? "password" : "text"
              } // Toggle type based on showPassword
              onWheel={(e) => field.type === "number" && e.target.blur()}
              multiline={field.multiline || false}
              rows={field.rows || 1}
              placeholder={field.placeholder || ""}
              slotProps={{
                inputLabel:
                  field.type === "date" ? { shrink: true } : undefined,
                input: {
                  endAdornment: field.type === "password" && ( // Show toggle only for password fields
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
                errors[field.name]
                  ? errors[field.name].message
                  : field.description
              }
            />
          </Grid2>
        ))}
      </Grid2>
      {/* Submit Button */}
      <div className="flex-center">
        <SubmitButton
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitting}
          customstyle={{ margin: "0" }}
        >
          {isSubmitting ? (
            <>
              <CircularProgress
                size={20}
                style={{ marginRight: "10px", color: "black" }}
              />
              Loading...
            </>
          ) : (
            "Log in"
          )}
        </SubmitButton>
      </div>

      {children}
    </form>
  );
};

export default AuthForm;
