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
import { sections } from "@pages/VolunteerFormPage/sections";
import AuthContext from "@contexts/AuthContext";
import { useContext } from "react";

const superAdminToggles = {
  archive: true,
  unarchive: false,
  delete: true,
  edit: true,
  create: true,
  checkboxes: true,
  newSubmission: true,
};

const editorToggles = {
  archive: true,
  unarchive: false,
  delete: false,
  edit: true,
  create: true,
  checkboxes: true,
  newSubmission: true,
};

const viewerToggles = {
  archive: false,
  unarchive: false,
  delete: false,
  edit: false,
  create: false,
  checkboxes: false,
  newSubmission: false,
};

const AdminSubmissionsPage = () => {
  const { user } = useContext(AuthContext);

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
          onEdit: updateRecord,
          onDelete: deleteRecords,
          onArchive: archiveRecords,
        }}
        formFields={sections}
        toggles={
          user
            ? user.user_role === "super_admin"
              ? superAdminToggles
              : user.user_role === "editor"
              ? editorToggles
              : viewerToggles
            : viewerToggles
        }
      />
    </>
  );
};

export default AdminSubmissionsPage;
