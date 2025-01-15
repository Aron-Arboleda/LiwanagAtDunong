import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";
import { useEffect, useState } from "react";
import { CONFIG } from "../../../config";

const AdminSubmissionsPage = () => {
  const [tableData, setTableData] = useState();

  useEffect(() => {
    const fetchFormSubmissions = async () => {
      try {
        const response = await fetch(
          `${CONFIG.BACKEND_API}admin/get_all_followers_count.php`,
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
      } catch (error) {
        console.error("Error fetching followers:", error);
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
    </>
  );
};

export default AdminSubmissionsPage;
