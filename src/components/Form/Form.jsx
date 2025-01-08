import React from "react";

// Third-party library imports
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import styled from "@mui/material/styles/styled";
import Grid2 from "@mui/material/Grid2";
import yellow from "@mui/material/colors/yellow";

// Local component imports
import { Callout } from "@components/CustomComponents/CustomComponents";
import { StandardChunkFiveSubTitleH3 } from "@components/PageTitles/PageTitles";
import { CardGridLayout, FlexLayoutColumn } from "@components/Layouts/Layouts";

// CSS imports
import "./Form.css";

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
    fontSize: "0.9rem",
    "& fieldset": {
      borderColor: "black",
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#347928",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.85rem",
  },
  "& .MuiFormHelperText-root": {
    fontFamily: "Montserrat, sans-serif",
  },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  fontSize: "0.9rem",
  textAlign: "left",
  color: "black", // Change text color
  fontFamily: "Montserrat, sans-serif", // Change font family
  "& .MuiSelect-select": {
    padding: theme.spacing(2),
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "black", // Change border color
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "2px", // Change border width when focused
    borderColor: "#347928", // Change border color when focused
  },
}));

const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  backgroundColor: "white", // Default background color
  padding: "0 10px 0 0", // Default padding
  "&.Mui-focused": {
    color: "#347928", // Color when label is on top
  },
}));

// for testing purposes
const defaultValuesForTesting = {
  defaultValues: {
    complete_name: "Juan D. Dela Cruz",
    nick_name: "Juan",
    age: 25,
    birthdate: "1998-07-26",
    email: "juandelacruz@gmail.com",
    contact_number: "09123456789",
    locality: "Tarlac City",
    team: "team_tarlac",
    occupation: "Student",
    affiliation: "Tarlac Volunteer Group",
    facebook_link: "https://www.facebook.com/juandelacruz",
    availability_date1: "2025-01-12", // Next available Sunday
    availability_date2: "2025-01-19", // Optional 2nd Sunday
    availability_date3: "2025-01-26", // Optional 3rd Sunday
    questions:
      "How can I contribute to the community activities more effectively?",
  },
};

const Form = ({ sections, disclaimerText, children, formSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(defaultValuesForTesting);

  // Submit handler
  const onSubmit = (data) => {
    const success = formSubmit(data);
    if (success) {
      reset();
    }
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
                  {field.type !== "select" ? (
                    <CustomTextField
                      label={field.label}
                      variant="outlined"
                      fullWidth
                      type={field.type || "text"}
                      onWheel={(e) =>
                        field.type === "number" && e.target.blur()
                      }
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
                  ) : (
                    <FormControl
                      sx={{ width: "100%" }}
                      error={!!errors[field.name]}
                    >
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
                        defaultValue=""
                        //defaultValue={field.options[0].value || ""}
                        {...register(field.name, {
                          required: field.required
                            ? `${field.label} is required`
                            : false,
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
                        {errors[field.name]
                          ? errors[field.name].message
                          : field.description}
                      </FormHelperText>
                    </FormControl>
                  )}
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
