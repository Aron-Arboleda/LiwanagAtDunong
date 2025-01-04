import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid2, Typography } from "@mui/material";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        React Hook Form with MUI
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters",
                },
              })}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ""}
            />
          </Grid2>

          <Grid2 item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          </Grid2>

          <Grid2 item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
}

export default Form;
