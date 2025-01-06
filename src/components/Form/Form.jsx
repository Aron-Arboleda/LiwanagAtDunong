import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid2, styled } from "@mui/material";
import "./Form.css";
import { Callout } from "@components/CustomComponents/CustomComponents";
import { yellow } from "@mui/material/colors";
import { StandardChunkFiveSubTitleH3 } from "@components/PageTitles/PageTitles";
import { CardGridLayout, FlexLayoutColumn } from "@components/Layouts/Layouts";

const SubmitButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: yellow[200],
  "&:hover": {
    backgroundColor: yellow[400],
  },
  textTransform: "capitalize",
  fontFamily: "Montserrat",
  padding: "10px",
  fontSize: "1rem",
  maxWidth: "200px",
  borderRadius: "2rem",
  border: "2px solid black",
  boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.84)",
  margin: "3rem 0 2rem 0",
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "#347928",
  },
  "& .MuiOutlinedInput-root": {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.9rem", // Adjusted font size for input
    "& fieldset": {
      borderColor: "black", // Default black border
      borderWidth: "1px", // Default border width
    },
    "&.Mui-focused fieldset": {
      borderColor: "#347928", // Black border when focused
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Montserrat, sans-serif", // Apply Montserrat to the label text
    fontSize: "0.85rem", // Slightly smaller font size for the label
  },
  "& .MuiFormHelperText-root": {
    fontFamily: "Montserrat, sans-serif", // Apply Montserrat to helper text
  },
}));

const Form = ({ sections, disclaimerText, children }) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Callout variant="note">
        <strong>Notice:</strong> {disclaimerText}
      </Callout>
      <Grid2 container spacing={4} marginTop={4} marginBottom={4}>
        {sections.map((section, index) => (
          <Grid2 container spacing={2} key={index}>
            <FlexLayoutColumn style={{ gap: "10px", marginBottom: "1rem" }}>
              <StandardChunkFiveSubTitleH3
                title={section.sectionName}
                style={{ marginTop: "0rem", marginBottom: "0px" }}
              />
              <p className="pageParagP">{section.sectionDescription}</p>
            </FlexLayoutColumn>
            <CardGridLayout sizeOfCard="280px" margin="0px">
              {section.fields.map((field, index) => (
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
                      required: field.required
                        ? `${field.label} is required`
                        : false,
                      maxLength: field.maxLength
                        ? {
                            value: field.maxLength.value,
                            message: field.maxLength.message,
                          }
                        : undefined,
                      min: field.min
                        ? { value: field.min.value, message: field.min.message }
                        : undefined,
                      max: field.max
                        ? { value: field.max.value, message: field.max.message }
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
            </CardGridLayout>
          </Grid2>
        ))}
      </Grid2>

      {/* Submit Button */}

      {children}
      <div className="flex-center">
        <SubmitButton type="submit" variant="contained" fullWidth>
          Submit
        </SubmitButton>
      </div>
    </form>
  );
};

export default Form;
