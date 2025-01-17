import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";
import { useEffect, useState } from "react";
import { CONFIG } from "../../../config";
import DataTable from "../components/DataTable/DataTable";

const deleteRecords = async (recordIds) => {
  try {
    console.log("Deleting records with IDs:", recordIds);
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
    console.log("Response:", response);

    const data = await response.json();
    if (response.ok) {
      console.log(data.message); // Success message
    } else {
      console.error(data.message); // Error message
    }
  } catch (error) {
    console.error("deleteRecords error:", error);
  }
};

const updateRecord = async (recordId, column, newValue) => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/update.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `id=${recordId}&column=${column}&value=${newValue}`,
      }
    );

    const data = await response.json();
    if (response.ok) {
      console.log(data.message); // Success message
    } else {
      console.error(data.message); // Error message
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchFormSubmissions = async () => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}volunteer_form_submissions/read.php`,
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

const AdminSubmissionsPage = () => {
  const [tableData, setTableData] = useState([]);
  // Define the columns manually
  const columns = [
    { label: "Complete Name", key: "complete_name" },
    { label: "Nick Name", key: "nick_name" },
    { label: "Age", key: "age" },
    { label: "Birthdate", key: "birthdate", format: "date" },
    { label: "Email", key: "email" },
    { label: "Contact Number", key: "contact_number" },
    { label: "Locality", key: "locality" },
    { label: "Occupation", key: "occupation" },
    { label: "Affiliation", key: "affiliation" },
    { label: "Facebook Link", key: "facebook_link" },
    { label: "Availability Date 1", key: "availability_date1", format: "date" },
    { label: "Availability Date 2", key: "availability_date2", format: "date" },
    { label: "Availability Date 3", key: "availability_date3", format: "date" },
    { label: "Questions", key: "questions" },
    { label: "Team", key: "team" },
    { label: "Submitted At", key: "submitted_at", format: "datetime" },
  ];

  return (
    <>
      <h1>Submissions</h1>
      <StandardChunkFiveSubTitleH4
        title="Volunteer Form - All Submissions"
        style={{ color: "black", margin: "0" }}
      />

      <DataTable
        fetchData={fetchFormSubmissions}
        columns={columns}
        onDelete={deleteRecords}
        // deleteRowApi={deleteRecord}
        // updateRowApi={updateRecord}
      />
    </>
  );
};

export default AdminSubmissionsPage;
