import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";
import DataTable from "../components/DataTable/DataTable";
import {
  columns,
  createRecord,
  deleteRecords,
  fetchArchivedSubmissions,
  unarchiveRecords,
  updateRecord,
} from "@controllers/volunteer_form_table";
import { sections } from "@pages/VolunteerFormPage/sections";

const AdminArchivedPage = () => {
  return (
    <>
      <h1>Archive</h1>
      <StandardChunkFiveSubTitleH4
        title="Volunteer Form - Archived Submissions"
        style={{ color: "black", margin: "0" }}
      />

      <DataTable
        columns={columns}
        controllers={{
          fetchData: fetchArchivedSubmissions,
          onCreate: createRecord,
          onUpdate: updateRecord,
          onDelete: deleteRecords,
          onUnarchive: unarchiveRecords,
        }}
        toggles={{
          archive: false,
          unarchive: true,
          delete: true,
          edit: true,
          create: true,
          newSubmission: false,
        }}
        formFields={sections}
      />
    </>
  );
};

export default AdminArchivedPage;
