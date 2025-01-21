import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";
import DataTable from "../components/DataTable/DataTable";
import {
  adminsColumns,
  createAdmin,
  deleteAdmins,
  fetchAdmins,
  updateAdmin,
} from "@controllers/admins";
import { adminFields } from "./adminFields";

const AdminAdminsPage = () => {
  return (
    <>
      <h1>Admins</h1>
      <StandardChunkFiveSubTitleH4
        title="Admins Accounts"
        style={{ color: "black", margin: "0" }}
      />

      <DataTable
        columns={adminsColumns}
        controllers={{
          fetchData: fetchAdmins,
          onCreate: createAdmin,
          onEdit: updateAdmin,
          onDelete: deleteAdmins,
        }}
        formFields={adminFields}
        toggles={{
          archive: false,
          unarchive: false,
          delete: true,
          edit: true,
          create: true,
          newSubmission: true,
          checkboxes: true,
        }}
      />
    </>
  );
};

export default AdminAdminsPage;
