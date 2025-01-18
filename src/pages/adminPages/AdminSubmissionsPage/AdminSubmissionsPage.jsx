import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";
import DataTable from "../components/DataTable/DataTable";
import {
  archiveRecords,
  columns,
  createRecord,
  deleteRecords,
  fetchLatestSubmissions,
  updateRecord,
} from "@controllers/volunteer_form_table";

const AdminSubmissionsPage = () => {
  return (
    <>
      <h1>Submissions</h1>
      <StandardChunkFiveSubTitleH4
        title="Volunteer Form - All Submissions"
        style={{ color: "black", margin: "0" }}
      />

      <DataTable
        columns={columns}
        controllers={{
          fetchData: fetchLatestSubmissions,
          onCreate: createRecord,
          onUpdate: updateRecord,
          onDelete: deleteRecords,
          onArchive: archiveRecords,
        }}
      />
    </>
  );
};

export default AdminSubmissionsPage;
