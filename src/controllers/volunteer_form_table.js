import { CONFIG } from "./config";

export const archiveRecords = async (records) => {
  try {
    const recordIds = records.map(
      (record) => record.volunteer_form_submission_id
    );
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/archive.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: recordIds }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      return { message: data.message, success: true };
    } else {
      return { message: data.message, success: false };
    }
  } catch (error) {
    return { message: "Error: Archiving failed " + error, success: false };
  }
};

export const unarchiveRecords = async (records) => {
  try {
    const recordIds = records.map(
      (record) => record.volunteer_form_submission_id
    );
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/unarchive.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: recordIds }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      return { message: data.message, success: true };
    } else {
      return { message: data.message, success: false };
    }
  } catch (error) {
    return { message: "Error: Unarchiving failed " + error, success: false };
  }
};

export const deleteRecords = async (records) => {
  try {
    const recordIds = records.map(
      (record) => record.volunteer_form_submission_id
    );
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/delete.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: recordIds }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      return { message: data.message, success: true };
    } else {
      return { message: data.message, success: false };
    }
  } catch (error) {
    return { message: "Error: Deleting failed " + error, success: false };
  }
};

export const updateRecord = async (data) => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/update.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Convert to JSON format
      }
    );

    const responseData = await response.json();
    if (response.ok) {
      return { message: responseData.message, success: true };
    } else {
      return { message: responseData.message, success: false };
    }
  } catch (error) {
    return { message: "Error: Updating failed " + error, success: false };
  }
};

export const createRecord = async (data) => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/create.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = response;

    if (response.ok) {
      return { message: "Record created successfully.", success: true };
    } else {
      console.error(responseData);
      return { message: "Record created successfully.", success: false };
    }
  } catch (error) {
    console.error(error);
    return { message: "Error: Creating failed " + error, success: false };
  }
};

export const fetchLatestSubmissions = async (fileName) => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/readUnarchived.php`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const records = data.records || [];

    return records;
  } catch (error) {
    console.error("Error fetching volunteer form submissions:", error);
  }
};

export const fetchArchivedSubmissions = async (fileName) => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/readArchived.php`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const records = data.records || [];

    return records;
  } catch (error) {
    console.error("Error fetching volunteer form submissions:", error);
  }
};

export const columns = [
  { label: "Complete Name", key: "complete_name" },
  { label: "Nick Name", key: "nick_name" },
  { label: "Birthdate", key: "birthdate", format: "date" },
  { label: "Email", key: "email" },
  { label: "Contact Number", key: "contact_number" },
  { label: "Current Address", key: "current_address" },
  { label: "Occupation", key: "occupation" },
  { label: "Affiliations", key: "affiliations" },
  { label: "Facebook Link", key: "facebook_link" },
  { label: "Date Available", key: "date_available", format: "date" },
  { label: "Transportation", key: "transportation" },
  { label: "Manila Pickup Place", key: "manila_pickup_place" },
  { label: "Other Pickup Location", key: "other_pickup_location" },
  { label: "Allergies", key: "allergies" },
  { label: "Medical Conditions", key: "medical_conditions" },
  { label: "Team", key: "team" },
  { label: "Submitted At", key: "submitted_at", format: "datetime" },
];
