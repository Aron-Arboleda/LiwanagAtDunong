import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import InputLabel from "@mui/material/InputLabel";
import styled from "@mui/material/styles/styled";
import yellow from "@mui/material/colors/yellow";
import Checkbox from "@mui/material/Checkbox/Checkbox";

export const SubmitButton = styled(Button)(({ theme, customstyle }) => ({
  color: customstyle?.color || "black",
  backgroundColor: customstyle?.backgroundColor || yellow[200],
  "&:hover": {
    backgroundColor: customstyle?.hoverBackgroundColor || yellow[400],
  },
  textTransform: customstyle?.textTransform || "capitalize",
  fontFamily: customstyle?.fontFamily || "Montserrat",
  padding: customstyle?.padding || "10px",
  fontSize: customstyle?.fontSize || "1rem",
  maxWidth: customstyle?.maxWidth || "200px",
  borderRadius: customstyle?.borderRadius || "2rem",
  border: customstyle?.border || "2px solid black",
  boxShadow: customstyle?.boxShadow || "2px 2px 0px rgba(0, 0, 0, 0.84)",
  margin: customstyle?.margin || "3rem 0 2rem 0",
}));

export const CustomCheckbox = styled(Checkbox)(({ theme, error }) => ({
  color: error ? "#d32f2f" : "#347928",
  "&.Mui-checked": {
    color: "#347928",
  },
}));

export const CustomRadio = styled(Radio)(() => ({
  color: "#347928",
  "&.Mui-checked": {
    color: "#347928",
  },
  "&.Mui-error": {
    color: "#d32f2f",
  },
}));

export const CustomRadioGroup = styled(RadioGroup)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

export const CustomFormControlLabel = styled(FormControlLabel)(
  ({ theme, error }) => ({
    "& .MuiTypography-root": {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "0.9rem",
      color: error ? "#d32f2f" : "inherit",
    },
  })
);

export const CustomFormLabel = styled(FormLabel)(({ theme, error }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "0.9rem",
  color: error ? "#d32f2f" : "inherit",
  "&.Mui-focused": {
    color: error ? "#d32f2f" : "black",
  },
}));

export const ErrorMessage = styled("p")({
  color: "#d32f2f",
  fontSize: "0.75rem",
  marginTop: "3px",
  marginLeft: "14px",
  fontFamily: "Montserrat, sans-serif",
});

export const CustomTextField = styled(TextField)(({ theme }) => ({
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

export const CustomSelect = styled(Select)(({ theme }) => ({
  fontSize: "0.9rem",
  textAlign: "left",
  color: "black",
  fontFamily: "Montserrat, sans-serif",
  "& .MuiSelect-select": {
    padding: theme.spacing(2),
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "2px",
    borderColor: "#347928",
  },
}));

export const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px 0 0",
  "&.Mui-focused": {
    color: "#347928",
  },
}));
