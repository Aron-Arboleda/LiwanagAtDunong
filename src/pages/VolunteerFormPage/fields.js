export const fields = [
  {
    name: "completeName",
    label: "Complete Name *",
    required: true,
    minLength: {
      value: 3,
      message: "Complete name must be at least 3 characters",
    },
    description: "First Name M.I. Last Name",
  },
  {
    name: "nickName",
    label: "Nickname *",
    required: true,
    maxLength: {
      value: 50,
      message: "Nickname cannot exceed 50 characters.",
    },
    description: "Please enter your nickname",
    type: "text",
  },
  {
    name: "age",
    label: "Age *",
    required: true,
    type: "number",
    min: { value: 1, message: "Age must be at least 1." },
    max: { value: 120, message: "Age must not exceed 120." },
    validate: (value) =>
      Number.isInteger(Number(value)) || "Age must be a whole number.",
    description: "Please enter your age",
  },
  {
    name: "birthday",
    label: "Birthday *",
    required: true,
    type: "date",
    validate: (value) => {
      const today = new Date();
      const selectedDate = new Date(value);
      if (selectedDate > today) {
        return "Birthday cannot be in the future.";
      }
      return true;
    },
    description: "Please enter your date of birth",
  },
  {
    name: "email",
    label: "Active Email Address *",
    required: true,
    type: "email",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address format.",
    },
    description: "Please enter your active email address",
  },
  {
    name: "contactNumber",
    label: "Contact Number *",
    required: true,
    type: "tel",
    placeholder: "09XXXXXXXXX",
    pattern: {
      value: /^09\d{9}$/,
      message: "Invalid contact number format. Use 09XXXXXXXXX.",
    },
    description: "Please enter your contact number in the format 09XXXXXXXXX",
  },
  {
    name: "locality",
    label: "Locality (City/Municipality) *",
    required: true,
    maxLength: {
      value: 100,
      message: "Locality cannot exceed 100 characters.",
    },
    description: "Please enter your city or municipality of residence",
  },
  {
    name: "occupation",
    label: "Occupation *",
    required: true,
    maxLength: {
      value: 200,
      message: "Occupation description cannot exceed 200 characters.",
    },
    description:
      "For Students: Write 'Student' (Your course, year level, and your school). For Professionals: Write your field of work, company, and position.",
  },
  {
    name: "affiliation",
    label: "Affiliation/Organization",
    required: false,
    maxLength: {
      value: 150,
      message: "Affiliation/Organization name cannot exceed 150 characters.",
    },
    description:
      "Please enter your affiliation or organization name (optional)",
  },
  {
    name: "facebookLink",
    label: "Facebook Account/Messenger Link *",
    required: true,
    pattern: {
      value: /^(https?:\/\/)?(www\.)?(facebook|fb)\.com\/[A-Za-z0-9._%+-]+\/?$/,
      message: "Invalid Facebook/Messenger link. Please provide a valid URL.",
    },
    description: "Please enter your Facebook or Messenger link",
  },
  {
    name: "availabilityDate1",
    label: "Availability Date 1 (Sunday) *",
    required: true,
    type: "date",
    validate: (value) => {
      const selectedDate = new Date(value);
      if (selectedDate.getDay() !== 0) {
        return "Date must be a Sunday.";
      }
      return true;
    },
    description:
      "Please select an availability date (Sunday) for the first field",
  },
  {
    name: "availabilityDate2",
    label: "Availability Date 2 (Sunday)",
    required: false,
    type: "date",
    validate: (value) => {
      if (value) {
        const selectedDate = new Date(value);
        if (selectedDate.getDay() !== 0) {
          return "Date must be a Sunday.";
        }
      }
      return true;
    },
    description: "Please select an optional availability date (Sunday)",
  },
  {
    name: "availabilityDate3",
    label: "Availability Date 3 (Sunday)",
    required: false,
    type: "date",
    validate: (value) => {
      if (value) {
        const selectedDate = new Date(value);
        if (selectedDate.getDay() !== 0) {
          return "Date must be a Sunday.";
        }
      }
      return true;
    },
    description: "Please select an optional availability date (Sunday)",
  },
  {
    name: "questions",
    label: "Questions *",
    required: true,
    maxLength: {
      value: 500,
      message: "Your question cannot exceed 500 characters.",
    },
    description:
      "Feel free to reach out if you have any program-related questions; we're here to assist you! If you're interested in partnerships or collaborations, please get in touch with us via our Facebook page for the best response. 😊",
    type: "text",
    multiline: true,
    rows: 4,
  },
];
