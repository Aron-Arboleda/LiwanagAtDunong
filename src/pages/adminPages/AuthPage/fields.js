export const fields = [
  {
    name: "username",
    label: "Username *",
    required: true,
    placeholder: "Enter your username",
    minLength: {
      value: 3,
      message: "Username must be at least 3 characters",
    },
    maxLength: {
      value: 50,
      message: "Username cannot exceed 50 characters",
    },
    description: "Enter username above.",
  },
  {
    name: "password",
    label: "Password *",
    required: true,
    placeholder: "Enter your password",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    description: "Enter password above.",
    type: "password",
  },
];
