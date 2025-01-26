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
import AuthContext from "@contexts/AuthContext";
import { useContext } from "react";

const superAdminArchiveToggles = {
  archive: false,
  unarchive: true,
  delete: true,
  edit: true,
  create: true,
  checkboxes: true,
  newSubmission: false,
};

const editorArchiveToggles = {
  archive: false,
  unarchive: true,
  delete: false,
  edit: true,
  create: true,
  checkboxes: true,
  newSubmission: false,
};

const viewerArchiveToggles = {
  archive: false,
  unarchive: false,
  delete: false,
  edit: false,
  create: false,
  checkboxes: false,
  newSubmission: false,
};

const AdminArchivedPage = () => {
  const { user } = useContext(AuthContext);

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
        toggles={
          user
            ? user.user_role === "super_admin"
              ? superAdminArchiveToggles
              : user.user_role === "editor"
              ? editorArchiveToggles
              : viewerArchiveToggles
            : viewerArchiveToggles
        }
        formFields={sections}
      />
    </>
  );
};

export default AdminArchivedPage;
