import { getNextSundayDate } from "@utils/helpers";

export const agreementsCheckboxes = {
  title: "Agreements",
  disclaimerText:
    "By agreeing to the following statements, you confirm that you have read and understood the Liwanag at Dunong Manual and agree to the terms and conditions set forth by the organization.",
  items: [
    {
      name: "liwanag_at_dunong_agreement",
      label: "Liwanag at Dunong agreement",
      text: "I have read the Liwanag at Dunong Manual.",
      required: true,
    },
    {
      name: "goals_and_objectives_agreement",
      label: "Goals and Objectives agreement",
      text: "I have read Liwanag at Dunong's goals and objectives.",
      required: true,
    },
    {
      name: "tasks_activities_agreement",
      label: "Tasks and Activities agreement",
      text: "I have noted the tasks, activities, and things to bring.",
      required: true,
    },
    {
      name: "transportation_agreement",
      label: "Transportation agreement",
      text: "I understand the ways to get to the community, pick up location, and meeting place.",
      required: true,
    },
    {
      name: "itinerary_agreement",
      label: "Itinerary agreement",
      text: "I have read the sample itinerary and I commit on being on time.",
      required: true,
    },
    {
      name: "no_cancellation_agreement",
      label: "No Cancellation agreement",
      text: "I agree to no-cancellation as I understand that the organization truly values sincere sign-ups, as the program thrives on genuine dedication and respect for the community we serve.",
      required: true,
    },
    {
      name: "transpo_contribution_agreement",
      label: "Transportation Contribution agreement",
      text: "I understand that Liwanag at Dunong doesn't have its own transportation yet. I understand the transpo contribution mentioned in the Manual.",
      required: true,
    },
  ],
};

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
        description:
          "(We will confirm your registration via text message. Once you received the confirmation, please respond. No response means you are withdrawing your registration.)",
      },
      {
        name: "current_address",
        label: "Current Address *",
        required: true,
        maxLength: {
          value: 255,
          message: "Current Address cannot exceed 255 characters.",
        },
        description: "Please enter your current address of residence",
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
        name: "transportation",
        type: "radio",
        label:
          "How do you prefer to go to the community? (Exact location, options, and detailed info please refer to the Manual) *",
        shortText: "transportation specification",
        required: true,
        options: [
          { value: "manila_van", label: "I'll join the Manila van" },
          {
            value: "tarlac_transpo",
            label: "I'll join the Team Tarlac transpo",
          },
          {
            value: "own_transpo",
            label:
              "I'll bring my own transpo and be there at the meeting place.",
          },
        ],
        description: "",
      },
      {
        name: "manila_pickup_place",
        type: "radio",
        label:
          "For boluntirs joining Manila Van only: Where is your preferred pick up? *",
        shortText: "Pickup place specification",
        dependentOn: "transportation",
        valueDependentOn: "manila_van",
        required: true,
        options: [
          {
            value: "laguna_area",
            label: "Laguna area (please specify with the organizers)",
          },
          {
            value: "alabang_zapote_road",
            label: "Alabang-Zapote Road (please specify with the organizers)",
          },
          {
            value: "jollibee_zapote",
            label: "Jollibee Zapote",
          },
          {
            value: "baclaran_heritage",
            label: "Baclaran (Heritage)",
          },
          {
            value: "lawton",
            label: "Lawton",
          },
          {
            value: "morayta",
            label: "Morayta",
          },
          {
            value: "welcome_rotonda",
            label: "Welcome, Rotonda",
          },
          {
            value: "cloverleaf_ayala_malls_balintawak",
            label: "Cloverleaf, Ayala Malls, Balintawak",
          },
          {
            value: "bulacan_exit",
            label: "Bulacan Exit (please specify with the organizers)",
          },
          {
            value: "pampanga_exit",
            label: "Pampanga Exit (please specify with the organizers)",
          },
        ],
        description: "",
      },
      {
        name: "other_pickup_location",
        variant: "outlined",
        label: "Other pick up location",
        required: false,
        maxLength: {
          value: 512,
          message: "Input cannot exceed 512 characters.",
        },
        dependentOn: "transportation",
        valueDependentOn: "manila_van",
        description:
          "For boluntirs joining Manila Van only: For other pick up location request, please put it here. If you are on the way, we can set up a pick up time for you. For the van's transportation route, please refer to the Boluntir's Manual.",
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
        name: "allergies",
        label: "Food allergies",
        required: false,
        maxLength: {
          value: 512,
          message: "Allergy description cannot exceed 512 characters.",
        },
        description:
          "Please indicate if you have any food allergies or dietary restrictions. Leave blank if none.",
      },
      {
        name: "medical_conditions",
        label: "Medical Conditions",
        required: false,
        maxLength: {
          value: 512,
          message: "Allergy description cannot exceed 512 characters.",
        },
        description:
          "Please indicate if you have any medical conditions. Leave blank if none.",
      },
      {
        name: "affiliations",
        label: "Organizations or Affiliations",
        required: false,
        maxLength: {
          value: 150,
          message:
            "Organizations or Affiliations cannot exceed 150 characters.",
        },
        description:
          "Please enter your affiliation or organization name. Leave blank if none.",
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
      {
        name: "date_available",
        label: "When will you join us in the community? *",
        disabled: true,
        required: true,
        type: "date",
        description: "",
        defaultValue: getNextSundayDate(),
      },
    ],
  },
];
