import { CONFIG } from "./config.js";

export const createAdmin = async (data) => {
  //console.log("createAdmin data:", data);

  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}admin/accounts/create.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    if (response.ok) {
      return { message: responseData.message, success: true };
    } else {
      return { message: responseData.message, success: false };
    }
  } catch (error) {
    return { message: "Error: Server error, " + error, success: false };
  }
};

export const deleteAdmins = async (admins) => {
  try {
    const adminIds = admins.map((admin) => admin.admin_id); // Extract the admin IDs from the admins array
    const response = await fetch(
      `${CONFIG.BACKEND_API}admin/accounts/delete.php`, // Make sure to update this path to match your actual endpoint
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: adminIds }), // Send the admin IDs as JSON
      }
    );

    const data = await response.json();

    if (response.ok) {
      return { message: data.message, success: true };
    } else {
      return { message: data.message, success: false };
    }
  } catch (error) {
    return { message: "Error: Server error, " + error, success: false };
  }
};

export const updateAdmin = async (data) => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}admin/accounts/update.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (response.ok) {
      return { message: responseData.message, success: true };
    } else {
      return { message: responseData.message, success: false };
    }
  } catch (error) {
    return { message: "Error: Server error, " + error, success: false };
  }
};

export const fetchAdmins = async () => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}admin/accounts/readAll.php` // Make sure to update this path to match your PHP file's location
    );

    const data = await response.json(); // Parse the response as JSON

    if (response.ok) {
      console.log(data.message); // Log success message
      return data.data; // Return the list of admins
    } else {
      console.error(data.message); // Log error message from PHP
      return []; // Return an empty array in case of error
    }
  } catch (error) {
    console.error("fetchAdmins error:", error); // Handle any fetch or network errors
    return []; // Return an empty array in case of network error
  }
};

export const loginUser = async (data) => {
  try {
    // Send the POST request to the login PHP script
    const response = await fetch(
      `${CONFIG.BACKEND_API}admin/accounts/login.php`, // Update this with your actual PHP endpoint
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify that we are sending JSON
        },
        body: JSON.stringify(data), // Send the username and password as JSON
        credentials: "include",
      }
    );

    const responseData = await response.json(); // Parse the JSON response

    if (response.ok) {
      // If response is OK, return the success message and user data
      return {
        message: responseData.message,
        success: true,
        user: responseData.data.user,
      };
    } else {
      // If there is an error (non-2xx status), return the error message
      return { message: responseData.message, success: false };
    }
  } catch (error) {
    // Catch and handle any errors that occur during the fetch
    return { message: "Error: Login failed, " + error, success: false };
  }
};

export const adminsColumns = [
  { label: "Username", key: "username" },
  { label: "Role", key: "role" },
  { label: "Created At", key: "created_at", format: "datetime" },
  { label: "Last Login", key: "last_login", format: "datetime" },
  { label: "Account Status", key: "account_status" },
];
