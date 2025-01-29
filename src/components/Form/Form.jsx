import { useState } from "react";
import { useForm } from "react-hook-form";

import "./Form.css";

import Grid2 from "@mui/material/Grid2";
import { Callout } from "@components/CustomComponents/CustomComponents";
import { StandardChunkFiveSubTitleH3 } from "@components/PageTitles/PageTitles";
import { FlexLayoutColumn } from "@components/Layouts/Layouts";
import CheckboxesControl from "./components/CheckboxesControl";
import SelectDropdownControl from "./components/SelectDropdownControl";
import RadioButtonsControl from "./components/RadioButtonsControl";
import TextFieldControl from "./components/TextFieldControl";
import SubmitControl from "./components/SubmitControl";

const initialDefaultValues = {
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
    availability_date1: "2025-02-02", // Next available Sunday
    availability_date2: "", // Optional 2nd Sunday
    availability_date3: "", // Optional 3rd Sunday
    questions: "",
  },
};

const Form = ({
  agreements,
  sections,
  disclaimerText,
  children,
  formSubmit,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
    watch,
  } = useForm(defaultValues ? defaultValues : {}); // defaultValues ? defaultValues : {}
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Submit handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("data", data);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      {agreements && (
        <div>
          <CheckboxesControl
            checkboxes={agreements}
            errors={errors}
            isSubmitted={isSubmitted}
            register={register}
          />
        </div>
      )}
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

            {section.fields.map((field, fieldIndex) => {
              const dependentFieldValue = field.dependentOn
                ? watch(field.dependentOn)
                : null;

              const shouldRenderField =
                !field.dependentOn ||
                dependentFieldValue === field.valueDependentOn;

              return (
                <Grid2 size={12} key={fieldIndex}>
                  {shouldRenderField &&
                    (field.type === "select" ? (
                      <SelectDropdownControl
                        field={field}
                        errors={errors}
                        defaultValues={defaultValues}
                        register={register}
                      />
                    ) : field.type === "radio" ? (
                      <RadioButtonsControl
                        field={field}
                        errors={errors}
                        isSubmitted={isSubmitted}
                        register={register}
                      />
                    ) : (
                      <TextFieldControl
                        field={field}
                        errors={errors}
                        register={register}
                      />
                    ))}
                </Grid2>
              );
            })}
          </Grid2>
        ))}
      </Grid2>

      {/* Submit Button */}
      {children}
      <SubmitControl isSubmitting={isSubmitting} />
    </form>
  );
};

export default Form;
