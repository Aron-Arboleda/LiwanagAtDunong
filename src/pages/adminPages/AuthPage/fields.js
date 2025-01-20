export const fields = [
  {
    name: "username",
    label: "Username *",
    required: true,
    placeholder: "Enter your username",
    minLength: {
      value: 5,
      message: "Username must be at least 5 characters",
    },
    maxLength: {
      value: 50,
      message: "Username cannot exceed 50 characters",
    },
    description: "Your unique username for logging in",
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
    description: "Your password should be at least 8 characters long",
    type: "password",
  },
];
