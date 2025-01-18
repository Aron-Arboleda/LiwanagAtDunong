import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";
import DataTable from "../components/DataTable/DataTable";
import {
  columns,
  createRecord,
  deleteRecords,
  fetchArchivedSubmissions,
  updateRecord,
} from "@controllers/volunteer_form_table";

const AdminArchivedPage = () => {
  return (
    <>
      <h1>Archive</h1>
      <StandardChunkFiveSubTitleH4
        title="Volunteer Form - Archived Submissions"
        style={{ color: "black", margin: "0" }}
      />

      <DataTable
        fetchData={fetchArchivedSubmissions}
        columns={columns}
        onDelete={deleteRecords}
        onEdit={updateRecord}
        onCreate={createRecord}
      />
    </>
  );
};

export default AdminArchivedPage;
