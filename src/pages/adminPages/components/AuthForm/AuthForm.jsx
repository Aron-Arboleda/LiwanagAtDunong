import Grid2 from "@mui/material/Grid2";
import { CustomTextField, SubmitButton } from "@components/Form/Form";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AuthForm = ({ fields, formSubmit, children }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const success = editId
        ? await formSubmit(editId, data)
        : await formSubmit(data);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2 container spacing={4} marginTop={4} marginBottom={4}>
        {fields.map((field, index) => (
          <Grid2 size={12} key={index}>
            <CustomTextField
              label={field.label}
              variant="outlined"
              fullWidth
              type={field.type || "text"}
              onWheel={(e) => field.type === "number" && e.target.blur()}
              multiline={field.multiline || false}
              rows={field.rows || 1}
              placeholder={field.placeholder || ""}
              slotProps={
                field.type === "date"
                  ? {
                      inputLabel: {
                        shrink: true,
                      },
                    }
                  : {}
              }
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
