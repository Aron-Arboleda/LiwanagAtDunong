import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";
import { useEffect, useState } from "react";
import { CONFIG } from "../../../config";
import DataTable from "../components/DataTable/DataTable";

const AdminSubmissionsPage = () => {
  const [tableData, setTableData] = useState([]);
  const [archivedData, setArchivedData] = useState([]);
  const [tarlacTeamData, setTarlacTeamData] = useState([]);
  const [manilaTeamData, setManilaTeamData] = useState([]);

  // Define the columns manually
  const columns = [
    { label: "Complete Name", key: "complete_name" },
    { label: "Nick Name", key: "nick_name" },
    { label: "Age", key: "age" },
    { label: "Birthdate", key: "birthdate" },
    { label: "Email", key: "email" },
    { label: "Contact Number", key: "contact_number" },
    { label: "Locality", key: "locality" },
    { label: "Occupation", key: "occupation" },
    { label: "Affiliation", key: "affiliation" },
    { label: "Facebook Link", key: "facebook_link" },
    { label: "Availability Date 1", key: "availability_date1" },
    { label: "Availability Date 2", key: "availability_date2" },
    { label: "Availability Date 3", key: "availability_date3" },
    { label: "Questions", key: "questions" },
    { label: "Team", key: "team" },
    { label: "Submitted At", key: "submitted_at" },
  ];

  useEffect(() => {
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
        console.log("records", records);

        // Filter the records based on the required conditions
        const archived = records.filter((record) => record.is_archived === "1");
        const notArchived = records.filter(
          (record) => record.is_archived === "0"
        );
        const tarlacTeam = records.filter(
          (record) => record.team === "team_tarlac"
        );
        const manilaTeam = records.filter(
          (record) => record.team === "team_manila"
        );

        // Set the state for each filtered array
        setArchivedData(archived);
        setTarlacTeamData(tarlacTeam);
        setManilaTeamData(manilaTeam);
        setTableData(notArchived); // Initially showing non-archived records
      } catch (error) {
        console.error("Error fetching volunteer form submissions:", error);
      }
    };

    fetchFormSubmissions();
  }, []);

  return (
    <>
      <h1>Submissions</h1>
      <StandardChunkFiveSubTitleH4
        title="Volunteer Form Submissions"
        style={{ color: "black", margin: "0" }}
      />

      {/* DataTable for non-archived records */}
      <h2>Non-Archived Submissions</h2>
      <DataTable data={tableData} columns={columns} />

      {/* DataTable for archived records */}
      <h2>Archived Submissions</h2>
      <DataTable data={archivedData} columns={columns} />

      {/* DataTable for Tarlac Team */}
      <h2>Tarlac Team Submissions</h2>
      <DataTable data={tarlacTeamData} columns={columns} />

      {/* DataTable for Manila Team */}
      <h2>Manila Team Submissions</h2>
      <DataTable data={manilaTeamData} columns={columns} />
    </>
  );
};

export default AdminSubmissionsPage;
