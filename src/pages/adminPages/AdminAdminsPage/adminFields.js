export const adminFields = [
  {
    sectionName: "Admin attributes",
    sectionDescription:
      "This section contains all the necessary information of the admin. Please fill out the following fields.",
    fields: [
      {
        name: "username",
        label: "Username *",
        type: "text",
        required: true,
        placeholder: "admin_username",
        minLength: {
          value: 3,
          message: "Username must be at least 3 characters.",
        },
        maxLength: {
          value: 50,
          message: "Username cannot exceed 50 characters.",
        },
        description: "Unique username for the admin.",
      },
      {
        name: "password",
        label: "Password *",
        required: true,
        type: "password",
        minLength: {
          value: 6,
          message: "Password must be at least 6 characters.",
        },
        description: "Password for the admin's account.",
      },
      {
        name: "role",
        label: "Role *",
        required: true,
        type: "select",
        options: [
          { value: "super_admin", label: "Super Admin" },
          { value: "editor", label: "Editor" },
          { value: "viewer", label: "Viewer" },
        ],
        description: "Select the role for the admin.",
      },
      {
        name: "account_status",
        label: "Account Status *",
        required: true,
        type: "select",
        options: [
          { value: "active", label: "Active" },
          { value: "disabled", label: "Disabled" },
        ],
        description: "Choose whether the admin account is active or disabled.",
      },
    ],
  },
];
