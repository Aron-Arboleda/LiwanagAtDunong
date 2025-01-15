export const sections = [
  {
    sectionName: "Personal Information",
    sectionDescription:
      "This section contains all the necessary personal information of the volunteer. Please fill out the following fields. ",
    fields: [
      {
        name: "complete_name",
        label: "Complete Name *",
        required: true,
        placeholder: "Juan D. Dela Cruz",
        minLength: {
          value: 3,
          message: "Complete name must be at least 3 characters",
        },
        description: "First Name M.I. Last Name",
      },
      {
        name: "nick_name",
        label: "Nickname *",
        required: true,
        placeholder: "Juan",
        maxLength: {
          value: 50,
          message: "Nickname cannot exceed 50 characters.",
        },
        description: "A nickname to call you with",
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
        name: "birthdate",
        label: "Birthdate *",
        required: true,
        type: "date",
        validate: (value) => {
          const today = new Date();
          const selectedDate = new Date(value);
          if (selectedDate > today) {
            return "Birthdate cannot be in the future.";
          }
          return true;
        },
        description: "Please enter your birthdate.",
      },
      {
        name: "email",
        label: "Active Email Address *",
        required: true,
        type: "email",
        placeholder: "juandelacruz@gmail.com",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email address format.",
        },
        description: '(e.g "juandelacruz@gmail.com")',
      },
      {
        name: "contact_number",
        label: "Contact Number *",
        required: true,
        type: "tel",
        placeholder: "09XXXXXXXXX",
        pattern: {
          value: /^09\d{9}$/,
          message: "Invalid contact number format. Use 09XXXXXXXXX.",
        },
        description: "Follow the format 09XXXXXXXXX",
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
        name: "team",
        label: "Select Your Team",
        type: "select", // This makes it a dropdown
        required: true,
        placeholder: "Choose your team",
        options: [
          { value: "team_tarlac", label: "Team Tarlac" },
          { value: "team_manila", label: "Team Manila" },
          { value: "others", label: "Others" },
        ],
        description: "Please select your team",
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
          message:
            "Affiliation/Organization name cannot exceed 150 characters.",
        },
        description:
          "Please enter your affiliation or organization name (optional)",
      },
      {
        name: "facebook_link",
        label: "Facebook Account/Messenger Link *",
        required: true,
        placeholder: "https://www.facebook.com/juandelacruz",
        pattern: {
          value:
            /^(N\/A|https?:\/\/(www\.)?(facebook|fb)\.com\/[A-Za-z0-9._%+-]+\/?)$/,
          message:
            "Invalid Facebook/Messenger link. Please provide a valid URL.",
        },
        description: "Copy in FB Profile Page > three-dot button > Copy Link",
      },
    ],
  },
  {
    sectionName: "Date availablity",
    sectionDescription:
      "Please share your available dates (for up to 3 Sundays!) when you can commit to visiting the community. Our team will get in touch with you to confirm your attendance.",
    fields: [
      {
        name: "availability_date1",
        label: "Availability Date 1 (Sunday) *",
        required: true,
        type: "date",
        validate: (value) => {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison

          if (selectedDate.getDay() !== 0) {
            return "Date must be a Sunday.";
          }
          if (selectedDate < today) {
            return "Past dates are not valid.";
          }
          return true;
        },
        description: "Please select a Sunday you're available to volunteer",
      },
      {
        name: "availability_date2",
        label: "Availability Date 2 (Sunday) *",
        required: false,
        type: "date",
        validate: (value) => {
          if (!value) return true;
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison

          if (selectedDate.getDay() !== 0) {
            return "Date must be a Sunday.";
          }
          if (selectedDate < today) {
            return "Past dates are not valid.";
          }
          return true;
        },
        description:
          "(optional) Please select a 2nd Sunday you're available to volunteer",
      },
      {
        name: "availability_date3",
        label: "Availability Date 3 (Sunday) *",
        required: false,
        type: "date",
        validate: (value) => {
          if (!value) return true;
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison

          if (selectedDate.getDay() !== 0) {
            return "Date must be a Sunday.";
          }
          if (selectedDate < today) {
            return "Past dates are not valid.";
          }
          return true;
        },
        description:
          "(optional) Please select a 3rd Sunday you're available to volunteer",
      },
      {
        name: "questions",
        label: "Questions *",
        required: false,
        maxLength: {
          value: 500,
          message: "Your question cannot exceed 500 characters.",
        },
        description:
          "(optional) Feel free to reach out if you have any program-related questions; we're here to assist you! If you're interested in partnerships or collaborations, please get in touch with us via our Facebook page for the best response. 😊",
        type: "text",
        multiline: true,
        rows: 4,
      },
    ],
  },
];
